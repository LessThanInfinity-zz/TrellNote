Trellnote.Models.List = Backbone.Model.extend({

	parse: function(server_response){
		that = this;

		var cards = new Trellnote.Collections.Cards(server_response.cards, 
			{ parse : true});

			cards.list_id = server_response.id;
			cards.board_id= server_response.board_id;


		server_response.cards = cards;		
		return server_response
	},

});
