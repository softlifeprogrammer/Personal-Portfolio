// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const navBar = document.getElementById("nav-bar");
  const toggleButton = document.createElement("button");

  toggleButton.innerText = "Menu";
  toggleButton.classList.add("menu-toggle");
  navBar.parentElement.insertBefore(toggleButton, navBar);

  toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("open");
    toggleButton.innerText = navBar.classList.contains("open") ? "Close" : "Menu";
  });

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      if (navBar.classList.contains("open")) {
        navBar.classList.remove("open"); // Close the menu after clicking a link
        toggleButton.innerText = "Menu"; // Reset button text
      }
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
