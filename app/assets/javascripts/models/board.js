Trellnote.Models.Board = Backbone.Model.extend({

	// urlRoot: "/boards",

	parse: function(server_response){
		that = this;

		var lists = new Trellnote.Collections.Lists(server_response.lists, {parse : true});
		lists.board_id = server_response.id;


		server_response.lists = lists;		
		return server_response
	},

		

});
