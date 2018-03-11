let wins = 0 
let losses = 0
let guessesLeft = 9
let randomIndex
let computerChoice

// Storing HTML elements in constant variables to be accessed later
const winsElement = document.getElementById('wins')
const lossesElement = document.getElementById('losses')
const guessesLeftElement = document.getElementById('guessesLeft')
const guessesSoFarElement = document.getElementById('guessesSofar')

// Setting initial state of the amount of guesses a user has
guessesLeftElement.textContent = guessesLeft


// Restarts game with maximum amount of guesses, and 0 wins/losses
function reset() {
    guessesLeft = 9
    guessesLeftElement.textContent = guessesLeft
    guessesSoFarElement.textContent = ''
}

// Utility function that generates a random letter
function newLetter() {
    // Random integer between 0 & 26
    randomIndex = Math.floor(Math.random() * choices.length)

    // Selects element from choices array at random integer from above
    computerChoice = choices[randomIndex]
}

// Utility function that generates an Array of the alphabet
function genCharArray(charA, charZ) {
    let a = [];
    let limit = charZ.charCodeAt(0);

    for (let i = charA.charCodeAt(0); i <= limit; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

// Array of A through Z in string format
let choices = genCharArray("a", "z")


newLetter()

document.onkeyup = function(event) {
    var userChoice = event.key
    
    if (userChoice === computerChoice){
        wins++

        winsElement.textContent = wins 

        newLetter()

        reset()
        
    }
    else {
        guessesLeft--
        guessesLeftElement.textContent = guessesLeft
        guessesSoFarElement.textContent += userChoice + ', '

        if (guessesLeft <= 0 ) {
            losses++
            lossesElement.textContent = losses
            newLetter()
            reset()
        }
    }

}

