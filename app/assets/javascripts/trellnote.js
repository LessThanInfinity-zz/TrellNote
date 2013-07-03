window.Trellnote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, tasks) {
    // alert('Hello from Backbone!');
    console.log("in Init function. Routing.")
    boardsRouter = new Trellnote.Routers.Boards($rootEl, tasks)
    Backbone.history.start();
  }
};

$(document).ready(function(){

// AJAX  SUCCESS WAY ; REMOVE LATER.

// 	current_user = new Trellnote.Models.CurrentUser();
// 	current_user.fetch({
//     success: function (){

//         boards = new Trellnote.Collections.Boards();
//         // boards.fetch({user_id: current_user.id});
//         boards.fetch({
//           user_id: current_user.id,
//           // ask how to get this. 

//         success: function(){
//           console.log("initializing");
//           Trellnote.initialize($("#content"), boards);
//           }
//         });
//     }
//   })
// })

  current_user = JSON.parse($("#bootstrapped_currUser").html());

  boards = new Trellnote.Collections.Boards();
  boards.fetch();
  console.log("initializing");
  Trellnote.initialize($("#content"), boards);
})

