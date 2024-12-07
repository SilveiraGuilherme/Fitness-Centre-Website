// Select nav-links and dropdown items and get the active path
const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");
const activePath = window.location.pathname.split("/").pop();

//show the active link at the moment
navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href").split("/").pop();
  if (linkPath === activePath) {
    link.classList.add("active"); 

    const parentDropdown = link.closest(".dropdown-menu");
    if (parentDropdown) {
      const dropdownToggle = parentDropdown.previousElementSibling;
      dropdownToggle.classList.add("active");
    }
  }
});
