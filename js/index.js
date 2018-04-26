window.addEventListener('load', function () {
    const toggleMenu = document.querySelector('.main-header__toggle-menu');
    const showToggle = document.querySelectorAll('.nav-toggle')[0];
    const hideToggle = document.querySelectorAll('.nav-toggle')[1];
    const containerCover = document.querySelector('.container-cover');

    showToggle.addEventListener('click', function () {
        this.classList.add('hide');
        toggleMenu.classList.add('show-toggle');
        containerCover.classList.add('cover-bg');
        hideToggle.classList.remove('hide');
    });

    hideToggle.addEventListener('click', function () {
        hideToggleMenu();
    });

    containerCover.addEventListener('click', function () {
        hideToggleMenu();
    });

    function hideToggleMenu() {
        hideToggle.classList.add('hide');
        showToggle.classList.remove('hide');
        toggleMenu.classList.remove('show-toggle');
        containerCover.classList.remove('cover-bg');
    }
});