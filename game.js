class Game {
    constructor(gameType) {
        this.human = new Player();
        this.computer = new Player();
        this.gameType = gameType
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
        } else if (this.human.fighter === 'scissors' && this.computer.fighter === 'iguana')
        
    }

    draw() {

    }

    resetBoard() {

    }

    selectGame() {
        if ()
    }

}