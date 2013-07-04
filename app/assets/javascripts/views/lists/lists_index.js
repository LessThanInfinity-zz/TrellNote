Trellnote.Views.ListsIndex = Backbone.View.extend({

  template: JST['lists/index'],
  
  initialize: function(){
    var that=this;
    debugger
    that.listenTo(that.collection,'all',that.render);
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

