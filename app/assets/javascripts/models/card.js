Trellnote.Models.Card = Backbone.Model.extend({
			
		urlRoot: function(){
			return "/boards/"+this.board_id+"cards"
		},

		parse: function(server_response){
		that = this;
		
		var tasks = new Trellnote.Collections.Tasks(server_response.tasks);

		server_response.tasks = tasks;		
		return server_response
	},

});
