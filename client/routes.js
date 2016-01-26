FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipes', {
  name: 'recipes',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});

FlowRouter.route('/recipes/:id', {
  name: 'recipe',
  action() {
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});
