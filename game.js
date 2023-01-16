class Game {
    constructor() {
        this.human = new Player();
        this.computer = new Player();
        this.gameType = '';
        this.fighters = [];
        this.winner = '';
        this.draw;
        
    }

    chooseWinner() {
        console.log('blouse', this.gameType)
        if (this.human.fighter === this.computer.fighter) {
            this.declareDraw()
        } else if (this.human.fighter === 'scissors' && this.computer.fighter === 'paper') {
            this.human.wins ++;
            this.winner = 'human'
        } else if (this.human.fighter === 'scissors' && this.computer.fighter === 'rock') {
            this.computer.wins ++;
            this.winner = 'computer'
        } else if (this.human.fighter === 'scissors' && this.computer.fighter === 'iguana') {
            this.human.wins ++;
            this.winner = 'human'
        } else if (this.human.fighter === 'scissors' && this.computer.fighter === 'alien') {
            this.computer.wins ++;
            this.winner = 'computer'
        } else if (this.human.fighter === 'rock' && this.computer.fighter === 'paper') {
            this.computer.wins ++;
            this.winner = 'computer'
        } else if (this.human.fighter === 'rock' && this.computer.fighter === 'scissors') {
            this.human.wins ++;
            this.winner = 'human'
        } else if (this.human.fighter === 'rock' && this.computer.fighter === 'iguana') {
            this.human.wins ++;
            this.winner = 'human'
        } else if (this.human.fighter === 'rock' && this.computer.fighter === 'alien') {
            this.computer.wins ++;
            this.winner = 'computer'
        } else if (this.human.fighter === 'paper' && this.computer.fighter === 'rock') {
            this.human.wins ++
            this.winner = 'human'
        } else if (this.human.fighter === 'paper' && this.computer.fighter === 'scissors') {
            this.computer.wins ++;
            this.winner = 'computer'
        } else if (this.human.fighter === 'paper' && this.computer.fighter === 'iguana') {
            this.computer.wins ++;
            this.winner = 'computer'
        } else if (this.human.fighter === 'paper' && this.computer.fighter === 'alien') {
            this.human.wins ++;
            this.winner = 'human'
        } else if (this.human.fighter === 'alien' && this.computer.fighter === 'rock') {
            this.human.wins ++
            this.winner = 'human'
        } else if (this.human.fighter === 'alien' && this.computer.fighter === 'scissors') {
            this.human.wins ++;
            this.winner = 'human'
        } else if (this.human.fighter === 'alien' && this.computer.fighter === 'iguana') {
            this.computer.wins ++;
            this.winner = 'computer'
        } else if (this.human.fighter === 'alien' && this.computer.fighter === 'paper') {
            this.computer.wins ++;
            this.winner = 'computer'
        } else if (this.human.fighter === 'iguana' && this.computer.fighter === 'rock') {
            this.computer.wins ++;
            this.winner = 'computer'
        } else if (this.human.fighter === 'iguana' && this.computer.fighter === 'scissors') {
            this.computer.wins ++;
            this.winner = 'computer'
        } else if (this.human.fighter === 'iguana' && this.computer.fighter === 'alien') {
            this.human.wins ++;
            this.winner = 'human'
        } else if (this.human.fighter === 'iguana' && this.computer.fighter === 'paper') {
            this.human.wins ++;
            this.winner = 'human'
        }
        console.log('puter', this.computer.fighter, this.computer.wins)
        console.log('kat', this.human.fighter, this.human.wins)
    }

    declareDraw() {
        if (this.human.fighter === this.computer.fighter) {
            displayDraw()
        }
    }

    resetBoard() {
        this.winner = ''
        if (this.gameType === 'classic') {
            selectClassic()
        } else {
            selectDifficult()
        }  
    }
}

