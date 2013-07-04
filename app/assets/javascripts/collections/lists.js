Trellnote.Collections.Lists = Backbone.Collection.extend({

  model: Trellnote.Models.List,
  url: function(){
  	console.log(this.board_id)
  	return "/boards/"+ this.board_id +"/lists/"
  },

});
