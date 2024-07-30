

//I am rewriting values

// Game board is created here

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
        }
    }
})()

play.makeBoard()

// Each player is created here

let Player = function (name, piece){
    return {
    
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
            if (board[x][y] === "#"){
                board[x][y] = this.piece
            } else{
                console.log("spot taken, both players go again")
            }
            //console.log(board)
        }
    }
}

let player1 = Player("jermain", "O")
let player2 = Player("richard", "X")

//This function was to decide who goes first but 
//I may go back and add it later

/*function whoGoFirst(){
let ab = Math.floor(Math.random() * 10)
console.log(ab)
    if(ab % 2 == 0 ){
        console.log(ab)
        console.log("Player 1 goes first")
    
        } else{
        console.log("Player 2 goes first")
    }
}*/
//whoGoFirst()

let board = play.arr

console.log("Player one always goes first")

function playgame(){
    play.makeBoard()
    console.table(play.arr)
    

    for (let i = 0; i < 9; i ++){
        if (checkWinner() !== "Done"){

            player1.choosePiece()
            player2.choosePiece()
            console.table(board)
        } else {
            return "Tie"
        }
    } 
    
    
}
playgame()


// checks for winner whether O or X is choosen

function checkWinner(){
    if ((board[0][0] === "O") && (board[0][1] === "O") && (board[0][2] === "O") || 
        (board[1][0] === "O") && (board[1][1] === "O") && (board[1][2] === "O") ||
        (board[2][0] === "O") && (board[2][1] === "O") && (board[2][2] === "O") ||
        (board[0][0] === "O") && (board[1][0] === "O") && (board[2][0] === "O") ||
        (board[0][1] === "O") && (board[1][1] === "O") && (board[2][1] === "O") ||
        (board[0][2] === "O") && (board[1][2] === "O") && (board[2][2] === "O") ||
        (board[0][0] === "O") && (board[1][1] === "O") && (board[2][2] === "O") ||
        (board[0][2] === "O") && (board[1][1] === "O") && (board[0][2] === "O")
    ){
        console.log("O is the winner")
        return "Done"
    } else if ((board[0][0] === "X") && (board[0][1] === "X") && (board[0][2] === "X") || 
    (board[1][0] === "X") && (board[1][1] === "X") && (board[1][2] === "X") ||
    (board[2][0] === "X") && (board[2][1] === "X") && (board[2][2] === "X") ||
    (board[0][0] === "X") && (board[1][0] === "X") && (board[2][0] === "X") ||
    (board[0][1] === "X") && (board[1][1] === "X") && (board[2][1] === "X") ||
    (board[0][2] === "X") && (board[1][2] === "X") && (board[2][2] === "X") ||
    (board[0][0] === "X") && (board[1][1] === "X") && (board[2][2] === "X") ||
    (board[0][2] === "X") && (board[1][1] === "X") && (board[0][2] === "X")
) {
        console.log("X is the winner")
        return "Done"
} else {
    
        console.log("keep playing")
    }
}
