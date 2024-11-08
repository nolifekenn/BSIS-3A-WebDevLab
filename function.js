// Get the arrow elements
const backToTopButton = document.getElementById("backToTop");
const pullArrow = document.querySelector(".pull-arrow");
const sidebar = document.querySelector(".sidebar");

// Show the back-to-top button when the user scrolls down to the bottom of the page
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopButton.style.display = "block"; // Show the button
  } else {
    backToTopButton.style.display = "none"; // Hide the button
  }
};

// Scroll back to top when the back-to-top button is clicked
backToTopButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default anchor behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll
  });
});

// Toggle the sidebar when the pull arrow is clicked
pullArrow.addEventListener("click", function () {
  sidebar.classList.toggle("open"); // Toggle 'open' class to show/hide the sidebar

  // Change the direction of the pull arrow
  if (sidebar.classList.contains("open")) {
    pullArrow.innerHTML = '<i class="fas fa-arrow-left"></i>'; // Change arrow to point right
  } else {
    pullArrow.innerHTML = '<i class="fas fa-arrow-right"></i>'; // Change arrow to point left
  }
});

// Handle form submission in the sidebar
const messageForm = document.getElementById("messageForm");
messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  alert("Message Sent!"); // Just for demonstration, replace with your actual form handling
  messageForm.reset(); // Reset form fields
});
