const boxes = document.querySelectorAll(".boxes");
const winnerName = document.querySelector(".WinnerName")
const computerScore = document.querySelector(".computerScore")
const userScore = document.querySelector(".userScore")
let youscore =0;
let compscore =0;


const getCompchoice = () => {
    const options = ["stone boxes", "paper boxes", "scissors boxes"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!");
        winnerName.innerText ="You win the game"
        youscore++;
        userScore.innerText =youscore;
    } else {
        console.log("Computer wins!");
        winnerName.innerText ="Computer win the game"
        compscore++;
        computerScore.innerText=compscore;
    }
};

const playGame = (value) => {
    console.log("User choice is", value);

    // Generate computer choice
    const compchoice = getCompchoice();
    console.log("Computer choice is", compchoice);

    if (value === compchoice) {
        console.log("Draw");
        winnerName.innerText ="Game is draw"

    } else {
        let userWin = true;
        if (value === "stone boxes") {
            userWin = compchoice === "paper boxes" ? false : true;
        } else if (value === "paper boxes") {
            userWin = compchoice === "scissors boxes" ? false : true;
        } else if (value === "scissors boxes") {
            userWin = compchoice === "stone boxes" ? false : true;
        }
        showWinner(userWin);
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const value = box.getAttribute("class");
        playGame(value);
    });
});
