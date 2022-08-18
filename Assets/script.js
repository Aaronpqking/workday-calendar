var currenttime = moment().hour();

currentDay = moment().format("LLLL");

document.getElementById("currentDayTitle").innerHTML = currentDay;

var startTime = moment("8:00am", "h:mma").format("h:mma");
var date = moment().format("L");

function submit(time) {
  var input = document.getElementById(time).value;
  localStorage.setItem(time, input);
}

function write() {
  for (i = 8; i < 19; i++) {
    var display = localStorage.getItem(`${i}`);
    var element = document.getElementById(`${i}`);
    element.value = display;

    if (i < currenttime) {
      element.disabled = true;
      element.style.backgroundColor = "#dc3545";
      console.log(document.querySelectorAll(".timeout"))
      document.querySelectorAll(".timeout")[i-8].style.backgroundColor =
        "#dc3545";
    } else if (i > currenttime) {
      element.style.backgroundColor = "#28a745";
      document.querySelectorAll(".timeout")[i - 8].style.backgroundColor = "#28a745";
    } else {
      element.style.backgroundColor = "#ffc107";
      document.querySelectorAll(".timeout")[i-8].style.backgroundColor =
        "#ffc107";
    }
  }
}

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
