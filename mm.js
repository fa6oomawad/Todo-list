$(document).ready(function(){
    var todoList={
        todo:[],
        addtodo:function(task){
       this.todo.push(task);
      
        },
        deletetodo:function(position){
            this.todo.splice(position,1);
            console.log(this.todo);
        }
       
       
       }

  $("#add").click(function(){
    var text=$("#addtext").val();
    var pretasks= $(".list").html();
    if (text!== ""){
   var task= todoList.addtodo(text);
   console.log(task);
        $(".list").html(pretasks+"<li>"+ text+ "<i class='fas fa-trash-alt'></i></li>");
        $(".list li i").click(function(){
            console.log(todoList.todo.indexOf(task));
        })

    }
  
  
  }); 
  
  


})



