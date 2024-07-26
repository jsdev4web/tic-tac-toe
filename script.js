//invoke the gameboard first goal factory function!! Done***


let play = (function(row, column, arr) {
    return {
        arr: arr,
        row: row,
        column: column,
        makeBoard: function (row, column){
            this.arr = [];
            this.row = 3;
            this.column = 3;
            for (let i = 0; i < this.row; i++){
                this.arr[i] = [];
                for (let j = 0; j < this.column; j++) {
                this.arr[i][j] = "#";
                }
            };
            console.table(this.arr)
        }
    }
})()

play.makeBoard()
play.arr[0][0] = "test";


console.log(play.arr)


//create 2 users player and cpu

let Player = function (name, piece){
    return {
    //create player object
        name: name,
        piece: piece,
        greet: function(){
            console.log("Hello " + this.name + " your playing " +
            "piece is " + piece + ".")
            return `Hello ${name},
            your playing piece is ${piece}`
        }
    }
}

let jermain = Player("jermain", "O")
let richard = Player("richard", "X")

jermain.greet()
richard.greet()


/*write out flow of game
play function
press this to play the game
prompt do you want to be X or O
math.random chooses who goes first
player(?) choose a cell
if cell has no data, add the new data else return message
Each turn check winner
MAKE A CHECK WINNER FUNCTION
if winner game over else contine
After game logic is complete make interface window
*/

