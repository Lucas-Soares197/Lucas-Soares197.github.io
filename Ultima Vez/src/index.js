var menu = document.querySelector('.Mobile_Menu');
var menuButton = document.querySelector('.Menu');
menuButton.addEventListener('click', function() {

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        menu.style.animation = 'slideDown 0.5s ease-in forwards';
    } else {
        menu.style.animation = 'slideUp 0.5s ease-in-out forwards';
        setTimeout(function() {
            menu.style.display = 'none';
        }, 500);
    }
});