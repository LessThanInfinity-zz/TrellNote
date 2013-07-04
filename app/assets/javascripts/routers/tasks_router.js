Trellnote.Routers.Tasks = Backbone.Router.extend({

	initialize: function($rootEl, tasks){
		this.$rootEl = $rootEl;
		this.tasks = tasks;
		console.log("in Routing.", $rootEl)
	},

	routes:{
		"": "index",
		"tasks": "new",
		"tasks/:id": "show"
	},

	index:function(){
		var that = this;
		console.log('get here??');
		var tasksListView = new Trellnote.Views.TasksShow({
				collection: that.tasks,
		})

		that.$rootEl.html(tasksListView.render().$el)

	},



});
