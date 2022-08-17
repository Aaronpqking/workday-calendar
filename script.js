var currenttime = moment().hour();
console.log(currenttime);
var startTime = moment("8:00am", "h:mma").format("h:mma");
console.log(startTime);
var date = moment().format("L");
function submit(time) {
  var input = document.getElementById(time).value;
  localStorage.setItem(time, input);
}
console.log(moment().hour());
function write() {
  for (i = 8; i < 18; i++) {
    var display = localStorage.getItem(`${i}`) || " ";
    console.log(i, display);
    console.log(document.getElementById(`${i}`));
    document.getElementById(`${i}`).value = display;

    if (i < currenttime) {
      document.getElementById(`${i}`).disabled = true;
    }
  }
}
function test() {}

// // var input = document.getElementById("event").value;
// var time = document.getElementById("time").innerText;
// var date = moment().format("L");
// var display = localStorage.getItem(date + " " + time);
// // document.getElementById("event").value = display;
// var event = (localStorage.getItem(date + " " + time, "input"));

// var  = document.querySelector(".questionBox");
// var quizComplete = document.querySelector(".quiz-complete-screen");

// var answerlist = document.createElement("ul");
// function createcalendar() {
//     questionprompt.innerHTML = q;
//     answerlist.setAttribute("id", "answerlist");
//     answerBox.appendChild(answerlist);

// for (var i = 0; i < quiz[questionCount].answerchoices.length; i++) {
//   var li = document.createElement("li");
//   li.innerText = quiz[questionCount].answerchoices[i];
//   answerlist.appendChild(li);
// }

// var eightam = localStorage.getItem(date + " " + "8:00am");
// document.getElementById("8:00am").value= eightam;
// // console.log(eightam);
