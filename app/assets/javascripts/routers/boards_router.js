Trellnote.Routers.Boards = Backbone.Router.extend({

	initialize: function($rootEl, boards){
		this.$rootEl = $rootEl;
		this.boards = boards;
		console.log("in Routing.", $rootEl)
	},

	routes:{
		"": "index",
		"boards": "new",
		"boards/:id": "show"
	},

	index:function(){
		var that = this;
		console.log('get here??');
		var boardsListView = new Trellnote.Views.BoardsIndex({
				collection: that.boards,
		})

		that.$rootEl.html(boardsListView.render().$el)

	},



});