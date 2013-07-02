window.Trellnote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, tasks) {
    // alert('Hello from Backbone!');
    console.log("in Init function. Routing.")
    tasksRouter = new Trellnote.Routers.Tasks($rootEl, tasks)
    Backbone.history.start();
  }
};

$(document).ready(function(){

	current_user = new Trellnote.Models.CurrentUser();
	current_user.fetch({
    success: function (){

        tasks = new Trellnote.Collections.Tasks();
        // tasks.fetch({user_id: current_user.id});
        tasks.fetch({
          user_id: current_user.id,
          // ask how to get this. 

        success: function(){
          console.log("initializing");
          Trellnote.initialize($("#content"), tasks);
          }
        });
    }
  })




  


});
