document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const navbar = document.querySelector('.navbar');

    burgerIcon.addEventListener('click', function () {
        // Toggle the 'active' class on the burger icon
        this.classList.toggle('active');
        // Toggle the 'active' class on the navbar to show/hide it
        navbar.classList.toggle('active');
    });
});
