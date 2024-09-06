// src/scripts/progress.js

const updateProgress = (courseId, progress) => {
  const user = getCurrentUser();
  const course = user.learningPath.find((id) => id === courseId);
  course.progress = progress;
  updateCurrentUser(user);
};

const getProgress = (courseId) => {
  const user = getCurrentUser();
  const course = user.learningPath.find((id) => id === courseId);
  return course.progress || 0;
};

// Function to create and display the progress bar in the HTML
const renderProgress = (courseId) => {
  const progress = getProgress(courseId);
  const progressContainer = document.getElementById(`progress-${courseId}`);
  
  // Ensure progress container is not null
  if (!progressContainer) return;

  // Create the progress bar element
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');

  const progressFill = document.createElement('div');
  progressFill.style.width = `${progress}%`;
  progressFill.style.backgroundColor = '#4caf50';
  progressFill.textContent = `${progress}%`;
  progressFill.classList.add('progress-fill');

  // Append progress fill to progress bar and bar to container
  progressBar.appendChild(progressFill);
  progressContainer.appendChild(progressBar);
};
