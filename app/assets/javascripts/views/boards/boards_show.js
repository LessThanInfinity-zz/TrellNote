Trellnote.Views.BoardShow = Backbone.View.extend({

  template: JST['boards/show'],

  initialize: function(){
  	var that=this;
  	that.listenTo(that.model,'all',that.render);
  },

  render: function(){
  	var that= this;
  	var content = that.template({
  		board: that.options.model
  	});

  	that.$el.html(content);
  	return that;
  },

});
