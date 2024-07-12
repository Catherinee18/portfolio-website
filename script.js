document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
});
document.getElementById('menu-icon').onclick = function () {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
};


