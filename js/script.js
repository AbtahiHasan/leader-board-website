let toggleBar = document.querySelector(".toggle-bar"),
navlinks = document.querySelector(".navlinks");

toggleBar.onclick = () => {
    navlinks.classList.toggle("active");
}
