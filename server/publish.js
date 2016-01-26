Meteor.publish('recipes', function() {
  return Recipes.find({owner:this.userId});
});