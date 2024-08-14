document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("menuButton");
    var menuButtons = this.querySelectorAll("button.menu-icon")
    var menuClose = document.getElementById("menuClose");
    var responsiveMenu = document.getElementById("responsiveMenu");
    var menuLinks = responsiveMenu.querySelectorAll("a");

    // Function to close the responsive menu
    function closeMenu() {
        responsiveMenu.classList.remove('open');
    }

    menuButtons.forEach(button => {button.addEventListener("click", function(event){
        // event.preventDefault(); // Prevents the page from scrolling to the top
        document.querySelector('.responsive-menu').classList.toggle('open');
    }); });

    // Open the menu when menu button is clicked
    // menuButton.addEventListener("click", function(event) {
    //     // event.stopPropagation(); // Prevent closing immediately after opening
    //     // responsiveMenu.style.display = "block";
    //     responsiveMenu.classList.toggle('open');
    // });

    // Close the menu when close button is clicked
    menuClose.addEventListener("click", function(event) {
        event.preventDefault();
        closeMenu();
    });

    // Close the menu when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == responsiveMenu) {
            event.preventDefault();
            closeMenu();
        }
    });

    // Close the menu when clicking on any menu link
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            closeMenu();
        });
    });
});