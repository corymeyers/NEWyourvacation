$(document).ready(function(){

  $('form').submit(function(event) {
    var personal1Input = $("input#personal1").val();
    var q1Input = $("input#question1").val();
    var q2Input = $("input#question2").val();
    var q3Input = $("input#question3").val();
    var q4Input = $("input#question4").val();
    var q5Input = $("input#question5").val();
    function getScore(q1Input, q1Input, q2Input, q3Input, q4Input, q5Input) {"q1Input"+"q1Input"+"q2Input"+"q3Input"+"q4Input"+"q5Input"}
    var score = getScore


    $('.personal1').text(personal1Input);

    if(score = 1a2a3a4a5a) {
      $('#vacation1show').show();
    } else if (score = 1b2a3a4a5a) {
        $('#vacation2show').show();
    } else if (score = 1a2b3a4a5a) {
        $('#vacation3show').show();
    } else {
    $('#vacation4show').show();
    }

      event.preventDefault();
    });

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
