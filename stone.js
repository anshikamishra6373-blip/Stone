
// let score1=0;
// let score2=0;

// const containers = document.querySelectorAll(".container");

// const genchoice2 = () =>{
//     const options=["Rock", "Paper", "Scissor"];
//     const randIdx=(Math.floor(Math.random()*3));
//     return options[randIdx];
// }

// const showWinner =(choice1Win)=>{
//     if(choice1Win){
//         console.log("You win");
//     }
//     else{
//         console.log("You lose");
//     }
// }

// const playgame=(choice1) =>{
//     console.log("choice1=",choice1);
//     const choice=genchoice2();
//     console.log("choice2=",choice2);

//     if(choice1===choice2){
//         console.log("Game was drawn");
// }
//     else{
//         let choie1win=true;
//         if(choice==="Rock"){
//             choice1win = choice2==="Paper"? false:true;
//         }
//         else if(choice==="Paper"){
//             choice1win = choice2==="Scissor"? false:true;
//        }
//         else {
//             choice1win = choice2==="Rock"? false:true;
//        }
//        showWinner(choice1Win);
//     }
// }


// containers.forEach((container) =>{
//     console.log(container);
//     container.addEventListener("click",() =>{
//      console.log("container was clicked");
//      playgame(choice1);
//     });
// });
let score1 = 0;
let score2 = 0;
const score1Display = document.querySelector("#score1");
const score2Display = document.querySelector("#score2");


const containers = document.querySelectorAll(".container");
const head = document.querySelector("#head")

const genchoice2 = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (choice1Win) => {
    if (choice1Win) {
        console.log("You win");
        head.innerText="You Win";
        score1++;
        score1Display.innerText = score1;
    } else {
        console.log("You lose");
        head.innerText="You lose";
        score2++;
        score2Display.innerText = score2;
    }
    console.log(`Score: You=${score1}, Computer=${score2}`);
};

const playgame = (choice1) => {
    console.log("Your choice =", choice1);
    const choice2 = genchoice2();
    console.log("Computer choice =", choice2);

    if (choice1 === choice2) {
        console.log("Game was drawn");
        head.innerText="Game drawn";
    } else {
        let choice1Win;
        if (choice1 === "Rock") {
            choice1Win = choice2 === "Paper" ? false : true;
        } else if (choice1 === "Paper") {
            choice1Win = choice2 === "Scissor" ? false : true;
        } else {
            choice1Win = choice2 === "Rock" ? false : true;
        }
        showWinner(choice1Win);
    }
};

containers.forEach((container) => {
    container.addEventListener("click", () => {
        const choice1 = container.innerText; // get text from clicked button
        console.log("Container was clicked:", choice1);
        playgame(choice1);
    });
});
