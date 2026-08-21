let gridItems = document.getElementsByClassName("square")
let currentTurn = "X"
let gameFinished = false
let boardArray = [
    "0", "1", "2",
    "3", "4", "5",
    "6", "7", "8"
]

for (const item of gridItems) {
    item.addEventListener("click", function () {
        if (gameFinished) {
            return
        }
        let value = item.getAttribute("value")
        let index = value-1

        if (boardArray[index] === "X" || boardArray[index] === "O") {
            return
        }

        let squarecontent = document.querySelector(`.square[value="${value}"]`)
        squarecontent.innerHTML = currentTurn

        boardArray[index] = currentTurn

        evaluateboard()
        if (currentTurn === "X") {
            currentTurn = "O"
        }else {
            currentTurn = "X"
        }

        document.getElementById("instruction").textContent = `${currentTurn} Turn`
    })


    function evaluateboard()
    {
        if(
            (boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2]) ||
            (boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5]) ||
            (boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8]) ||
            (boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6]) ||
            (boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7]) ||
            (boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8]) ||
            (boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]) ||
            (boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6])
        ){
            var winner = currentTurn === "X" ? "X" : "O"
            alert(winner + " is the winner")
            gameFinished = true
        }

        var isDraw = true
        for (square of boardArray) {
            if (square !== "X" && square !== "O") {
                isDraw = false
                break
            }
        }
        if (isDraw && !gameFinished) {
            alert("It's a draw!")
            gameFinished = true
        }
    }

}

document.getElementById("reset-btn").addEventListener("click", function () {
    for (const item of gridItems) {
        item.innerHTML = ""
    }
    boardArray = [
        "0", "1", "2",
        "3", "4", "5",
        "6", "7", "8"
    ]
    gameFinished = false
    currentTurn = "X"
    document.getElementById("instruction").textContent = `${currentTurn} Turn`
})