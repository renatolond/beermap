Template.page.showAddVenue = function () {
  return Session.get("showAddVenue");
};

Template.page.events({
  'click .btnAddVenue': function() {
    Session.set("showAddVenue", true);
  }
});

Template.addVenue.events({
  'click .save': function (event, template) {
    Session.set("showAddVenue", false);
  },

  'click .cancel': function () {
    Session.set("showAddVenue", false);
  }
});
