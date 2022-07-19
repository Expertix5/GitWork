$(document).ready(function(){
    $("header ul li").hover(function(){
      $(this).css("color", "lightblue");
      }, function(){
      $(this).css("color", "white");
    });
  });