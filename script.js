// Game board Object is created here at start

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
                    //this.arr[i][j]
                            
                }
            };      
        }
    }
})()


function domBoard(num){
    let main = document.getElementById("main")
    for ( let i = 0; i < num; i++){
        let myDiv = document.createElement("div")
         myDiv.setAttribute("class", "divs")
         myDiv.innerHTML = "#"
         main.append(myDiv) 
    }
              
}     

domBoard(9)

// TEST Function to target my clicks
/*function targetClicks(){
    let theCells = document.querySelectorAll(".divs")
    console.log(theCells)

    theCells.forEach((cell, index) => {
        cell.addEventListener("click", (e) => {
            console.log(e.target)
            console.log(index)
            
            if (index % 2 == 0){
                e.target.innerHTML = "x"
            } else {
                e.target.innerHTML = "0"
            }
        })
    })
}

targetClicks()
*/

//i have the backend index which is row column
//i have a front end indes for the divs which is 0-8 top to bottom
//i need to if else the x or o variable
//turn the game back on and instead of using the prompt,
//the div clicks need affect front end and back end


//INIT THE BOARD AT START OF GAME
play.makeBoard()

//Adds the check winner button
let winButton = document.createElement("button")
winButton.innerText = "Check Win"
let mainDiv = document.querySelector("#main")
mainDiv.appendChild(winButton)


//The BOARD IS GLOBAL CODE
let board = play.arr

 console.log(board)
// Each player Object is created here

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
            let targetCells = document.querySelectorAll(".divs")
            targetCells.forEach((cell) => {
            
                //single clicks = o
                cell.addEventListener("click", (e) => {
                    //console.log(e.target)
                        this.checkWinner()
                        e.target.innerHTML = player1.piece
                        this.backend()
                        console.log(board)
                        
                })

                //double clicks = x
                cell.addEventListener("dblclick", (e) => {
                    //console.log(e.target)
                        this.checkWinner() 
                        e.target.innerHTML = player2.piece
                        this.backend()
                        console.log(board)
                                       
                })

            })
        }, //purpose is to log clicks with board index on backend
        backend: function(){
            let cells = document.querySelectorAll('.divs')
            cells.forEach((cell, index) => {

                cell.addEventListener("click", (e) => {
                    //console.log(e.target.innerHTML)
                    //console.log(index)
                    if (index === 0){
                        board[0][0] = player1.piece
                        //console.log(board)
                    }

                    if (index === 1){
                        board[0][1] = player1.piece
                        //console.log(board)
                    }

                    if (index === 2){
                        board[0][2] = player1.piece
                        //console.log(board)
                    }

                    if (index === 3){
                        board[1][0] = player1.piece
                        //console.log(board)
                    }

                    if (index === 4){
                        board[1][1] = player1.piece
                        console.log(board)
                    }

                    if (index === 5){
                        board[1][2] = player1.piece
                        //console.log(board)
                    }

                    if (index === 6){
                        board[2][0] = player1.piece
                        //console.log(board)
                    }

                    if (index === 7){
                        board[2][1] = player1.piece
                        //console.log(board)
                    }

                    if (index === 8){
                        board[2][2] = player1.piece
                        //console.log(board)
                    }



                    cell.addEventListener("dblclick", (e) => {
                        //console.log(e.target.innerHTML)
                        //console.log(index)

                        if (index === 0){
                            board[0][0] = player2.piece
                            //console.log(board)
                        }

                        if (index === 1){
                            board[0][1] = player2.piece
                            //console.log(board)
                        }

                        if (index === 3){
                            board[1][0] = player2.piece
                            //console.log(board)
                        }
    
                        if (index === 4){
                            board[1][1] = player2.piece
                            //console.log(board)
                        }
    
                        if (index === 5){
                            board[1][2] = player2.piece
                            //console.log(board)
                        }
    
                        if (index === 6){
                            board[2][0] = player2.piece
                            //console.log(board)
                        }
    
                        if (index === 7){
                            board[2][1] = player2.piece
                            //console.log(board)
                        }
    
                        if (index === 8){
                            board[2][2] = player2.piece
                            //console.log(board)
                        }


                    })
                
                })
            })
        },
        //HERE can i still uses X and Y Coords to match DOMs and players
        /*choosePiece: function(){
            let x, y = "";
            x = prompt("x: coord");
            y = prompt("y: coord");
            if (board[x][y] === "#"){
                board[x][y] = this.piece
            } else{
                console.log("spot taken, both players go again")
            }
            //console.log(board)
        },*/
        play: function(){
            play.makeBoard()
            this.choosePiece()
            //console.table(play.arr)
        /*for (let i = 0; i < 9; i ++){
                if (this.checkWinner() !== "Done"){
                    //player1.choosePiece()
                    //player2.choosePiece()
                    this.choosePiece()
                    console.log(board)
                    console.table(board)
                } else {
                    return "Tie"
                }
            }*/
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

// TURN GAME OFF or ON !!!!!HERE!!!!!
player1.play()

//WHO GOES FIRST***
console.log("Player one always goes first")


//WORKING POINT!!!!!!

//To end the game when players see the win becuz winner 
//is not taken until the next turn.
winButton.addEventListener("click", player1.checkWinner)
winButton.addEventListener("click", player2.checkWinner)


// I need to check if I can end the game immediately after the clicks
// I need to verify if I coded this up to par using objects correctly
// return and or BREAK the game so it canoot continue