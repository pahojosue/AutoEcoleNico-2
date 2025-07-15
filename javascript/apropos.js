function showBottomBar() {
    const bottomBar = document.querySelector('.bottom-bar');
    if (bottomBar.style.display === "flex") {
        bottomBar.style.display = "none";
    } else {
        bottomBar.style.display = "flex";
    }
}