let buttons = ['Rock', 'Paper', 'Scissors'];
let k = 0;
let scoreUser = 0;
let scoreComp = 0;
let roundsPlayed=0;
let maxRounds=5;
let rock = document.querySelector(".box1");
let paper = document.querySelector(".box2");
let scissors = document.querySelector(".box3");
let r = document.querySelector(".result");
let numP = document.querySelector(".numP");
let numC = document.querySelector(".numC");
let resetButton=document.querySelector(".reset");

const resetGameButton=()=>{
    resetButton.classList.remove("hide");
    resetButton.addEventListener("click",()=>{
        enableBoxes();
        resetButton.classList.add("hide");
        k = 0;
        scoreUser = 0;
        scoreComp = 0;
        roundsPlayed=0;
        numP.innerText=0;
        numC.innerText=0;
        r.innerText="RESULT:"
    })
}

const enableBoxes=()=>{
    rock.disabled=false;
    paper.disabled=false;
    scissors.disabled=false;
}

const disableBoxes=()=>{
    rock.disabled=true;
    paper.disabled=true;
    scissors.disabled=true;
}

const endGame=()=>{
    if(scoreUser>scoreComp)
    {
    r.innerText="GAME OVER!! YOU WON."
    }
    else if(scoreComp>scoreUser){
        r.innerText="GAME OVER!! YOU LOST."
    }
    else{
        r.innerText="GAME OVER!! IT'S A TIE."
    }
    disableBoxes();
    resetGameButton();
}


const comp = () => {
    let co = buttons[Math.floor(Math.random() * 3)];
    console.log(co);
    return co;
};

const game = (u, c) => {
    if ((u === 'Rock' && c === 'Scissors') || (u === 'Paper' && c === 'Rock') || (u === 'Scissors' && c === 'Paper')) {
        r.innerText = `Congratulations! You won. ${u} wins over ${c}`;
        scoreUser++;
        numP.innerText = scoreUser;
    } else if ((u === 'Rock' && c === 'Paper') || (u === 'Paper' && c === 'Scissors') || (u === 'Scissors' && c === 'Rock')) {
        r.innerText = `You lost. ${c} wins over ${u}`;
        scoreComp++;
        numC.innerText = scoreComp;
    } else {
        r.innerText = `The match is a draw.You will get extra chance`;
        roundsPlayed--;
    }
    // nextMatch();
    roundsPlayed++;
    if (roundsPlayed === maxRounds) {
        endGame();
    }
};


rock.addEventListener("click", () => {
    let c = comp();
    game('Rock', c);
});

paper.addEventListener("click", () => {
    let c = comp();
    game('Paper', c);
});

scissors.addEventListener("click", () => {
    let c = comp();
    game('Scissors', c);
});
