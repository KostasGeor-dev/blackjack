// let player = {
//     name : "Kostas",
//     chips : 145
// }

let cards = []   // Array - ordered list
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")  // Alternative from getElementId 

// let playerEL = document.getElementById("player-el")

// playerEL.innerText= player.name + ":$" + player.chips 

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    
    cardsEl.innerText = "Cards: " + firstCard + " " + secondCard
    sumEl.innerText = "Sum: " + sum

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
    } else {
    message = "You're out of the game!"
    isAlive = false
    }
    messageEl.innerText=message
}

function newCard() {
    if (isAlive===true && hasBlackJack===false) {
        messageEl.innerText="Drawing a new card from the deck!"
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function newGame(){
    messageEl.textContent = "Want to play a round?"
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    cards =[]
    sum = 0

}

