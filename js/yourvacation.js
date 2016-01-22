$(document).ready(function(){

$("form#vacationQuestions").submit(function(event) {
  var q1 = $("select#q1").val();
  var q2 = $("select#q2").val();
  var q3 = $("select#q3").val();
  var q4 = $("select#q4").val();
  var q5 = $("select#q5").val();

  if(q1 === "Cold" && q2 === "Beaches" && q3 === "Money" && q4 === "Short" && q5 === "Yes") {
    $('#vacation1show').show();
  } else if (q1 === "Warm" && q2 === "Beaches" && q3 === "Money" && q4 === "Short" && q5 === "Yes") {
      $('#vacation2show').show();
  } else if (q1 === "Cold" && q2 === "Beaches" && q3 === "Money" && q4 === "Short" && q5 === "No") {
      $('#vacation3show').show();
  } else {
      $('#vacation4show').show();
  }

    event.preventDefault();
})

$(".clickable1").click(function() {
    $("#vacation1show").toggle();
    $("#vacation1hide").toggle();
  });

$(".clickable2").click(function() {
    $("#vacation2show").toggle();
    $("#vacation2hide").toggle();
  });

$(".clickable3").click(function() {
    $("#vacation3show").toggle();
    $("#vacation3hide").toggle();
  });
});
