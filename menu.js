document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    const menuOpenIcon = document.getElementById('menuOpenIcon');
    const menuCloseIcon = document.getElementById('menuCloseIcon');

    menuButton.addEventListener('click', function() {
        fullscreenMenu.classList.toggle('active');
        if (fullscreenMenu.classList.contains('active')) {
            menuOpenIcon.style.display = 'none';
            menuCloseIcon.style.display = 'block';
        } else {
            menuOpenIcon.style.display = 'block';
            menuCloseIcon.style.display = 'none';
        }
    });

    // Optioneel: Sluit menu bij klikken op menu-items
    const menuItems = document.querySelectorAll('#menuList a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            fullscreenMenu.classList.remove('active');
            menuOpenIcon.style.display = 'block';
            menuCloseIcon.style.display = 'none';
        });
    });
});