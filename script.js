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
    
    //whoGoFirst()

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


//spend time making random who goes first
// finish the backend


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
        console.log("Y is the winner")
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


//checkWinner()