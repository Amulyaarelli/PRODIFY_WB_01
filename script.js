window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "red"; // Change to any color when scrolled
    } else {
        navbar.style.backgroundColor = 'green'; // Default color
    }
});
window.addEventListener('scroll', function() {
    const jav = document.getElementById('jav');
    if (window.scrollY > 50) {
        jav.style.backgroundColor = "white"; // Change to any color when scrolled
    } else {
        jav.style.backgroundColor = 'black'; // Default color
    }
});