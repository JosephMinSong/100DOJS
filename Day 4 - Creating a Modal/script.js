const modal = document.querySelector(".modal")
const button = document.querySelector(".button")
const closeButton = document.querySelector(".x")

button.addEventListener("click", () => {
    modal.style.display = "block"
})

closeButton.addEventListener("click", () => {
    modal.style.display = "none"
})