Trellnote.Collections.Lists = Backbone.Collection.extend({

  model: Trellnote.Models.List,
  url: function(){
  	return "boards/"+ this.board_id +"/lists/"
  },

});
