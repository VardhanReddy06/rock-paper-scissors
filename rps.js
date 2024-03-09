let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".photo");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector(".us");
const compscorepara = document.querySelector(".cs");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawgame = () => {
    msg.innerText = "Draw game! play again";
    msg.style.color = "white";
}

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        user++;
        userscorepara.innerText=user
        msg.innerText = `You win! your ${userchoice} beats ${compchoice}`;
        msg.style.color = "green";
    } else {
        comp++;
        compscorepara.innerText=comp
        msg.innerText = `You lose, ${compchoice} beats your ${userchoice}`;
        msg.style.color = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);

    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice == "rock") {
            userwin = compchoice == "paper" ? false : true;
        }
        else if (userchoice == "paper") {
            userwin = compchoice == "scissor" ? false : true;
        } else {
            userwin = compchoice == "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((photo) => {
    photo.addEventListener("click", () => {
        const userchoice = photo.getAttribute("id");
        playgame(userchoice);
    });
});
