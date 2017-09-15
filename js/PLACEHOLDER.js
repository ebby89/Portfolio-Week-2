
var scoreOne = parseInt($("input:radio[name=frontBack]:checked").val());
var scoreTwo = parseInt($("input:radio[name=work]:checked").val());
var scoreThree = parseInt($("input:radio[name=whyCode]:checked").val());
var scoreFour = parseInt($("input:radio[name=people]:checked").val());
var scoreFive = parseInt($("input:radio[name=schedule]:checked").val());
    $("form#survey").submit(function(event){ /* THREE */
    }); /* THREE */

    event.preventDefault();

  $("#userInfo").fadeToggle();



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
