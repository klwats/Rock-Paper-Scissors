class Game {
    constructor(gameType) {
        this.human = new Player();
        this.computer = new Player();
        this.gameType = gameType;
        this.fighters = [];
        this.winner = '';
        this.draw = true;
        
    }

    
    chooseWinner() {
        if (this.human.fighter === this.computer.fighter) {
            this.draw()
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
        } 
    }

    draw() {
        if (this.human.fighter === this.computer.fighter) {
            resetBoard()
            return 'It/s a draw!'
        }
    }

    resetBoard() {
        if (this.gameType === 'classic') {
            selectClassic()
        } else {
            selectDifficult()
        }


    }

    selectGame() {
        
    }

}

