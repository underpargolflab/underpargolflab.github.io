let width = window.screen.width;
if (width > 1024) {
    setInterval(function () {
        if (window.scrollY <= 100) {
            document.getElementById("menu").style = "background-color: transparent";
            const menuLinks = document.querySelectorAll('.menu-link'); menuLinks.forEach(link => { link.style.color = 'white' }); 
            document.getElementById("menuimage").src="./images/logo.png";
        }
        else {
            document.getElementById("menu").style = "background-color: white; border-bottom: 3px solid var(--main); ";
            const menuLinks = document.querySelectorAll('.menu-link'); menuLinks.forEach(link => { link.style.color = 'var(--dark)' }); 
            document.getElementById("menuimage").src="./images/logo-recolor.png";
        }
    }, 10)
}