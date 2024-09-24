// let boxes = document.querySelectorAll(".btn");
// let reset = document.querySelector(".rstbtn");

// let turnO = true;

// let wincombs = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];

// reset.addEventListener("click",rstgame);
// function rstgame(){
//     turnO=true;
//     boxes.forEach((box)=>{
//         box.innerText="";
//         box.disabled=false;
//     });
//     document.getElementById("result").innerHTML = " ";
// }

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         if(turnO==true){
//             box.innerHTML="X";
//             turnO=false;
//             box.disabled=true;
//         }
//         else{
//             box.innerHTML="O";
//             turnO=true;
//             box.disabled=true;
//         }
//         isWinner();
//     });
// });

// function isWinner(){
//     for(let pattern of wincombs){
//         // console.log(pattern[0],pattern[1],pattern[2]);  
//         // console.log(boxes[pattern[0]].innerText,
//         //     boxes[pattern[1]].innerText,
//         //     boxes[pattern[2]].innerText)
//         // ;
//         let move1 = boxes[pattern[0]].innerText;  
//         let move2 = boxes[pattern[1]].innerText;  
//         let move3 = boxes[pattern[2]].innerText;  

//         if(move1!="" && move2!="" && move3!=""){
//             if(move1==move2 && move2==move3){
//                 console.log(move1,"Winner");
//                 boxes.forEach((box)=>{
//                     box.disabled=true;
//                 });
//                 document.getElementById("result").innerHTML = `${move1} Wins!`;
//                 break;
//             }
//         }
//     }
// }

const boxes = document.querySelectorAll(".btn");
const resetbtn = document.querySelector(".rstbtn");
console.log(boxes);
let turnO = true;
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerHTML="X";
            turnO=false;
        }
        else{
            box.innerHTML="O";
            turnO=true;
        }
        isWinner();
    })
});

function isWinner(){
    for(pattern of winpatterns){
        let move1 = boxes[pattern[0]].innerText;
        let move2 = boxes[pattern[1]].innerText;
        let move3 = boxes[pattern[2]].innerText;

        if(move1!="" && move2!="" && move3!=""){
            if(move1===move2 && move2===move3){
                boxes.forEach((box)=>{
                    box.disabled=true;
                })
                document.getElementById("result").innerHTML = `${move1} Wins!`;
                break;
            }
        }
    }
}