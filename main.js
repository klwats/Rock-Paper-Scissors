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
var resetGameBtn = document.querySelector('.reset-btn');
var paperLady = document.querySelector('.paper-lady-icon');
var rockLady = document.querySelector('.rock-lady-icon');
var scissorLady = document.querySelector('.scissors-lady-icon');
var iguanaLady = document.querySelector('.iguana-lady-icon');
var alienLady = document.querySelector('.alien-lady-icon');
var labels = document.querySelectorAll('label')


var classicFighters = ['rock', 'paper', 'scissors'];
var difficultFighters = ['rock', 'paper', 'scissors', 'alien', 'iguana']

window.addEventListener('load', fireGame)
classicBtn.addEventListener('click', selectClassic)
difficultBtn.addEventListener('click', selectDifficult)
//resetGameBtn.addEventListener('click', resetBoard)


paper.addEventListener('click', humanSelection)
rock.addEventListener('click', humanSelection)
scissors.addEventListener('click', humanSelection)
iguana.addEventListener('click', humanSelection)
alien.addEventListener('click', humanSelection)

function fireGame() {
    newGame = new Game()
}

function selectClassic() {
    buttonsSection.classList.add('hidden')
    resetGameBtn.classList.remove('hidden')
    chooseGameHeader.innerText = 'Choose Your Fighter!'
    for (var i = 0; i < classicIcons.length; i++) {
        classicIcons[i].classList.remove('hidden')
    }   
}

function selectDifficult() {
    buttonsSection.classList.add('hidden')
    resetGameBtn.classList.remove('hidden')
    chooseGameHeader.innerText = 'Choose Your Fighter!'
    for (var i = 0; i < difficultIcons.length; i++) {
        difficultIcons[i].classList.remove('hidden')
    }
}

function humanSelection(event) {
    newGame.human.fighter = event.target.id
    for (var i = 0; i < labels.length; i++) {
        if (event.target.id === labels[i].htmlFor) {
            labels[i].classList.remove('hidden')
        }
    }
    
    //update game/player class to correct fighter
    //set timeout
    //trigger function that generates random index for computer to select fighter
}






// function chooseWinner() {
//     if (this.winner = 'computer') { 
//     }

// }


// [DONE]click classic button, button-container disappears and icons appear
// [DONE]click classic and classic icons appear
// [DONE]click difficult and difficult icons appear
// human selects icon and their logo is attached under their selection
//     function to display icon
//      function to switch players (computer selects) 
// then computer randomly selects icon and their selection + human selection icons appear
// rest of the icons disappear
// call choosewinner method to determine winner
// then a winner is declared - winner score increased by 1; winner icon appears; select game icon appears
// function resetgame (not resetting game instance); clearing game type, fighters