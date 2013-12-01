Beers = new Meteor.Collection("beers");
Bars = new Meteor.Collection("bars");
BeersAndBars = new Meteor.Collection("beersandbars");

Bars.allow({
  insert: function(userId, bar) {
    return false;
  },
});

Beers.allow({
  insert: function(userId, beer) {
    return false;
  },
});


var NonEmptyString = Match.Where(function (x) {
  check(x, String);
  return x.length !== 0;
});

var Coordinates = Match.Where(function (x) {
  if(x.length != 2)
    return false;
  check(x[0], Number);
  check(x[1], Number);
  return true;
});

createBar = function (options) {
  var id = Random.id();
  Meteor.call('createBar', _.extend({ _id : id }, options));
  return id;
};

Meteor.methods({
  createBar: function (options) {
    check(options, {
      name: NonEmptyString,
      loc: Coordinates,
      _id: Match.Optional(NonEmptyString)
    });

    if(!this.userId)
      throw new Meteor.Error(403, "You must be logged in");

    var id = options._id || Random.id();
    Bars.insert({
      _id: id,
      creator: this.userId,
      loc: options.loc,
      name: options.name
    });

    return id;
  },
});
