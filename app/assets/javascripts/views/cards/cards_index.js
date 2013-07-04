Trellnote.Views.CardsIndex = Backbone.View.extend({

  template: JST['cards/index'],
  
  initialize: function(){
  	var that=this;
  	that.listenTo(that.collection,'all',that.render);
  },

  render: function(){
  	debugger
  	var that= this;
  	var content = that.template({
      card: that.options.card,
      list: that.options.list
  	});
  	
  	return content;
  },

});
