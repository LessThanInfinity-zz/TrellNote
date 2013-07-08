Trellnote.Views.BoardShow = Backbone.View.extend({

  template: JST['boards/show'],

  events: {
    "click #add_card_link": "addCard",
    "click #add_list_link": "addList",
    "click .show.card": "detach",
    "blur .cardNewMain": "removeCardForm",
    "blur .listNewMain": "removeListForm",
    "add_more_cards": "addCard",

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

        start: function(event,ui){
          ui.placeholder.height(parseInt(ui.item.css('height')));
        },

        update: function(event,ui){
          var card_id = +ui.item.attr("card-id");
          var list_id = +ui.item.attr("list-id");
          var board_id = +ui.item.attr("board-id");

          var board = boards.findWhere({id: board_id})
          var oldList = board.get("lists").findWhere({id: list_id});
          var newListID = +event.target.getAttribute("list-id");
          var card = oldList.get("cards").findWhere({id: card_id});


          // Positioning
          var list_to_update = board.get("lists").findWhere({id: newListID});
          var listCards = list_to_update.get("cards");
          var list_position = +ui.item.next().attr("list-position")


          if (list_position){
            card.set("list_position", list_position)  
          } else{
            card.set("list_position", +ui.item.prev().attr("list-position") +1 )
          }
          

          listCards.each(function(otherCard){

            // debugger 
            console.log("each loop called")
            otherCard_pos = otherCard.get("list_position")

            if (otherCard.id != card.id){
              if ( otherCard_pos >= card.get("list_position")){
                otherCard.set("list_position", otherCard_pos+1);
                otherCard.save()
              }
            }         
          })          

          // addition to collection.
          if (oldList.id != newListID) {

            var newList = board.get("lists").findWhere({id: newListID});
            oldList.get("cards").remove(card);
            card.set({list_id: newList.id});
            newList.get("cards").add(card);            
          }          

          card.save();

          debugger
          //  seriously need to refactor this: trigger change??
          oldList.get("cards").remove(card);
          oldList.get("cards").add(card);
          // oldList.get("cards").trigger("update", oldList.get("cards"));
          // oldList.get("cards").sync("read", oldList.get("cards"));

        }


      });
  },



  addCard: function(event){
    event.preventDefault();

    var that= this;
    var card = new Trellnote.Models.Card();
    var currBoard = boards.findWhere({id: that.model.id});

    var targetDiv = event.target.parentElement;
    var list_id = $(targetDiv.parentElement).attr("list-id");

    var currList = currBoard.get("lists").findWhere({ id: +list_id}) 
    // + needed here because string vs integer


    var cardsNewView = new Trellnote.Views.CardsNew({
        model: card,
        collection: currList.get("cards"),
        view: that

    });
    
    $(targetDiv).html(cardsNewView.render().$el)
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
  },


  removeCardForm: function(event){
    $(".cardNewMain").remove();
    this.render()
  },

  removeListForm: function(event){
    $(".listNewMain").remove();
    this.render()
  }


})