const questions = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
questions.forEach((question) =>
  question.addEventListener("click", (e) => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      questions.forEach((question) =>
        question.parentNode.classList.remove("active")
      );
      question.parentNode.classList.add("active");
    }
  })
);
