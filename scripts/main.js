if (!window.navigator.standalone) {
    document.addEventListener("DOMContentLoaded", adjustHeight, true);
    window.addEventListener("orientationchange", adjustHeight, true);
} else {
    /* Target only standalone mode */
    document.addEventListener("click", clickHandler, true);
}

function adjustHeight() {
var html = document.documentElement;
var size = window.innerHeight;

html.style.height = (size + size) + "px";
window.setTimeout(function() {
if (window.pageYOffset == 0) {
window.scrollTo(0, 0);
}
html.style.height = window.innerHeight + "px";
}, 0);
}