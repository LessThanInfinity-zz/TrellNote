Trellnote.Collections.Tasks = Backbone.Collection.extend({

  model: Trellnote.Models.Task,

  url: function(){
  	  	return "/boards/" +this.board_id+"/lists/"+this.list_id+"/cards/"+this.card_id+"/tasks/"

	},

})