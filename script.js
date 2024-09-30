document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.getElementById("nav-bar");
  const toggleButton = document.getElementById("toggle-button");

  toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded", navBar.classList.contains("open"));
    toggleButton.innerText = navBar.classList.contains("open") ? "Close" : "Menu";
  });

  // Use event delegation for nav links
  navBar.addEventListener("click", (e) => {
    const link = e.target.closest(".nav-link");
    if (link) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        if (navBar.classList.contains("open")) {
          navBar.classList.remove("open"); // Close the menu after clicking a link
          toggleButton.innerText = "Menu"; // Reset button text
          toggleButton.setAttribute("aria-expanded", "false");
        }
      }
    }
  });
});
