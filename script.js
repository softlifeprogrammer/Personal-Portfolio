// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll for Navigation Links
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor click behavior
      const targetId = link.getAttribute("href").substring(1); // Get the target ID
      const targetSection = document.getElementById(targetId);

      // Smooth scroll to the target section
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // Toggle Mobile Menu
  const navBar = document.getElementById("nav-bar");
  const toggleButton = document.createElement("button");

  // Create a toggle button
  toggleButton.innerText = "Menu";
  toggleButton.classList.add("menu-toggle");
  navBar.parentElement.insertBefore(toggleButton, navBar);

  toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("open"); // Toggle the open class
    toggleButton.innerText = navBar.classList.contains("open") ? "Close" : "Menu";
  });

  // Display Current Year in Footer (if applicable)
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
