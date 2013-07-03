Trellnote.Routers.Boards = Backbone.Router.extend({

	initialize: function($rootEl, boards){
		this.$rootEl = $rootEl;
		this.boards = boards;
		console.log("in Routing.", $rootEl)
	},

	routes:{
		"": "index",
		"boards": "new",
		"boards/:id": "show",
	},

	index:function(){
		var that = this;
		console.log('get here??');
		var boardsListView = new Trellnote.Views.BoardsIndex({
				collection: that.boards ,
		})

		that.$rootEl.html(boardsListView.render().$el)

	},

	show:function(id){
		var that = this;
		var board = boards.findWhere({id: parseInt(id)})
		if (!board){
			Backbone.history.navigate("#/");
		} else {			
			
			var boardShowView = new Trellnote.Views.BoardShow({
				model: board,
				
			});

			that.$rootEl.html(boardShowView.render().$el)
		}
	},

  new: function(event){
    var that = this;
    var board = new Trellnote.Models.Board();
    
    var boardsNewView = new Trellnote.Views.BoardsNew({ 
    		model: board,
    		collection: that.boards 
    	});

    that.$rootEl.append(boardsNewView.render().$el);
    console.log('newboard')
  },


});
