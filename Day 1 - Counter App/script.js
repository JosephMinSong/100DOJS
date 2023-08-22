const counter = document.querySelector(".count")
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        counter.innerHTML++
    } else if (e.target.classList.contains("subtract")) {
        counter.innerHTML--
    } else {
        counter.innerHTML = 0
    }

    setColor()
})

function setColor() {
    if (counter.innerHTML > 0) {
        counter.style.color = "yellow"
    } else if (counter.innerHTML < 0) {
        counter.style.color = "orangered"
    } else {
        counter.style.color = "white"
    }
}
