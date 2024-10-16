document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const fullscreenMenu = document.getElementById('fullscreenMenu');

    menuButton.addEventListener('click', function() {
        fullscreenMenu.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
});
