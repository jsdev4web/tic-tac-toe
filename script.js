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


//INIT THE BOARD AT START OF GAME
play.makeBoard()

let mainDiv = document.querySelector("#main")

let buttonHolder = document.createElement("div")
buttonHolder.setAttribute("class", "buttonHolder")
mainDiv.appendChild(buttonHolder)

//Adds the check winner button
let winButton = document.createElement("button")
winButton.innerText = "Check Win"
buttonHolder.appendChild(winButton)

let startBtn = document.createElement("button")
//startBtn.setAttribute("class", "startBtn")
startBtn.innerHTML = "Start Game"
buttonHolder.appendChild(startBtn)

let winAnnounce = document.createElement("div")
winAnnounce.setAttribute("class", "winAnnounce")
buttonHolder.appendChild(winAnnounce)

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
            your using: ${piece} \n\n`
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

                        if (index === 2){
                            board[0][2] = player2.piece
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
        play: function(){
            play.makeBoard()
            this.choosePiece()
        
        },
        checkWinner: function(){
            if ((board[0][0] === "O") && (board[0][1] === "O") && (board[0][2] === "O") || 
                (board[1][0] === "O") && (board[1][1] === "O") && (board[1][2] === "O") ||
                (board[2][0] === "O") && (board[2][1] === "O") && (board[2][2] === "O") ||
                (board[0][0] === "O") && (board[1][0] === "O") && (board[2][0] === "O") ||
                (board[0][1] === "O") && (board[1][1] === "O") && (board[2][1] === "O") ||
                (board[0][2] === "O") && (board[1][2] === "O") && (board[2][2] === "O") ||
                (board[0][0] === "O") && (board[1][1] === "O") && (board[2][2] === "O") ||
                (board[0][2] === "O") && (board[1][1] === "O") && (board[2][0] === "O")
            ){
                console.log("O is the winner")
                winAnnounce.innerText = "Player O wins"
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
                winAnnounce.innerText = "Player X wins"
                return "Done"
            } 
            else {
                console.log("keep playing")
            }
        }

        //below is the Player and its return brackets
    }
}

let name1 = prompt("Player1 = O, what is your name?")
let name2 = prompt("Player2 = X, what is your name?")

let whoIs = document.createElement("div")
whoIs.setAttribute("class", "whoIs")
document.body.appendChild(whoIs)
document.body.insertBefore(whoIs, mainDiv)

//***Players for the game are init***
let player1 = Player(name1, "O")
player1.greet()
whoIs.innerText += player1.greet()

let player2 = Player(name2, "X")
player2.greet()
whoIs.innerText += player2.greet()



// TURN GAME OFF or ON !!!!!HERE!!!!!
//player1.play()



startBtn.addEventListener("click", (e) => {
    player1.play()
    alert("The game has begun")
})

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