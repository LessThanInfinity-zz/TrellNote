Trellnote.Views.BoardShow = Backbone.View.extend({

  template: JST['boards/show'],

  events: {
    "click #add_card_link": "addCard",
    "click #add_list_link": "addList",
    "click .show.card": "detach"
  },

  initialize: function(){

  	var that = this;
  	that.listenTo(that.model,'all',that.render);
    that.listenTo(that.model.get("lists"), 'all',that.render);
    
    that.model.get("lists").each(function(list){
      that.listenTo(list.get("cards"), "all", that.render)
    })
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
    });
    
    $(targetDiv).append(cardsNewView.render().$el)
  },

  addList: function(event){
    event.preventDefault();

    var that = this;
    var lists = that.model.get("lists")

    var listsNewView = new Trellnote.Views.ListsNew({
        collection: lists
    });

    var targetDiv = event.target.parentElement;
    $(targetDiv).append(listsNewView.render().$el); 
  },

  detach: function(event){
    card = event.target;

    // $(card).draggable();
    // debugger
  }

})