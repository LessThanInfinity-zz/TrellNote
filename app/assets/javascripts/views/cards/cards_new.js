Trellnote.Views.CardsNew = Backbone.View.extend({

  template: JST['cards/new'],

  events: {
   "click #new_card_button": "create",
   },

  // initialize: function(){
  // 	var that=this;
  // },

  render: function(){
  	var that= this;
  	var content = that.template({
      model: that.model
  	});

  	that.$el.html(content);
  	return that;
  },

  create: function(event){
    var that= this;
    event.preventDefault() // because used inputsubmit.

    var card_input = $("#new_card").serializeJSON();    


    // last_item= that.collection.last();

    // var position = 0
    // if (last_item){
    //   position = last_item.get('position') + 1
    // }
    // card_input.card.position = position;
    debugger
    

    // that.model.set(card_input.card);
    that.collection.create(card_input.card);
    // that.collection.trigger("add");

    // that.collection.save({}, 
    //   {success: function(){
    //     // that.collection.add(that.model);
    //     console.log(that.collection);
    //     // Backbone.history.navigate("#/");

    //   }, 
    //   error: function(object, errors){
    //     var length = errors.responseText.length - 1
    //     that.$el.prepend(errors.responseText.substring(1, length));
    //   }
    // })

  },



});
