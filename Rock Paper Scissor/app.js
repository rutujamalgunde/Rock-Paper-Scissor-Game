let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score")


const genCompChoice =() =>{
    //Rock, Paper, Scissor
    const options= ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=>{
    console.log("Game was draw");
    msg.innerText = "Draw!! Play Again";
    msg.style.backgroundColor ="#081b31";
}

const showWinner = (userWin,userchoice,compChoice) =>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You Win!!");
        msg.innerText = `You Win!! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You lose");
        msg.innerText = `You lose!! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userchoice)=>{
    console.log("User choice =",userchoice);

    //generate Computer chice
    let compChoice = genCompChoice();
    console.log("comp Choice =", compChoice);
    // console.log("user choice " , userchoice);

   if(userchoice==compChoice){
      drawGame();
   }
   else{
       let userWin=true;
       if(userchoice==="rock"){
        //Scissor, paper
        userWin = compChoice === "paper"? false : true;
       }
       else if(userchoice==="paper"){
        userWin = compChoice==="scissor"? false : true;
       }
       else{
        userWin = compChoice === "rock"? false : true;
       }
       showWinner(userWin,userchoice,compChoice);
   }
}

choices.forEach((choice) => {
   
    choice.addEventListener("click",()=>{

        let userchoice= choice.getAttribute("id");
        playGame(userchoice);
       
    })
    
});
