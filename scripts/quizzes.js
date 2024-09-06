// src/scripts/quizz.js

const quizzes = {
  1: [
    // Course ID
    {
      question:
        "What is the correct syntax for referring to an external script called 'script.js'?",
      options: [
        "<script src='script.js'>",
        "<script href='script.js'>",
        "<script ref='script.js'>",
      ],
      correct: 0,
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "alert('Hello World');",
        "msg('Hello World');",
        "msgBox('Hello World');",
      ],
      correct: 0,
    },
    {
      question: "Is JavaScript programming language ?",
      options: ["No", "Yes", "Probably"],
      correct: 1,
    },
  ],
};

const renderQuiz = (courseId) => {
  const quizDiv = document.getElementById("quiz");
  const courseQuizzes = quizzes[courseId];
  quizDiv.innerHTML = ""; // Clear previous quiz content

  // Loop through each quiz question
  courseQuizzes.forEach((quiz, index) => {
    const quizItem = document.createElement("div");
    quizItem.classList.add("quiz-item"); // Add a class for styling

    // Create the question element
    const questionElement = document.createElement("h3");
    questionElement.textContent = quiz.question;
    quizItem.appendChild(questionElement);

    // Create buttons for each option
    quiz.options.forEach((option, i) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.onclick = () => checkAnswer(courseId, index, i);
      quizItem.appendChild(optionButton);
    });

    quizDiv.appendChild(quizItem); // Append the quiz item to the quiz container
  });
};

// Function to check the answer and show alerts
const showAlert = (message, type) => {
  const alertDiv = document.createElement("div");
  alertDiv.className = type === "correct" ? "correct-alert" : "wrong-alert";
  alertDiv.textContent = message;
  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.style.opacity = "0";
    setTimeout(() => alertDiv.remove(), 500); // Remove after fade-out
  }, 1500); // Display duration
};

const checkAnswer = (courseId, questionIndex, optionIndex) => {
  const correct = quizzes[courseId][questionIndex].correct;
  if (optionIndex === correct) {
    showAlert("Correct!", "correct");
  } else {
    showAlert("Wrong!", "wrong");
  }
};
