Trellnote.Models.Card = Backbone.Model.extend({

		urlRoot: function(){
			return "/boards/"+1+"/lists/"+1+"/cards"
			debugger
		},

		parse: function(server_response){
		that = this;
		
		var tasks = new Trellnote.Collections.Tasks(server_response.tasks);

		server_response.tasks = tasks;		
		return server_response
	},

});
