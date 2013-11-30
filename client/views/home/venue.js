Template.page.showAddVenue = function () {
  return Session.get("showAddVenue");
};

Template.page.events({
  'click .btnAddVenue': function() {
    Session.set("showAddVenue", true);
  }
});

Template.addVenue.events({
  'click .btnAddVenueConfirm': function (event, template) {
//     var title = template.find(".title").value;	
//     var description = template.find(".description").value;
//     var public = ! template.find(".private").checked;
//     var coords = Session.get("createCoords");
// 
//     if (title.length && description.length) {
//       var id = createParty({
//         title: title,
//         description: description,
//         x: coords.x,
//         y: coords.y,
//         public: public
//       });
// 
//       Session.set("selected", id);
//       if (! public && Meteor.users.find().count() > 1)
//         openInviteDialog();
      Session.set("showAddVenue", false);
//     } else {
//       Session.set("createError",
//                   "It needs a title and a description, or why bother?");
//     }
  }
});