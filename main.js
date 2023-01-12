var classicBtn = document.querySelector('#classicButton');
var difficultBtn = document.querySelector('#difficultButton')
var paper = document.querySelector('#paperIcon');
var rock = document.querySelector('#rockIcon');
var scissors = document.querySelector('#scissorsIcon');
var iguana = document.querySelector('#iguanaIcon');
var alien = document.querySelector('#alienIcon');


classicBtn.addEventListener('click', selectGame)
difficultBtn.addEventListener('click', selectGame)

paper.addEventListener('click', chooseWinner)
rock.addEventListener('click', chooseWinner)
scissors.addEventListener('click', chooseWinner)
iguana.addEventListener('click', chooseWinner)
alien.addEventListener('click', chooseWinner)