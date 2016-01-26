Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function( userId, doc) {
    return !!userId;
  }
});

Ingredient = new SimpleSchema({
  name: {
    type: String,
    label: '名称'
  },
  amount: {
    type: String,
    label: '数量'
  }
});

RecipesSchema = new SimpleSchema({
  name: {
    type: String,
    label: '名称'
  },
  desc: {
    type: String,
    label: '描述'
  },
  ingredients: {
    type: [Ingredient],
    label: '原料'
  },
  owner: {
    type: String,
    label: '创建人',
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: '创建日期',
    autoValue: function () {
      return new Date;
    },
    autoform: {
      type: 'hidden'
    }
  }
});

Recipes.attachSchema(RecipesSchema);