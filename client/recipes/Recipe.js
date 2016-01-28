Template.Recipe.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash': function(){
    Meteor.call('deleteRecipe',this._id);
  }
});

Template.Recipe.helpers({
  updateRecipeId:  function(){
    return this._id;
  }
});