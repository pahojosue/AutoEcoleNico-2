// window.addEventListener("scroll", function () {
//             const header = document.getElementById("header");
//             const topHeader = document.querySelector(".header-top");
//             const bottomHeader = document.querySelector(".header-bottom");
//             if (window.scrollY > 54) {
//                 topHeader.classList.add("scrolled-top-header");
//                 header.classList.add("scrolled-header");
//             } else {
//                 topHeader.classList.remove("scrolled-top-header");
//                 header.classList.remove("scrolled-header");
//             }
// });

function showBottomBar() {
    const bottomBar = document.querySelector('.bottom-bar');
    if (bottomBar.style.display === "flex") {
        bottomBar.style.display = "none";
    } else {
        bottomBar.style.display = "flex";
    }
}