Trellnote.Models.Card = Backbone.Model.extend({
		parse: function(server_response){
		that = this;
		
		var tasks = new Trellnote.Collections.Tasks(server_response);

		server_response.tasks = tasks;		
		return server_response
	},

});
