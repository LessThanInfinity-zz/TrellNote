Trellnote.Views.ListsIndex = Backbone.View.extend({

  template: JST['lists/index'],
  
  initialize: function(){
    console.log("indexingakjsd;lkajdf;l")
    var that=this;
    that.listenTo(that.collection,'all',that.render);
  },

  render: function(){

    var that= this;
    var list_content = that.template({
      list: that.options.list,
    });
    
    return list_content;
  },

});

