var newGame;

var classicBtn = document.getElementById('classicButton');
var difficultBtn = document.getElementById('difficultButton');
var paper = document.getElementById('paperIcon');
var rock = document.getElementById('rockIcon');
var scissors = document.getElementById('scissorsIcon');
var iguana = document.getElementById('iguanaIcon');
var alien = document.getElementById('alienIcon');
var classicIcons = document.querySelectorAll('.classic');
var difficultIcons = document.querySelectorAll('.difficult');
var buttonsSection = document.querySelector('.buttons-container');
var chooseGameHeader = document.querySelector('.choose-game');
var changeGameBtn = document.querySelector('.change-btn');
// var paperLady = document.querySelector('.paper-lady-icon');
// var rockLady = document.querySelector('.rock-lady-icon');
// var scissorLady = document.querySelector('.scissors-lady-icon');
// var iguanaLady = document.querySelector('.iguana-lady-icon');
// var alienLady = document.querySelector('.alien-lady-icon');
var labels = document.querySelectorAll('label')
var iconSection = document.querySelector('.icons')


var classicFighters = ['rock', 'paper', 'scissors'];
var difficultFighters = ['rock', 'paper', 'scissors', 'alien', 'iguana']

window.addEventListener('load', fireGame)
classicBtn.addEventListener('click', selectClassic)
difficultBtn.addEventListener('click', selectDifficult)
changeGameBtn.addEventListener('click', changeGame)


paper.addEventListener('click', humanSelection)
rock.addEventListener('click', humanSelection)
scissors.addEventListener('click', humanSelection)
iguana.addEventListener('click', humanSelection)
alien.addEventListener('click', humanSelection)

function fireGame() {
    newGame = new Game()
}

function randomFighter(array){
    var index = Math.floor(Math.random() * array.length)
    return array[index]
}

function selectClassic() {
    buttonsSection.classList.add('hidden');
    changeGameBtn.classList.remove('hidden');
    chooseGameHeader.innerText = 'Choose Your Fighter!';
    for (var i = 0; i < classicIcons.length; i++) {
        classicIcons[i].classList.remove('hidden')
    }   
}

function selectDifficult() {
    buttonsSection.classList.add('hidden');
    changeGameBtn.classList.remove('hidden');
    chooseGameHeader.innerText = 'Choose Your Fighter!';
    for (var i = 0; i < difficultIcons.length; i++) {
        difficultIcons[i].classList.remove('hidden')
    }
}

function changeGame() {
    buttonsSection.classList.remove('hidden');
    //iconSection.classList.add('hidden')
    chooseGameHeader.innerText = 'Choose Your Game!'
}

function humanSelection(event) {
    newGame.human.fighter = event.target.id
    for (var i = 0; i < labels.length; i++) {
        if (event.target.id === labels[i].htmlFor) {
            labels[i].classList.remove('hidden')
        }
    }
        setTimeout(computerSelection(), 1000)
}
    
function computerSelection() {
    if (newGame.gameType === 'classic') {
        newGame.computer.fighter = randomFighter(classicFighters)
        displayComputerSelection(classicFighters)
    } else {
        newGame.computer.fighter = randomFighter(difficultFighters)
        displayComputerSelection(difficultFighters)
    }
}

function displayComputerSelection(array) {
    for (var i = 0; i < array.length; i++) {
        if (newGame.computer.fighter !== array[i] && newGame.human.fighter !== array[i]) {
        difficultIcons[i].classList.add('hidden')
    } 
}
}


// function chooseWinner() {
//     if (this.winner = 'computer') { 
//     }

// }


// [DONE]click classic button, button-container disappears and icons appear
// [DONE]click classic and classic icons appear
// [DONE]click difficult and difficult icons appear
// [DONE] human selects icon and their logo is attached under their selection
//     [DONE]function to display icon
//      [DONE]function to switch players (computer selects) 
// [DONE]then computer randomly selects icon 
    //and their selection + human selection icons appear
// [DONE]rest of the icons disappear
// call choosewinner method to determine winner
// then a winner is declared - winner score increased by 1; winner icon appears; select game icon appears
// function resetgame (not resetting game instance); clearing game type, fighters