var number = 45;

var intervalId;

var correctA = 0;
var incorrectA = 0;

// questions

var questions = [ 
{
  question: "What is Rick's favorite attraction in Anatomy Park?",
  answers: ["The Bone Train", "Spleen Mountain", "Bladder Falls", "Pirates of the Pancreas"],
  correct: "Pirates of the Pancreas"   
},
{
  question: "What is the meaning of 'wubaluba dub dub?",
  answers: ["I'm drunk", "I'm in great pain", "I'm smarter than everyone", "My wife left me"],
  correct: "I'm in great pain"
},
{
  question: "Who does Morty have a crush on?",
  answers: ["Tammy", "Vanessa", "Jessica", "Jennifer"],
  correct: "Jessica"
},
{
  question: "Who voices both Rick and Morty?",
  answers: ["Dan Harmon", "Justin Roiland", "Chris Parnell", "Morgan Freeman"],
  correct: "Justin Roiland"
},
{
  question: "What is on a cob on Cob Planet?",
  answers: ["birds", "molecules", "corn", "everthing"],
  correct: "everything"
},
{
  question: "What was Jerry's successful advertising pitch?",
  answers: ["Thirsty for milk?", "Hungry for apples?", "Addicted to lasagna?", "Craving for muffins?"],
  correct: "Hungry for Apples?"
},
{
  question: "Who comes to the rescue when Rick and Morty are performing on 'Planet Music' in the episode 'Get Schwifty'?",
  answers: ["Obama", "Bird Person", "Water-T", "Ice-T"],
  correct: "Ice-T"
},
{
  question: "Which longtime family-friend does Beth shoot?",
  answers: ["Mr.Poopybutthole", "Squanchy", "Bird Person", "Mr. Meeseeks"],
  correct: "Mr. Poopybutthole"
},
{
  question: "Who is the only one allowed to have Eyeholes?",
  answers: ["Rick", "Tiny Rick", "Eyehole Man", "Jerry"],
  correct: "Eyehole Man"
},
{
  question: "Who won the Gear Wars?",
  answers: ["The Gearheads", "The Cromulons", "The Bird People", "Nobody cares"],
  correct: "Nobody cares"
}
];     

$("#start").on("click", function() {

  $(this).hide;

  $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");
  run();


  $("#q1").html("<h3>" + questions[0].question + "</h3>");
  $("#a1").html("<input type='radio' name=a1' value='0'>" + "<label>" + questions[0].answers[0] + "</label>"
  + "<input type='radio' name='a1' value='1'>" + "<label>" + questions[0].answers[1] + "</label>"
  + "<input type='radio' name='a1' value='2'>" + "<label>" + questions[0].answers[2] + "</label>"
  + "<input type='radio' name='a1' value='3'>" + "<label>" + questions[0].answers[3] + "</label><br><br>"
  );


  $("#q2").html("<h3>" + questions[1].question + "</h3>");
  $("#a2").html("<input type='radio' name=a1' value='0'>" + "<label>" + questions[1].answers[0] + "</label>"
  + "<input type='radio' name='a2' value='1'>" + "<label>" + questions[1].answers[1] + "</label>"
  + "<input type='radio' name='a2' value='2'>" + "<label>" + questions[1].answers[2] + "</label>"
  + "<input type='radio' name='a2' value='3'>" + "<label>" + questions[1].answers[3] + "</label><br><br>"
  );


  $("#q3").html("<h3>" + questions[2].question + "</h3>");
  $("#a3").html("<input type='radio' name=a1' value='0'>" + "<label>" + questions[2].answers[0] + "</label>"
  + "<input type='radio' name='a3' value='1'>" + "<label>" + questions[2].answers[1] + "</label>"
  + "<input type='radio' name='a3' value='2'>" + "<label>" + questions[2].answers[2] + "</label>"
  + "<input type='radio' name='a3' value='3'>" + "<label>" + questions[2].answers[3] + "</label><br><br>"
  );


  $("#q4").html("<h3>" + questions[3].question + "</h3>");
  $("#a4").html("<input type='radio' name=a1' value='0'>" + "<label>" + questions[3].answers[0] + "</label>"
  + "<input type='radio' name='a4' value='1'>" + "<label>" + questions[3].answers[1] + "</label>"
  + "<input type='radio' name='a4' value='2'>" + "<label>" + questions[3].answers[2] + "</label>"
  + "<input type='radio' name='a4' value='3'>" + "<label>" + questions[3].answers[3] + "</label><br><br>"
  );


  $("#q5").html("<h3>" + questions[4].question + "</h3>");
  $("#a5").html("<input type='radio' name=a1' value='0'>" + "<label>" + questions[4].answers[0] + "</label>"
  + "<input type='radio' name='a5' value='1'>" + "<label>" + questions[4].answers[1] + "</label>"
  + "<input type='radio' name='a5' value='2'>" + "<label>" + questions[4].answers[2] + "</label>"
  + "<input type='radio' name='a5' value='3'>" + "<label>" + questions[4].answers[3] + "</label><br><br>"
  );

  $("#q6").html("<h3>" + questions[5].question + "</h3>");
  $("#a6").html("<input type='radio' name=a1' value='0'>" + "<label>" + questions[5].answers[0] + "</label>"
  + "<input type='radio' name='a6' value='1'>" + "<label>" + questions[5].answers[1] + "</label>"
  + "<input type='radio' name='a6' value='2'>" + "<label>" + questions[5].answers[2] + "</label>"
  + "<input type='radio' name='a6' value='3'>" + "<label>" + questions[5].answers[3] + "</label><br><br>"
  );

  $("#q7").html("<h3>" + questions[6].question + "</h3>");
  $("#a7").html("<input type='radio' name=a1' value='0'>" + "<label>" + questions[6].answers[0] + "</label>"
  + "<input type='radio' name='a7' value='1'>" + "<label>" + questions[6].answers[1] + "</label>"
  + "<input type='radio' name='a7' value='2'>" + "<label>" + questions[6].answers[2] + "</label>"
  + "<input type='radio' name='a7' value='3'>" + "<label>" + questions[6].answers[3] + "</label><br><br>"
  );

  $("#q8").html("<h3>" + questions[7].question + "</h3>");
  $("#a8").html("<input type='radio' name=a1' value='0'>" + "<label>" + questions[7].answers[0] + "</label>"
  + "<input type='radio' name='a8' value='1'>" + "<label>" + questions[7].answers[1] + "</label>"
  + "<input type='radio' name='a8' value='2'>" + "<label>" + questions[7].answers[2] + "</label>"
  + "<input type='radio' name='a8' value='3'>" + "<label>" + questions[7].answers[3] + "</label><br><br>"
  );

  $("#q9").html("<h3>" + questions[8].question + "</h3>");
  $("#a9").html("<input type='radio' name=a1' value='0'>" + "<label>" + questions[8].answers[0] + "</label>"
  + "<input type='radio' name='a9' value='1'>" + "<label>" + questions[8].answers[1] + "</label>"
  + "<input type='radio' name='a9' value='2'>" + "<label>" + questions[8].answers[2] + "</label>"
  + "<input type='radio' name='a9' value='3'>" + "<label>" + questions[8].answers[3] + "</label><br><br>"
  );

  $("#q10").html("<h3>" + questions[9].question + "</h3>");
  $("#a10").html("<input type='radio' name=a1' value='0'>" + "<label>" + questions[9].answers[0] + "</label>"
  + "<input type='radio' name='a10' value='1'>" + "<label>" + questions[9].answers[1] + "</label>"
  + "<input type='radio' name='a10' value='2'>" + "<label>" + questions[9].answers[2] + "</label>"
  + "<input type='radio' name='a10' value='3'>" + "<label>" + questions[9].answers[3] + "</label><br><br>"
  );


  $("#submit").html("<button id='done' class='btn'>Done</button>");
  
  $("#done").on("click", function() {

    keepingScore();

    displayResults();

  });
});

  function run() {
    
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }


  function decrement() {

    number--;
    $("#time").html("<h2> Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number === 0) {
      stop();

      keepingScore();
      displayResults();

    }
  }

  function stop() {
    clearInterval(intervalId);
  }
  
  function displayResults() {

    $("#time").hide();
    $("#q1").hide();
    $("#a1").hide();
    $("#q2").hide();
    $("#a2").hide();
    $("#q3").hide();
    $("#a3").hide();
    $("#q4").hide();
    $("#a4").hide();
    $("#q5").hide();
    $("#a5").hide();
    $("#q6").hide();
    $("#a6").hide();
    $("#q7").hide();
    $("#a7").hide();
    $("#q8").hide();
    $("#a8").hide();
    $("#q9").hide();
    $("#a9").hide();
    $("#q10").hide();
    $("#a10").hide();
    $("#submit").hide();

    $("#resultsMessage").html("<h3>Let's see what you got!</h3>");
    $("#correct").html("Correct Answers: " + correctA);
    $("#incorrect").html("Incorrect Answers: " + incorrectA);
  }

  function keepingScore() {

    const userAnswer1 = $("input[name='a1']:checked").val();
    const userAnswer2 = $("input[name='a2']:checked").val();
    const userAnswer3 = $("input[name='a3']:checked").val();
    const userAnswer4 = $("input[name='a4']:checked").val();
    const userAnswer5 = $("input[name='a5']:checked").val();
    const userAnswer6 = $("input[name='a6']:checked").val();
    const userAnswer7 = $("input[name='a7']:checked").val();
    const userAnswer8 = $("input[name='a8'):checked").val();
    const userAnswer9 = $("input[name='a9'):checked").val();
    const userAnswer10 = $("input[name='a10'):checked").val();

  
    // Question 1
    if (userAnswer1 === undefined) {

        unanswered++;
    }
    else if (userAnswer1 == questions[0].correct) {

        correctA++;
    }
    else {

        incorrectA++;
    }

    // Question 2
    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].correct) {

        correctA++;
    }
    else {

        incorrectA++;
    }

    // Question 3
    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].correct) {

        correctA++;
    }
    else {

        incorrectA++;
    }

    // Question 4
    if (userAnswer4 === undefined) {

        unanswered++;
    }
    else if (userAnswer4 == questions[3].correct) {

        correctA++;
    }
    else {

        incorrectA++;
    }

    // Question 5
    if (userAnswer5 === undefined) {

        unanswered++;
    }
    else if (userAnswer5 == questions[4].correct) {

        correctA++;
    }
    else {

        incorrectA++;
    }

    // Question 6
    if (userAnswer6 === undefined) {

        unanswered++;
    }
    else if (userAnswer6 == questions[5].correct) {

        correctA++;
    }
    else {

        incorrectA++;
    }

    // Question 7
    if (userAnswer7 === undefined) {

        unanswered++;
    }
    else if (userAnswer7 == questions[6].correct) {

        correctA++;
    }
    else {

        incorrectA++;
    }  
//Question 8
    if (userAnswer8 === undefined) {

      unanswered++;
  }
  else if (userAnswer8 == questions[7].correct) {

      correctA++;
  }
  else {

      incorrectA++;
  }  

  //Question 9
  if (userAnswer9 === undefined) {

    unanswered++;
  }
  else if (userAnswer9 == questions[8].correct) {

      correctA++;
  }
  else {

      incorrectA++;
  }  

  //Question 10
  if (userAnswer10 === undefined) {

    unanswered++;
  }
  else if (userAnswer10 == questions[9].correct) {

    correctA++;
  }
  else {

    incorrectA++;
  }  

}
