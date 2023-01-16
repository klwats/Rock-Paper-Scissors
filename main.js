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
var humanWins = document.querySelector('.humanWins');
var compWins = document.querySelector('.compWins')

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
    newGame.gameType = 'classic';
    buttonsSection.classList.add('hidden');
    changeGameBtn.classList.remove('hidden');
    iconSection.classList.remove('hidden');
    chooseGameHeader.innerText = 'Choose Your Fighter!';
    for (var i = 0; i < classicIcons.length; i++) {
        classicIcons[i].classList.remove('hidden')
    }   
}

function selectDifficult() {
    newGame.gameType = 'difficult';
    buttonsSection.classList.add('hidden');
    changeGameBtn.classList.remove('hidden');
    iconSection.classList.remove('hidden');
    chooseGameHeader.innerText = 'Choose Your Fighter!';
    for (var i = 0; i < difficultIcons.length; i++) {
        difficultIcons[i].classList.remove('hidden')
    }
}

function changeGame() {
    buttonsSection.classList.remove('hidden');
    iconSection.classList.add('hidden');
    chooseGameHeader.innerText = 'Choose Your Game!'
}

function humanSelection(event) {
    newGame.human.fighter = event.target.id
    for (var i = 0; i < labels.length; i++) {
        if (event.target.id === labels[i].htmlFor) {
            labels[i].classList.remove('hidden')
        }
    }
        setTimeout(() => {
            for (var i = 0; i < labels.length; i++) {
                labels[i].classList.add('hidden')
            }
            computerSelection()
        }, 1000)
}
    
function computerSelection() {
    if (newGame.gameType === 'classic') {
        newGame.computer.fighter = randomFighter(classicFighters);
        displaySelections(classicFighters)
    } else {
        newGame.computer.fighter = randomFighter(difficultFighters);
        displaySelections(difficultFighters)
    }
}

function displaySelections(array) {
    // for (var i = 0; i < array.length; i++) {
    //     if (newGame.computer.fighter !== array[i] && newGame.human.fighter !== array[i]) {
    //     difficultIcons[i].classList.add('hidden')
    //} 
//}
    newGame.chooseWinner()
    increaseScore()
}

function increaseScore() {
    if (newGame.winner === 'human') {
        humanWins.innerText = newGame.human.wins
    } else if (newGame.winner === 'computer') {
        compWins.innerText = newGame.computer.wins
    }
    displayWinner()
}

function displayWinner() {
    console.log(newGame.winner)
    if (newGame.winner === 'human') {
        chooseGameHeader.innerText = '🤦🏼‍♀️ Human Won This Round! 🤦🏼‍♀️'
    } else if (newGame.winner === 'computer') {
        chooseGameHeader.innerText = '🖥️ Computer Won This Round! 🖥️'
    } 
    setTimeout(() => {
        newGame.resetBoard()
    }, 3000)
}

function displayDraw() {
    chooseGameHeader.innerText = 'It/s a Draw'
    setTimeout(() => {
        newGame.resetBoard()
    }, 3000)
}







// [DONE]click classic button, button-container disappears and icons appear
// [DONE]click classic and classic icons appear
// [DONE]click difficult and difficult icons appear
// [DONE] human selects icon and their logo is attached under their selection
//     [DONE]function to display icon
//      [DONE]function to switch players (computer selects) 
// [DONE]then computer randomly selects icon 
    //[DONE]//and their selection + human selection icons appear
// [DONE]rest of the icons disappear
// [DONE]call choosewinner method to determine winner
// [DONE]then a winner is declared: 
        //[DONE}winner score increased by 1; 
        //[DONE]text declaring winner appears; 
        //[DONE]game resets with all of the icons
// [DONE] function resetgame (not resetting game instance); clearing game type, fighters

// display correct icons
// display icons on correct side
// including draw icons