Meteor.publish('recipes', function() {

  Meteor._sleepForMs( 5000);

  return Recipes.find({owner:this.userId});
});