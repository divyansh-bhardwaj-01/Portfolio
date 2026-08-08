let msg=document.querySelector(".msg")
let btn2=document.querySelector("#btn2")
let newgame=document.querySelector(".newgame")
let btn=document.querySelectorAll(".box");
let btn0=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
btn.forEach((value)=>{
value.addEventListener("click",()=>{
    console.log("button was clicked")
    if(btn0===true){
        value.innerHTML="O";
        btn0=false  
    }
    else{
      
        value.innerHTML="X"
          btn0=true
    }
    
   value.disabled=true;
   checkwinner()
})
})

const checkwinner = ()=>{
for(let element of winpattern){


    let psn1 = btn[element[0]].innerText;
    let psn2 = btn[element[1]].innerText;
    let psn3 = btn[element[2]].innerText;
 
    if(psn1!=""   &&psn2!=""  &&psn3!=""
        &&  psn1===psn2&&  psn2===psn3 &&  psn1===psn3
    ){
      
      
        console.log("winner is" , psn1||psn2||psn3)
        showwinner(psn1||psn2||psn3)
      
    }
}
}
const showwinner=(winner)=>{
btn2.innerText=(`CONGRATULATION, The winner is ${winner}`)
msg.classList.remove("hide")
btndisable()
}


const btndisable= () =>{
   for(element of btn){
    element.disabled=true;
   }
}

const enablebtn= ()=>{
for(element of btn){
    element.disabled=false;
    element.innerText="";
    msg.classList.add("hide")
}
}
newgame.addEventListener("click",()=>{
enablebtn()
})