Meteor.subscribe('recipes');

Template.Recipes.helpers({
  recipes: function() {
    options = {
      sort: {
        createdAt: -1
      }
    };
    return Recipes.find({},options);
  }
});