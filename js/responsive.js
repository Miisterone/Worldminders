const body = document.getElementById('body')
const toActive1 = document.getElementById('main-sidenav')
let clicked = false

function responsive () {
    toActive1.classList.toggle('active')
    body.style.overflow = "hidden"

    if (clicked) {
        body.style.removeProperty('overflow')
        clicked = false;
    } else {
        body.style.overflow = "hidden"
        clicked = true;
    }
}