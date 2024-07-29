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
            //console.table(this.arr)
        }
    }
})()

play.makeBoard()
//play.arr[0][0] = "test";


//console.log(play.arr)


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
        },
        choosePiece: function(){
            let x, y = "";
            x = prompt("x: coord");
            y = prompt("y: coord");
            board[x][y] = this.piece
            //console.log(board)
        }
    }
}

let player1 = Player("jermain", "O")
let player2 = Player("richard", "X")

function whoGoFirst(){
let whoGoFirst = Math.floor(Math.random() * 10)
console.log(whoGoFirst)
    if(whoGoFirst % 2 == 0 ){
        console.log("Player 1 goes first")
    
        } else{
        console.log("Player 2 goes first")
    }
}

whoGoFirst()

let board = play.arr


function playgame(){
    play.makeBoard()
    console.table(play.arr)
    
    whoGoFirst()

    for (let i = 0; i < 9; i ++){
        if (checkWinner() !== "Done"){
            player1.choosePiece()
            player2.choosePiece()
            console.table(board)
        } else {
            return "No winner"
        }
    } 
    
    
}
playgame()

//let x = prompt("x: coord")
//let y = prompt("y: coord")



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

/*
play.arr[x][y] = "O";
console.log(play.arr)

x = prompt("x: coord")
y = prompt("y: coord")

play.arr[x][y] = 'O'
console.log(play.arr)

x = prompt("x: coord")
y = prompt("y: coord")

play.arr[x][y] = "O"
console.log(play.arr)

*/



function checkWinner(){
    //console.log(board)
    if ((board[0][0] === "O") && (board[0][1] === "O") && (board[0][2] === "O") || 
        (board[1][0] === "O") && (board[1][1] === "O") && (board[1][2] === "O") ||
        (board[2][0] === "O") && (board[2][1] === "O") && (board[2][2] === "O") ||
        (board[0][0] === "O") && (board[1][0] === "O") && (board[2][0] === "O") ||
        (board[0][1] === "O") && (board[1][1] === "O") && (board[2][1] === "O") ||
        (board[0][2] === "O") && (board[1][2] === "O") && (board[2][2] === "O") ||
        (board[0][0] === "O") && (board[1][1] === "O") && (board[2][2] === "O") ||
        (board[0][2] === "O") && (board[1][1] === "O") && (board[0][2] === "O")
    ){
        console.log("you win")
        return "Done"
    } else{
        console.log("keep playing")
    }
    
}


//checkWinner()