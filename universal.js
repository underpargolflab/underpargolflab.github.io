let width = window.screen.width;
if (width > 1024) {
    setInterval(function () {
        if (window.scrollY <= 100) {
            document.getElementById("menu").style = "background-color: transparent";
        }
        else {
            document.getElementById("menu").style = "background-color: var(--dark); border-bottom: 3px solid var(--main);";
        }
    }, 10)
}