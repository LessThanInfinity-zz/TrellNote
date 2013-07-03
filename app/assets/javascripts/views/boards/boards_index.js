Trellnote.Views.BoardsIndex = Backbone.View.extend({

  template: JST['boards/index'],

  events: {
   "click #new_board_link": "newBoard"
  },

  initialize: function(){
  	var that=this;
  	that.listenTo(that.collection,'all',that.render);
  },

  render: function(){
  	var that= this;
  	var content = that.template({
  		boards : that.collection
  	});

  	that.$el.html(content);
  	return that;
  },

  newBoard: function(event){
    var that = this;
    var board = new Trellnote.Models.Board();


    var boardsNewView = new Trellnote.Views.BoardsNew({  
        model: board,
        collection: boards
      });

    that.$el.append(boardsNewView.render().$el);
    $(".boardNewMain").css({left: event.pageX, top: event.pageY})
    console.log('newboard')
  },

});

