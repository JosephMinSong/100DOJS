const answer = document.querySelector(".answer")
const userInput = document.getElementById("user-input")
const button = document.querySelector(".button")

button.addEventListener("click", () => {
    const userWord = userInput.value.toString()
    const result = checkVowels(userWord)
    answer.innerHTML = `The word ${userWord} has ${result} vowels`
})

function checkVowels(str) {
    let vowelHash = {
        "a": true,
        "i": true,
        "e": true,
        "u": true,
        "o": true
    }

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase();
        if (vowelHash[letter]) {
            count++
        }
    }

    return count
}