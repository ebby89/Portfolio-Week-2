$(document).ready(function(){   /* ONE */
  $("button#buttonSubmit").click(function(){
    $("#userInfo").slideToggle();
    $("#qOne").slideToggle();
  });
  $("button#buttonOne").click(function(){
    $("#qOne").slideToggle();
    $("#qTwo").slideToggle();
  });
  $("button#buttonTwo").click(function(){
    $("#qTwo").slideToggle();
    $("#qThree").slideToggle();
  });
  $("button#buttonThree").click(function(){
    $("#qThree").slideToggle();
    $("#qFour").slideToggle();
  });
  $("button#buttonFour").click(function(){
    $("#qFour").slideToggle();
    $("#qFive").slideToggle();
  });


});  /* ONE */
