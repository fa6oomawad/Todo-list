$(document).ready(function(){
var flag=0;
  $("#add").click(function(){
      var text=$("#addtext").val();
     var pre= $(".list").html();
     if (text!== ""){
        $(".list").fadeIn(3000).html(pre+ "<li>"+ text + " <i class='fas fa-trash-alt'></i></li>");
        $(".list li").click(function(){
            if (flag==0){
          $(this).css("text-decoration","line-through") ;
          $(this).css("background-color","rgba(158, 158, 161, 0.712)");
          flag=1;
          console.log("his");
      }
      else{
          $(this).css("text-decoration","none") ;
          $(this).css("background-color","white");
          flag=0;
      }
      
        });
     }

     
  $(".list li i").click(function(){
    $(this).parent().remove();
  });
  });


 



})