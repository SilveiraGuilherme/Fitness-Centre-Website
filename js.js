// Select nav-links and dropdown items and get the active path
const menuLinks = document.querySelectorAll(".nav-link, .dropdown-item");
const currentPath = window.location.pathname.split("/").pop();

//show the active link item at the moment
menuLinks.forEach((linkItem) => {
  const linkItemPath = linkItem.getAttribute("href").split("/").pop();

  if (linkItemPath === currentPath) {
    linkItem.classList.add("active");

    //dropdown link item
    const dropdownParent = linkItem.closest(".dropdown-menu");
    if (dropdownParent) {
      const dropdownToggle = dropdownParent.previousElementSibling;
      if (dropdownToggle) {
        dropdownToggle.classList.add("active");
      }
    }
  }
});

