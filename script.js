// Game board is created here at start

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

//INIT THE BOARD AT START OF GAME
play.makeBoard()

//The BOARD IS GLOBAL CODE
let board = play.arr

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
        },
        play: function(){
            play.makeBoard()
            console.table(play.arr)
        for (let i = 0; i < 9; i ++){
                if (this.checkWinner() !== "Done"){
                    player1.choosePiece()
                    player2.choosePiece()
                    console.table(board)
                } else {
                    return "Tie"
                }
            }
        },
        checkWinner: function(){
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
            } 
            else if ((board[0][0] === "X") && (board[0][1] === "X") && (board[0][2] === "X") || 
                (board[1][0] === "X") && (board[1][1] === "X") && (board[1][2] === "X") ||
                (board[2][0] === "X") && (board[2][1] === "X") && (board[2][2] === "X") ||
                (board[0][0] === "X") && (board[1][0] === "X") && (board[2][0] === "X") ||
                (board[0][1] === "X") && (board[1][1] === "X") && (board[2][1] === "X") ||
                (board[0][2] === "X") && (board[1][2] === "X") && (board[2][2] === "X") ||
                (board[0][0] === "X") && (board[1][1] === "X") && (board[2][2] === "X") ||
                (board[0][2] === "X") && (board[1][1] === "X") && (board[0][2] === "X")
            ){
                console.log("X is the winner")
                return "Done"
            } 
            else {
                console.log("keep playing")
            }
        }

        //below is the Player and its return brackets
    }
}

//***Players for the game are init***
let player1 = Player("jermain", "O")
let player2 = Player("richard", "X")

//***STARTS THE GAME */
player1.play()

//WHO GOES FIRST***
console.log("Player one always goes first")

/*
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
}*/
//playgame()


// checks for winner whether O or X is choosen

/*
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
}*/

//WORKING POINT!!!!!!