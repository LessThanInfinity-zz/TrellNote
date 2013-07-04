Trellnote.Views.ListsShow = Backbone.View.extend({

  template: JST['lists/show'],
  
  initialize: function(){
    var that=this;
    that.listenTo(that.options.list.attributes.cards,'all',that.render);
  },

  render: function(){

    debugger
    var that= this;
    var list_content = that.template({
      list: that.options.list,
    });
    
    return list_content;
  },

});

