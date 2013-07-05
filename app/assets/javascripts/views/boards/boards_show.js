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
    that.goSortable();
  	return that;
  },

  goSortable: function() {
    $(".cards_container").sortable({
        connectWith: ".cards_container",
        placeholder: "sortable-placeholder",

    //    placeholder: {
    //     element: function(currentItem) {
    //         return $("<div class='sortable-placeholder'><li><em>test</em></li><div>")[0];
    //     },
    //     update: function(container, p) {
    //         return;
    //     }
    // },

        start: function(event,ui){

          debugger
          ui.placeholder.height(parseInt(ui.item.css('height')));
        },

        update: function(event,ui){
          debugger
          var card_id = +ui.item.attr("card-id");
          var list_id = +ui.item.attr("list-id");
          var board_id = +ui.item.attr("board-id");

          var board = boards.findWhere({id: board_id})
          var oldList = board.get("lists").findWhere({id: list_id});
          var newListID = +event.target.getAttribute("list-id");
          var card = oldList.get("cards").findWhere({id: card_id});

          if (oldList.id != newListID) {
            var newList = board.get("lists").findWhere({id: newListID});
            oldList.get("cards").remove(card);
            card.set({list_id: newList.id});
            newList.get("cards").add(card);
            card.save();
          }
        }
      });
  },

  addCard: function(event){
    event.preventDefault();

    var that= this;
    var card = new Trellnote.Models.Card();
    var currBoard = boards.findWhere({id: that.model.id});

    var targetDiv = event.target.parentElement;
    var list_id = $(targetDiv).attr("list-id");

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