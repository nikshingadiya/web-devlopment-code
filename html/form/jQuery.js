$(document).ready(function(){
    $(".container-0").mouseover(function(){
        $(".container-0").css("box-shadow","0 40px 60px -20px grey");
        $(".container-0").css("z-index",200);
        $(".container-0").css("margin-top",20);
        
      });

    $(".container-0").mouseout(function(){
        $(".container-0").css("box-shadow","0px 0px 0px grey");
        $(".container-0").css("margin-top","auto");
    });
  });