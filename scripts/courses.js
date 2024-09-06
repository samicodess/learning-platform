// src/scripts/courses.js

const getCourses = () => {
  // Example course data (usually this would be dynamic or loaded from an external source)
  return [
      { id: 1, title: "JavaScript Basics", description: "Learn the basics of JavaScript." },
      { id: 2, title: "Advanced CSS", description: "Dive deep into CSS and learn advanced techniques." },
      { id: 3, title: "Web Accessibility", description: "Make your websites accessible to all users." }
  ];
};

const getLearningPath = () => {
  const user = getCurrentUser();
  return user.learningPath || [];
};

const addCourseToLearningPath = (courseId) => {
  const user = getCurrentUser();
  user.learningPath.push(courseId);
  updateCurrentUser(user);
  window.location.reload();
};

const removeCourseFromLearningPath = (courseId) => {
  const user = getCurrentUser();
  user.learningPath = user.learningPath.filter(id => id !== courseId);
  updateCurrentUser(user);
  window.location.reload();
};

const updateCurrentUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
  const users = JSON.parse(localStorage.getItem('users'));
  const updatedUsers = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
};


