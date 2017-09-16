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
    $("button#buttonRestart").fadeOut();
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
/* Single input variables */
    var frontBack = parseInt($("input:radio[name=frontBack]:checked").val());
    var work = parseInt($("input:radio[name=work]:checked").val());
    var whyCode = parseInt($("input:radio[name=whyCode]:checked").val());
    var people = parseInt($("input:radio[name=people]:checked").val());
    var schedule = parseInt($("input:radio[name=schedule]:checked").val());
    var userName = $("input#name").val();
/* Multi input variable -- Ignores weeder questions Q1 & Q5 */
    var scoreResult = work + whyCode + people

/* Check for overriding "Intro" or "CSS" results */
    if (schedule === 2) {
      $(".intro").show();
      $(".name").text(userName);
    } else if (frontBack === 2) {
      $(".cCss").show();
      $(".name").text(userName);
    } else if (scoreResult <= 6) {
      $(".cSharp").show();
      $(".name").text(userName);
    } else if (scoreResult === 7 || scoreResult === 8) {
      $(".rRuby").show();
      $(".name").text(userName);
    } else if (scoreResult >= 9 && scoreResult <= 11) {
      $(".jJava").show();
      $(".name").text(userName);
    } else if (scoreResult >= 12) {
      $(".pPhp").show();
      $(".name").text(userName);
    } else {
      $(".noInput").show();
      $(".name").text(userName);
    }
  }); /* SURVEY FORM */
});  /* INITIAL DOC */
