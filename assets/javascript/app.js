$(document).ready(function(){

  $("#timer").hide();
  $("#doneBtn").hide(); 
  $("#startBtn").on("click", questions.startGame)
})

let questions = [
  {
    question: "What is Rick's favorite attraction in Anatomy Park?",
    answers: [
      { answer: "The Bone Train", value: false },
      { answer: "Spleen Mountain", value: false },
      { answer: "Bladder Falls", value: false },
      { answer: "Pirates of the Pancreas", value: true }
    ]
  },
  {
    question: "What is the meaning of 'wubaluba dub dub?",
    answers: [
      { answer: "I'm drunk", value: false },
      { answer: "I'm in great pain", value: true },
      { answer: "I'm smarter than everyone", value: false },
      { answer: "My wife left me", value: false }
    ]
  },
  {
    question: "Who does Morty have a crush on?",
    answers: [
      { answer: "Tammy", value: false },
      { answer: "Vanessa", value: false },
      { answer: "Jessica", value: true },
      { answer: "Jennifer", value: false }
    ]
  },
  {
    question: "Who voices both Rick and Morty?",
    answers: [
      { answer: "Dan Harmon", value: false },
      { answer: "Justin Roiland", value: true },
      { answer: "Chris Parnell", value: false },
      { answer: "Morgan Freeman", value: false }
    ]
  },
  {
    question: "What is on a cob on Cob Planet?",
    answers: [
      { answer: "birds", value: false },
      { answer: "molecules", value: false },
      { answer: "corn", value: false },
      { answer: "everything", value: true }
    ]
  },
  {
    question: "What was Jerry's successful advertising pitch?",
    answers: [
      { answer: "Thirsty for Milk?", value: false },
      { answer: "Hungry for Apples?", value: true },
      { answer: "Addicted to lasagna?", value: false },
      { answer: "Craving for Muffins?", value: false }
    ]
  },
  {
    question: "Who comes to the rescue when Rick and Morty are performing on 'Planet Music' in the episode 'Get Schwifty'?",
    answers: [
      { answer: "Obama", value: false },
      { answer: "Bird Person", value: false },
      { answer: "Water-T", value: false },
      { answer: "Ice-T", value: true }
    ]
  },
  {
    question: "Which longtime family-friend does Beth shoot?",
    answers: [
      { answer: "Mr. Poopybutthole", value: true },
      { answer: "Squanchy", value: false },
      { answer: "Bird Person", value: false },
      { answer: "Mr. Meeseeks", value: false }
    ]
  },
  {
    question: "Who is the only one allowed to have Eyeholes?",
    answers: [
      { answer: "Rick", value: false },
      { answer: "Tiny Rick", value: false },
      { answer: "Eyehole Man", value: true },
      { answer: "Jerry", value: false }
    ]
  },
  {
    question: "Who won the Gear Wars?",
    answers: [
      { answer: "The Gearheads", value: false },
      { answer: "The Cromulons", value: false },
      { answer: "The Bird People", value: false },
      { answer: "Nobody cares", value: true }
    ]
  }
];     

let correct = 0;
let incorrect = 0;
let unanswered = 0;
let timer = 90;

startGame: function(){

}