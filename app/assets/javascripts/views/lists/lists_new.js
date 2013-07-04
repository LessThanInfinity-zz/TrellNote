Trellnote.Views.ListsNew = Backbone.View.extend({

  template: JST['lists/new'],

  events: {
   "click #new_list_button": "create"
  },

  // initialize: function(){
  // 	var that=this;
  // },

  render: function(){

  	var that= this;
  	var content = that.template({
      model: that.model
  	});

  	that.$el.html(content);
  	return that;
  },

  create: function(event){
    var that= this;
    event.preventDefault() // because used inputsubmit.

    // this is going to cause an issue. -> no board id. unless collection?
    var list_input = $("#new_list").serializeJSON();    
      // debugger
    // that.model.set(list_input.list);
    that.collection.create(list_input.list,{parse: true, board_id: that.collection.board_id});

  
    // that.collection.trigger("add");

    // that.collection.save({}, 
    //   {success: function(){
    //     // that.collection.add(that.model);
    //     console.log(that.collection);
    //     // Backbone.history.navigate("#/");

    //   }, 
    //   error: function(object, errors){
    //     var length = errors.responseText.length - 1
    //     that.$el.prepend(errors.responseText.substring(1, length));
    //   }
    // })

  },



});
