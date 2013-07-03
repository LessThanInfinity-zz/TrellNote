Trellnote.Models.Board = Backbone.Model.extend({

	parse: function(server_response){
		that = this;

		var lists = new Trellnote.Collections.Lists(server_response, {parse : true});


		// _(server_response).each(function(server_list){
		// 	lists.create(server_list, { parse: true} )

		// });

		server_response.lists = lists;
		
		return server_response
	},

});
