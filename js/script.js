$(function(){
    $("#header").css("color", "#852614");
    //-- text change --//
    $("#but1").click(function(){
        $("#header").css("color", "#CAB181");
     });
     $("#but1").dblclick(function(){
        $("#header").css("color", "#852614");
     });
    
     $("#but2").click(function(){
        $("#header").css("text-align","center");
      });
      $("#but6").click(function(){
        $("#header").css("text-align","left");
      });
      $("#but7").click(function(){
        $("#header").each(function(){
            $(this).html(prompt('input'));
        //     header.innerHTML += " ";
        // header.innerHTML += prompt("input")
        });
      });
  //-- img change --//

   
//  $("p").click(function(){ 
//         $(this).hide(); 
//     });
     $("#but3").click(function(){
            $("#footer img").hide(); 
        });
     });
     $("#but4").click(function(){
        $("#footer img").show(); 
    });

     $("#but5").click(function(){
        $("#footer img ").css("width", 100);
     });
     $("#but5").dblclick(function(){
        $("#footer img").css("width", 312);
     });
  
    
