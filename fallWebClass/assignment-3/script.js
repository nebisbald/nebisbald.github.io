const startGameButt = document.getElementById('startGame');
const hitMeButt = document.getElementById('hitMe');
const standButt = document.getElementById('stand');
startGameButt.addEventListener('click', startGame);
hitMeButt.addEventListener('click', dealCard);
standButt.addEventListener('click', endRound);

const playerScore = document.getElementById('playerScore');
const dealerScore = document.getElementById('dealerScore');

const winStatus = document.getElementById('winStatus');

const winsText = document.getElementById('wins');
const lossesText = document.getElementById('losses');


const playerCard1 = document.getElementById('playerCard1');
const playerCard2 = document.getElementById('playerCard2');
const playerCard3 = document.getElementById('playerCard3');
const playerCard4 = document.getElementById('playerCard4');
const playerCard5 = document.getElementById('playerCard5');
const playerCard6 = document.getElementById('playerCard6');
const playerCard7 = document.getElementById('playerCard7');

const playerCards = [playerCard1,playerCard2,playerCard3,playerCard4,playerCard5,playerCard6,playerCard7];

const dealerCard1 = document.getElementById('dealerCard1');
const dealerCard2 = document.getElementById('dealerCard2');
const dealerCard3 = document.getElementById('dealerCard3');
const dealerCard4 = document.getElementById('dealerCard4');
const dealerCard5 = document.getElementById('dealerCard5');
const dealerCard6 = document.getElementById('dealerCard6');
const dealerCard7 = document.getElementById('dealerCard7');

const dealerCards = [dealerCard1, dealerCard2, dealerCard3, dealerCard4, dealerCard5, dealerCard6, dealerCard7];

let wins = 0;
let losses = 0;

let deckId = "";
let numCardsPlayer = 1;
let numCardsDealer = 1;
let playerTotal = 0;
let dealerTotal = 0;

let cardsDrawn;

async function startGame() {
    resetGame();
    startGameButt.style.display = 'none';
    hitMeButt.style.display = 'block'
    standButt.style.display = 'block'
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    const response = await fetch(url);
    const json = await response.json();
    deckId = json.deck_id;

    const response2 = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`);
    cardsDrawn = await response2.json();

    playerTotal += getValue(cardsDrawn.cards[0].value, true);

    playerScore.innerText = playerTotal;
    playerTotal += getValue(cardsDrawn.cards[2].value, true);

    playerScore.innerText = playerTotal;

    playerCard1.src = cardsDrawn.cards[0].image;
    playerCard2.src = cardsDrawn.cards[2].image;
    dealerCard2.src = cardsDrawn.cards[3].image;

    dealerTotal += getValue(cardsDrawn.cards[3].value, false);

    dealerScore.innerText = dealerTotal;
}

async function dealCard() {
    if(numCardsPlayer < 7){
        numCardsPlayer += 1;
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        const newCard = await response.json();

        playerCards[numCardsPlayer].style.display = 'block';
        playerCards[numCardsPlayer].src = newCard.cards[0].image;

        playerTotal = playerTotal + getValue(newCard.cards[0].value, true)

        playerScore.innerText = playerTotal;

    }


    if(checkWin()){
        standButt.style.display = 'none';
        hitMeButt.style.display = 'none';
        startGameButt.style.display = 'block';
    }
    
}

function checkWin(){
    if(playerTotal == 21){

        winStatus.style.visibility = 'visible';
        winStatus.innerText = "You Won!";
        wins ++;
        winsText.innerText = `Wins: ${wins}`;
        startGameButt.style.display = 'block';
        return true;
    }
    else if(dealerTotal == 21){

        winStatus.style.visibility = 'visible';
        winStatus.innerText = "The Dealer Won :(";
        losses ++;
        lossesText.innerText = `Losses: ${losses}`;
        startGameButt.style.display = 'block';
        return true;
    }
    else if(playerTotal > 21){
  
        winStatus.style.visibility = 'visible';
        winStatus.innerText = "The Dealer Won :(";
        losses ++;
        lossesText.innerText = `Losses: ${losses}`;
        startGameButt.style.display = 'block';
        return true;
    }
    else if(dealerTotal > 21){

        winStatus.style.visibility = 'visible';
        winStatus.innerText = "You Won!";
        wins ++;
        winsText.innerText = `Wins: ${wins}`;
        startGameButt.style.display = 'block';
        return true;
    }
    else{
        return false;
    }
}

function resetGame(){

    winStatus.style.visibility = 'hidden';
    

    for(numCardsPlayer in playerCards){
        playerCards[numCardsPlayer].src = "https://deckofcardsapi.com/static/img/back.png";
        if(numCardsPlayer > 1){
            playerCards[numCardsPlayer].style.display = 'none';
        }
    }

    for(numCardsDealer in dealerCards){
        dealerCards[numCardsDealer].src = "https://deckofcardsapi.com/static/img/back.png";
        if(numCardsDealer > 1){
            dealerCards[numCardsDealer].style.display = 'none';
        }
    }

    deckId = "";
    numCardsPlayer = 1;
    numCardsDealer = 1;
    playerTotal = 0;
    dealerTotal = 0;


}

async function endRound(){
    standButt.style.display = 'none';
    hitMeButt.style.display = 'none';
    dealerCard1.src = cardsDrawn.cards[1].image;
    

    dealerTotal += getValue(cardsDrawn.cards[1].value, false);

    dealerScore.innerText = dealerTotal;
    //update dealer total
    while(dealerTotal < 16){
        if(numCardsDealer < 7){
            numCardsDealer += 1;
            const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            const newCard = await response.json();
    
            dealerCards[numCardsDealer].style.display = 'block';
            dealerCards[numCardsDealer].src = newCard.cards[0].image;
    

            dealerTotal += getValue(newCard.cards[0].value, false);

            dealerScore.innerText = dealerTotal;
        }
    }

    if(!checkWin()){
        if(playerTotal > dealerTotal){

            winStatus.style.visibility = 'visible';
            winStatus.innerText = "You Won!";
            wins ++;
            winsText.innerText = `Wins: ${wins}`;
        }
        else{

            winStatus.style.visibility = 'visible';
            winStatus.innerText = "The Dealer Won :(";
            losses ++;
            lossesText.innerText = `Losses: ${losses}`;
        }
        startGameButt.style.display = 'block';
    }


}

function getValue(v, pod){
    if(v == "KING"){
        return 10;
    }
    else if(v == "QUEEN"){
        return 10;
    }
    else if(v == "JACK"){
        return 10;
    }
    else if(v == "ACE"){
        if(pod){
            if(playerTotal < 10){
                return 11;
            }
            else{
                return 1;
            }
        }
        else{
            if(dealerTotal < 10){
                return 11;
            }
            else{
                return 1;
            }
        }
        
    }
    else{
        return parseInt(v);
    }
    
}