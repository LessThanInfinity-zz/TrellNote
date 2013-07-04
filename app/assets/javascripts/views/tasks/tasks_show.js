Trellnote.Views.TasksShow = Backbone.View.extend({

  template: JST['tasks/show'],

  initialize: function(){
    var that=this;
    that.listenTo(that.collection,'all',that.render)
  },

  render: function(){
    var that= this;
    var content = that.template({
      tasks : that.collection
    });

    that.$el.html(content);
    return that
  },


});
