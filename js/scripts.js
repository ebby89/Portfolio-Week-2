$(document).ready(function(event){   /* INITIAL DOC */

  $("button#buttonSubmit").click(function(){ /* SUBMIT BUTTON */
    $("#qOne").fadeToggle();
    $("button#buttonSubmit").hide();
  }); /* SUBMIT BUTTON */
  $("button#buttonOne").click(function(){ /* Q1 */
    $("#qOne").slideToggle();
    $("#qTwo").slideToggle();
    $("button#buttonRestart").fadeIn();
  }); /* Q1 */
  $("button#buttonRestart").click(function(){ /* RESTART BUTTON */
    $("#qOne").fadeIn();
    $("button#buttonSubmit").hide();
    $("#qTwo").hide();
    $("#qThree").hide();
    $("#qFour").hide();
    $("#qFive").hide();
  }); /* RESTART BUTTON */
  $("button#buttonTwo").click(function(){ /* Q2 */
    $("#qTwo").slideToggle();
    $("#qThree").slideToggle();
  }); /* Q2 */
  $("button#buttonThree").click(function(){ /* Q3 */
    $("#qThree").slideToggle();
    $("#qFour").slideToggle();
  }); /* Q3 */
  $("button#buttonFour").click(function(){ /* Q4 */
    $("#qFour").slideToggle();
    $("#qFive").slideToggle();
  }); /* Q4 */
  $("button#buttonFive").click(function(){ /* QFinal */
    alert("CONGRATS TESTING WORKED");
  }); /* QFinal */
});  /* INITIAL DOC */
