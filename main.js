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
var chooseGameHeader = document.querySelector('.choose-game')

var classicFighters = ['rock', 'paper', 'scissors'];
var difficultFighters = ['rock', 'paper', 'scissors', 'alien', 'iguana']


classicBtn.addEventListener('click', selectClassic)
difficultBtn.addEventListener('click', selectDifficult)


paper.addEventListener('click', chooseWinner)
rock.addEventListener('click', chooseWinner)
scissors.addEventListener('click', chooseWinner)
iguana.addEventListener('click', chooseWinner)
alien.addEventListener('click', chooseWinner)

function selectClassic() {
    buttonsSection.classList.add('hidden')
    chooseGameHeader.innerText = 'Choose Your Fighter!'
    for (var i = 0; i < classicIcons.length; i++) {
        classicIcons[i].classList.remove('hidden')
    }   
}

function selectDifficult() {
    buttonsSection.classList.add('hidden')
    chooseGameHeader.innerText = 'Choose Your Fighter!'
    for (var i = 0; i < difficultIcons.length; i++) {
        difficultIcons[i].classList.remove('hidden')
    }
}

function humanChoice() {
    if (this.human.fighter === rock) {
        
    }

}

function chooseWinner() {
    if (this.winner = 'computer') {
        // innerText = 
    }

}


// [DONE]click classic button, button-container disappears and icons appear
// [DONE]click classic and classic icons appear
// [DONE]click difficult and difficult icons appear
// human selects icon and their logo is attached under their selection
// then computer randomly selects icon and their selection + human selection icons appear
// rest of the icons disappear
// call choosewinner method to determine winner
// then a winner is declared - winner score increased by 1; winner icon appears; select game icon appears
// function resetgame (not resetting game instance); clearing game type, fighters