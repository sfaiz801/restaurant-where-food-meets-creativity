function toggleMenu() {
    let menuIcon = document.getElementById("menu-icon");
    let navMenu = document.getElementById("nav-menu");

    // Toggle the "close-btn" class
    menuIcon.classList.toggle("close-btn");

    // Toggle menu visibility
    navMenu.classList.toggle("show");

   
}


