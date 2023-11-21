document.getElementById("services-trackman").onmouseover = function() {
    document.getElementById("services-trackman-img").style = "filter: brightness(10%);";
    document.getElementById("services-trackman").style = "cursor: pointer;";
    document.getElementById("services-trackman-shown").style="opacity: 1;";
    document.getElementById("services-trackman-main").style="opacity: 0;";


};
document.getElementById("services-trackman").onmouseleave = function() {
    document.getElementById("services-trackman-img").style = "filter: brightness(40%);";
    document.getElementById("services-trackman").style = "cursor: default;";
    document.getElementById("services-trackman-shown").style="opacity: 0;";
    document.getElementById("services-trackman-main").style="opacity: 1;";
};
