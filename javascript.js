// // // // // // //for -of loop
// // // // // // // size=0;
// // // // // // // str="javascript"
// // // // // // // for (let i of str){
// // // // // // //     console.log("i=",i)
// // // // // // //     size+;
// // // // // // // }
// // // // // // // console.log(size)

// // // // // // //for -in loop

// // // // // // //for objects only

// // // // // // // let student ={
// // // // // // //     name:"abc",
// // // // // // //     age:39,
// // // // // // //     cgpa:9.3,
// // // // // // //     isPass:true,
// // // // // // // };

// // // // // // // for ( k in student )
// // // // // // //     console.log(k,student[k])


// // // // // // let gameNum=49;
// // // // // // let guessNum=prompt("Enter the number:");

// // // // // // while(guessNum !=gameNum){
// // // // // //     guessNum=prompt("Wromg,P'esaeEnter the number:");

// // // // // // }
// // // // // // console.log("congratulat1ions") 
// // // // // let s1="javascringpts";
// // // // // console.log(s1.length)

// // // // // //built in string methods in js

// // // // // let str="JAVa script   ";
// // // // // console.log(str.toUpperCase())
// // // // // console.log(str.toLowerCase())
// // // // // console.log(str.trim()) 

// // // // // let s2=str.slice(7,10)
// // // // // console.log(s2)
// // // // // let s3=s1.replaceAll("s","z")
// // // // // console.log(s3)

// // // // //Arrays
// // // // // let marks=[34,56,78,34,3,4]
// // // // // console.log(marks)

// // // // // console.log(marks.toString())
// // // // // console.log(marks.slice(3,7))
// // // // // console.log(marks.splice(1,0,58))
// // // // // console.log(marks)
// // // // // console.log(marks.splice(3))
// // // // // console.log(marks)
// // // // // console.log(marks.splice(1,2,101,102))
// // // // // console.log(marks)

// // // // //Functions//
// // // // function myfunction(){
// // // //     console.log("javascript"  );
// // // //     console.log("backend*3");
// // // // }

// // // // myfunction();

// // // //Arrow functions//
// // // // const aroper= (m,n)=>{
// // // //     return m+n;
// // // //  }

// // // //  aroper(5,9.8);
// // // // console.log(aroper);

// // // //function that returns the vowels in an string//
// // // // function vowel(string){
// // // //    let count=0;
// // // //     for(let i=0;i<string.length;i++)
// // // //     {if(string[i]=='a'||string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
// // // //             count++;
// // // //     }
   
// // // // } 
// // // //  return count
// // // // }  
// // // // let v=vowel("javascript")
// // // // console.log(v)


// // // //forEach //
// // // let abc=[2,3,4,6,5,7]

// // // let square=(mn)=>{
// // //     console.log(mn*mn)
// // // };

// // // abc.forEach(square);


// // //DOM//
// // console.log(window.document)
// // console.log(document)
// // console.dir(document)
// // console.dir(window.document)
// // console.dir(document.body)
// // console.log(document.body)


// let ids=document.getElementById(heading)
// console.log(ids)

// let cls=document.getElementsByClassName(heading)
// console.log(cls)

// let ps=document.getElementsByTagName(heading)
// console.log(ps)


// let firel=document.querySelector(".topic");
// console.log(firel)

// let firell=document.querySelectorAll(".topic");
// console.log(firell)   


let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id") ;
console.log(id);

let change=div.setAttribute("id","square");

div.style.backgroundColor="blue"; 
 

//inserting element usign dom
let abc=document.createElement("h1");
abc.innerText="This is a English language."
abc.style.fontSize="10px"

div.prepend(abc);
div.append(abc)

let p=document.querySelector("div")
p.before(abc)

//deleting element
abc.remove();
