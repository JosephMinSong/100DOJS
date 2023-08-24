const button = document.querySelector(".button");
const hex = document.querySelector(".hex")

button.addEventListener("click", () => {
    const newHex = Math.random().toString(16).substring(2, 8);
    hex.innerHTML = "#" + newHex;
    document.body.style.backgroundColor = "#" + newHex;
})