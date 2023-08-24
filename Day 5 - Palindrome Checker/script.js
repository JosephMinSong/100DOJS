const answer = document.querySelector(".answer")
const userInput = document.getElementById("user-input")
const button = document.querySelector(".button")

button.addEventListener("click", () => {
    console.log(userInput.value)
    const result = checkPalindrome(userInput.value.toString())
    answer.innerHTML = result
})

function checkPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j && i != j) {
        if (str[i] != str[j]) {
            return "false"
        }

        i++
        j--
    }

    return "true"
}