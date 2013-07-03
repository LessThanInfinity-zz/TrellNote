Trellnote.Models.List = Backbone.Model.extend({

	parse: function(server_response){
		that = this;
		
		var cards = new Trellnote.Collections.Cards(server_response, {parse : true});

		server_response.cards = cards;		
		return server_response
	},

});
