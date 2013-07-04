Trellnote.Models.Board = Backbone.Model.extend({

	urlRoot: "/boards",

	parse: function(server_response){
		that = this;

		var lists = new Trellnote.Collections.Lists(server_response.lists, {parse : true});
		lists.board_id = server_response.id;


		// _(server_response).each(function(server_list){
		// 	lists.create(server_list, { parse: true} )

		// });

		server_response.lists = lists;
		
		return server_response
	},

		

});
