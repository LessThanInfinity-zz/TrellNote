Trellnote.Views.BoardsNew = Backbone.View.extend({

  template: JST['boards/new'],

  events: {
   "click #new_board_button": "create"
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

    var board_input = $("#new_board").serializeJSON();    

    // that.model.set(board_input.board);
    that.collection.create(board_input.board)

    // that.collection.save({}, 
    //   {success: function(){
    //     // that.collection.add(that.model);

    //     Backbone.history.navigate("#/");

    //   }, 
    //   error: function(object, errors){
    //     var length = errors.responseText.length - 1
    //     that.$el.prepend(errors.responseText.substring(1, length));
    //   }
    // })

  },


});
