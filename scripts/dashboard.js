// src/scripts/dashboard.js

document.addEventListener("DOMContentLoaded", () => {
  // Check if the user is logged in; if not, redirect to the login page
  if (!getCurrentUser()) {
    window.location.href = "index.html";
    return;
  }

  // Handle user logout
  document
    .getElementById("logout-button")
    .addEventListener("click", logoutUser);

  // Example course ID and title; these would typically be dynamically determined
  const courseId = 1; // Example course ID
  const courseTitle = "JavaScript Basics"; // Example course title

  // Render the quiz for the specified course
  renderQuiz(courseId);

  // Display related YouTube videos for the specified course
  displayVideos(courseTitle);

  // Additional functionality for learning path, available courses, and progress can be added here
  renderLearningPath();
  renderAvailableCourses();
  renderProgressTracking();
});

// Function to render the user's learning path
function renderLearningPath() {
  const learningPathDiv = document.getElementById("learning-path");
  const learningPath = getLearningPath();
  const courses = getCourses();

  learningPath.forEach((courseId) => {
    const course = courses.find((c) => c.id === courseId);
    const courseDiv = document.createElement("div");
    courseDiv.innerHTML = `
            <h3>${course.title}</h3>
            <button onclick="removeCourseFromLearningPath(${courseId})">Remove</button>
        `;
    learningPathDiv.appendChild(courseDiv);
  });
}

// Function to render available courses
function renderAvailableCourses() {
  const availableCoursesDiv = document.getElementById("available-courses");
  const learningPath = getLearningPath();
  const courses = getCourses();

  courses.forEach((course) => {
    if (!learningPath.includes(course.id)) {
      const courseDiv = document.createElement("div");
      courseDiv.innerHTML = `
                <h3>${course.title}</h3>
                <button onclick="addCourseToLearningPath(${course.id})">Add</button>
            `;
      availableCoursesDiv.appendChild(courseDiv);
    }
  });
}

// Function to render progress tracking for the user's courses
// Inside dashboard.js
document.addEventListener("DOMContentLoaded", () => {
  // Existing code...
  renderProgressTracking();
});

function renderProgressTracking() {
  const progressDiv = document.getElementById("progress-tracking");
  const learningPath = getLearningPath();
  const courses = getCourses();

  learningPath.forEach((courseId) => {
    const course = courses.find((c) => c.id === courseId);
    const progressContainer = document.createElement("div");
    progressContainer.id = `progress-${courseId}`;
    progressDiv.appendChild(progressContainer);
    renderProgress(courseId); // Render progress for each course
  });
}
