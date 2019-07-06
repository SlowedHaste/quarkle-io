// var cateButton = document.getElementsByClassName("category-button");

// long = cateButton.length;

// for (i = 0; i < long; i++) {
//     cateButton[i].style.zIndex = long - i + 3;
// }
var mobileListener = document.querySelectorAll("#mobile-menu .click-listener");
var mobileMenu = document.querySelectorAll("#main-nav");

mobileListener[0].addEventListener("click", function() {
    if (mobileMenu[0].classList.contains("active") == true) {
        mobileMenu[0].classList.remove("active");
    } else {
        mobileMenu[0].classList.add("active");
    }
});