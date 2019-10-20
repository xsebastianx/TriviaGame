$(document).ready(function(){
  $("#startBtn").on("click", game.startTimer)
});

let game = {
  time : 90,

  startTimer: function() {
    $("#timer").text("Time left: " + game.time);
    setInterval(game.countdown, 1000);
    questionArray.displayQ();
  },
  countdown: function(){
    game.time--;
    $("#timer").text("Time left: " + game.time);
    if (game.time === 0) {
      game.stop();
    }
  },
  stop: function(){
    clearInterval();
    QA.checkAnswers();
  },
  finalScoreDiv: function(numCorrect, numIncorrect, numUnanswered){
    $("#finalScore").show();
    $("#questionsContainer").empty();
    $("#timer").empty();
    $("#timer").hide();
    $("#correct").text("Correct: " + numCorrect);
    $("#incorrect").text("Incorect: " + numIncorrect);
    $("unanswered").text("Unanswered: " + numUnanswered);
  }
}

let QA = {
  displayQ: function() {
    let qContainer = $("#questionsContainer");
    let answerGroup = $(.form-check");
    qContainer.append("<h2>Answer the following questions:</h2>");

    for (let i = 0; i <questionArray.length; i++){
      qContainer.append("<div id='question'>") + questionArray[i].question + "</div>");

      let answer1 = questionArray[i].answers[0];
      let answer2 = questionArray[i].answers[1];
      let answer3 = questionArray[i].answers[2];
      let answer4 = questionArray[i].answers[3];

      qContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
      qContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
      qContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
      qContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
    }

    let doneButton = "<button class="btn btn-primary" id="done-button" type="submit">Done</button>";
    qContainer.append(doneButton);
    $("#done-button").on("click", game.stop);
  },

  checkAnswers: function() {
    let correctAnswer;
    let userAnswer;
    let numCorrect = 0;
    let numIncorrect = 0;
    let numUnanswered = 0;

    for (let i = 0; i <questionArray.length; i++) {
      correctAnswer = questionArray[i].correct;
      userAnswer = $("input[id=radio"+i+"]:checked + label").text();

      if (userAnswer === correctAnswer){
        numCorrect++;
      } else if (userAnswer === ""){
        numUnanswered++;
      } else if (userAnswer !== correctAnswer){
        {
          numIncorrect++;
      }
    }
  }

game.finalScoreDiv(numCorrect, numIncorrect, numUnanswered);
},
}

let questionArray = [
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

