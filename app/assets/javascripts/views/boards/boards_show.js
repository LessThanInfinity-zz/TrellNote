Trellnote.Views.BoardShow = Backbone.View.extend({

  template: JST['boards/show'],

  events: {
    "click #add_card_link": "addCard"
  },

  initialize: function(){
  	var that = this;
  	that.listenTo(that.model,'all',that.render)
  },

  render: function(){
  	var that= this;
  	var content = that.template({
  		board: that.options.model
  	});

  	that.$el.html(content);
  	return that;
  },

  addCard: function(event){
    event.preventDefault();
    console.log("is it even here?");

    var that= this;
    var card = new Trellnote.Models.Card();
    var currBoard = boards.findWhere({id: that.model.id});
    var list_id = $(targetDiv).attr("data-id");

    var targetDiv = event.target.parentElement;

    var cardsNewView = new Trellnote.Views.CardsNew({
        model: card,
        collection: currBoard.get("lists").findWhere({
          id: list_id 
      })        
    })

    // debugger
    // targetDiv.innerHTML += cardsNewView.render().$el
    $(targetDiv).append(cardsNewView.render().$el)
    // debugger
  }

})