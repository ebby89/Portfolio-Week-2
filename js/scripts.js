$(document).ready(function(event){   /* INITIAL DOC */

/* Toggle between questions */
  $("button#buttonSubmit").click(function(){ /* SUBMIT BUTTON */
    $("#qOne").fadeToggle();
    $("#userInfo").slideToggle();

  });
  $("button#buttonOne").click(function(){ /* Q1 */
    $("#qOne").slideToggle();
    $("#qTwo").slideToggle();
    $("button#buttonRestart").fadeIn();
  });
  $("button#buttonRestart").click(function(){ /* RESTART BUTTON */
    $("#qOne").fadeIn();
    $("button#buttonSubmit").hide();
    $("#qTwo").hide();
    $("#qThree").hide();
    $("#qFour").hide();
    $("#qFive").hide();
  });
  $("button#buttonTwo").click(function(){ /* Q2 */
    $("#qTwo").slideToggle();
    $("#qThree").slideToggle();
  });
  $("button#buttonThree").click(function(){ /* Q3 */
    $("#qThree").slideToggle();
    $("#qFour").slideToggle();
  });
  $("button#buttonFour").click(function(){ /* Q4 */
    $("#qFour").slideToggle();
    $("#qFive").slideToggle();
  });

/* Submit inputs & show result! */
  $("form#survey").submit(function(event){ /* SURVEY FORM */
    $("#qFive").slideToggle();
    $("#headerStart").slideToggle();
    $("#headerFinal").slideToggle();
    $("#restart").slideToggle();
    event.preventDefault();


  }); /* SURVEY FORM */

});  /* INITIAL DOC */
