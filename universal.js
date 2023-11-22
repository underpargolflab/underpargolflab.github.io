let width = window.screen.width;
var offset;
if (width >= 1024) {
    offset = 125;
}
else {
    offset=300;
}
document.getElementById("menuimage").onmousedown = function() {
    scrollTo({top: document.getElementById("landing").offsetTop - offset, behavior: "smooth"});
};
document.getElementById("homeb").onmousedown = function() {
    scrollTo({top: document.getElementById("landing").offsetTop, behavior: "smooth"});
};
document.getElementById("servicesb").onmousedown = function() {
    scrollTo({top: document.getElementById("services").offsetTop - offset, behavior: "smooth"});
};


if (width > 1024) {
    setInterval(function () {
        if (window.scrollY <= 100) {
            document.getElementById("menu").style = "background-color: transparent";
            const menuLinks = document.querySelectorAll('.menu-link'); menuLinks.forEach(link => { link.style.color = 'white' }); 
            document.getElementById("menuimage").src="./images/logo.png";
        }
        else {
            document.getElementById("menu").style = "background-color: var(--dark); border-bottom: 3px solid var(--main); ";
            const menuLinks = document.querySelectorAll('.menu-link'); menuLinks.forEach(link => { link.style.color = 'white' }); 
            document.getElementById("menuimage").src="./images/logo.png";
        }
    }, 10)
}