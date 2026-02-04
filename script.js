const images = ['Ace.png', 'alumni.png', 'ospf.png', 'eigrp.png', 'bgp.png', 'routeronastick.png', 'stp.png',];
let currentIndex = 0;
const heroImage = document.getElementById('heroImage');

setInterval(() => {
    heroImage.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroImage.src = images[currentIndex];
        heroImage.style.opacity = 1;
    }, 500);
}, 3000); // time ng pagchange ng image