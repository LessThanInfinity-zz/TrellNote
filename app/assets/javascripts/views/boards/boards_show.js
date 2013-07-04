Trellnote.Views.BoardShow = Backbone.View.extend({

  template: JST['boards/show'],

  events: {
    "click #add_card_link": "addCard",
    "click #add_list_link": "addList"
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

    var that= this;
    var card = new Trellnote.Models.Card();
    var currBoard = boards.findWhere({id: that.model.id});

    var targetDiv = event.target.parentElement;
    var list_id = $(targetDiv).attr("data-id");

    var currList = currBoard.get("lists").findWhere({ id: +list_id}) 
    // + needed here because string vs integer


    var cardsNewView = new Trellnote.Views.CardsNew({
        model: card,
        collection: currList.get("cards")
    })


    // targetDiv.innerHTML += cardsNewView.render().$el
    $(targetDiv).append(cardsNewView.render().$el)
    // debugger
  },

  addList: function(event){
    event.preventDefault();

    
  }

})