Trellnote.Views.CardsShow = Backbone.View.extend({

  template: JST['cards/show'],
  
  initialize: function(){
    var that=this;
    that.listenTo(that.collection,'all',that.render);
      // that.listenTo(that.options.list.attributes.tasks,'all',that.render);  
  },

  render: function(){
    var that= this;
    var content = that.template({
      card: that.options.card,
      list: that.options.list
    });
    
    return content;
  },

});
