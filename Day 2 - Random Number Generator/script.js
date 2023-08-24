const button = document.querySelector(".button");
const number = document.querySelector(".number")

button.addEventListener("click", () => {
    const newNumber = Math.floor(Math.random() * 100)
    number.innerHTML = newNumber
})