Trellnote.Collections.Cards = Backbone.Collection.extend({

  model: Trellnote.Models.Card,

  url: function(){
  	return "/boards/" +this.board_id+"/lists/"+this.list_id+"/cards/"
  },

});
