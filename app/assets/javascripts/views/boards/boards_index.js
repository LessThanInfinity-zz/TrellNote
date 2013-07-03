Trellnote.Views.BoardsIndex = Backbone.View.extend({

  template: JST['boards/index'],


  initialize: function(){
  	var that=this;
  	that.listenTo(that.collection,'all',that.render);
  },

  render: function(){
  	var that= this;
  	var content = that.template({
  		boards : that.collection
  	});

  	that.$el.html(content);
  	return that;
  },

});

