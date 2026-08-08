let userscore=0;
let computerscore=0;
let choice=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
msg.style.color="white";

let myscorepara=document.querySelector(".myscore");
let compscorepara=document.querySelector(".compscore");
let newgamebtn=document.querySelector(".newgame");

choice.forEach((value)=>{
    value.addEventListener("click",()=>{
       let userchoice= value.getAttribute("id")
        // console.log("choice was clicked" ,userchoice)
        playgame(userchoice);
        
        
    });
});

const playgame=(userchoice)=>{
    console.log("userchoice =",userchoice);
    
    const compcommandadd=compcommand()
    console.log("compchoice =",compcommandadd);

    if(userchoice===compcommandadd){
        draw()
    }

    else{
        let userwin = true;
        if(userchoice==="rock"){
            // compcommandadd =scissor,paper
            userwin = compcommandadd === "paper" ? false : true;
        }
        else if(userchoice==="paper"){
            // compcommand=rock,scissor
            userwin = compcommandadd === "scissor" ? false : true;
        }
        else{
            userchoice==="scissor"
        userwin = compcommandadd === "rock" ?  false : true; 
        }
        showwinner(userwin,userchoice,compcommandadd)
    }


}

const compcommand= ()=>{
    let array=["rock","paper","scissor"]
    let randomidx=Math.floor(Math.random()*3)
    return array[randomidx]
}

const draw=()=>{
    console.log("Game was over");
     msg.innerText="Draw";
     msg.style.background="rgb(14, 93, 77)";
}

const showwinner = (userwin,userchoice,compcommandadd) => {

    if(userwin){ 
        userscore++;
        myscorepara.innerText=userscore;
       
        console.log("you win!");
        msg.innerText=`You win! your  ${userchoice} defeated computer ${compcommandadd} `;
        msg.style.background="green";
        
        
    }
    else{  
               computerscore++;
        compscorepara.innerText=computerscore;
        console.log("you lose!")
        msg.innerText=`You lose! computer ${compcommandadd} defeated your ${userchoice} `;
        msg.style.background="red";

     
        
    }
}

newgamebtn.addEventListener("click", () => {
    userscore = 0;
    computerscore = 0;
    myscorepara.innerText = userscore;
    compscorepara.innerText = computerscore;
    msg.innerText = "Game Reset! Start again 👊";
    msg.style.background = "rgb(14, 93, 77)";
});






 