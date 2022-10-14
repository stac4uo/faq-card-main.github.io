let arrow = document.getElementsByClassName("arrow");
let answer = document.getElementsByClassName("answer");
let question = document.getElementsByClassName("question");

function arrowClick() {
  for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", function () {
      arrow[i].classList.toggle("rotate-180");
      answer[i].classList.toggle("hidden");
      question[i].classList.toggle("font-bold");
      question[i].classList.toggle("text-black");
    });
  }
}

function answerClick() {
  for (let i = 0; i < arrow.length; i++) {
    question[i].addEventListener("click", function () {
      arrow[i].classList.toggle("rotate-180");
      answer[i].classList.toggle("hidden");
      question[i].classList.toggle("font-bold");
      question[i].classList.toggle("text-black");
    });
  }
}

arrowClick();
answerClick();
