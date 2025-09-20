
//Event Handling in JS file//
// let btn1=document.querySelector("#b1");
// btn1.onclick=(ef)=>{
//     console.log(ef)
//     console.log('button clicked')
//     let click=40;
//     click++;
//     console.log(click);
// };


// let box=document.querySelector("div");

// box.onmouseover=()=>{
//  console.log('on the div')

// }

//EVENT Listener//

let btn1=document.querySelector("#b1");
btn1.addEventListener('click',(e)=>{
    console.log("This is an onclick event ");
    console.log(e)      //Event Object
    console.log(e.type) 
    console.log(e.target)

})


btn1.addEventListener('click',(e)=>{
    console.log("This is an onclick event -handler2 ");
})

btn1.addEventListener('click',(e)=>{
console.log("This is an onc    lick event -handler3");
})

const handler4=()=>{
console.log("This is an onc    lick event -handler4");
};

btn1.addEventListener("click",handler4);

btn1.removeEventListener("click",handler4);
