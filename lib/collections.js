Recipes = new Mongo.Collection('recipes');

RecipesSchema = new SimpleSchema({
  name: {
    type: String,
    label: '名称'
  },
  desc: {
    type: String,
    label: '描述'
  },
  owner: {
    type: String,
    label: '创建人',
    autoValue: function() {
      return this.userId;
    }
  },
  createdAt: {
    type: Date,
    label: '创建日期',
    autoValue: function () {
      return new Date;
    }
  }
});

Recipes.attachSchema(RecipesSchema);