let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let strt1 = document.getElementById("strt")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if(sum === " " || sum === 0){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
    if (sum === 21 || sum > 21 || isAlive === false || hasBlackJack === true) {
        resetGame() 
    }
    
  
}

function renderGame() {
        cardsEl.textContent = "Cards: "
        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " "
        }
        
        sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
            messageEl.style.color = "white";
            messageEl.classList.remove("blackjack")
            if (sum < 21 && strt1.textContent === "NEW GAME") {
                strt1.textContent = "START GAME";
            }
        } else if (sum === 21) {
            message = "🎊You've got Blackjack!🎊"
            hasBlackJack = true
            messageEl.classList.add("blackjack");
                   messageEl.style.color = "#018a3f"
        } else { 
            message = "You're out of the game!"
            isAlive = false
            messageEl.style.color = "red";
            messageEl.classList.remove("blackjack")
        }
        messageEl.textContent = message
    }
   



function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
    if (sum === 21 || sum > 21){
        game() 
       }
    
}
function game(){
strt1.textContent = "NEW GAME"
}
function resetGame() {
    isAlive = false
    hasBlackJack = false
    sum = " "
    cards = []
    message = "Want to play a round?"
    messageEl.textContent = message
    messageEl.style.color = "white"
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    playerEl.textContent = player.name + ": $" + player.chips
    strt1.textContent = "START GAME"
    messageEl.classList.remove("blackjack")
  }
  

