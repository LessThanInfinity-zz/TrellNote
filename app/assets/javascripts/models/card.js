Trellnote.Models.Card = Backbone.Model.extend({

		urlRoot: function(){
			return "/boards/"+1+"/lists/"+1+"/cards"

		},

		parse: function(server_response){
		that = this;
		var tasks = new Trellnote.Collections.Tasks(server_response.tasks, {card_id: server_response.id,
			list_id: server_response.list_id,
			board_id: server_response.board_id
			});

		server_response.tasks = tasks;		
		return server_response
	},

});
