let time1=document.getElementById("time");
let starttest = ()=>{
    let sec=60;
    let timmer=setInterval(()=>{
        console.log(sec);
        time1.innerText=sec;
        sec--;
        if(sec==0){
            clearInterval(timmer);
            result();
        }
    },1000)
}

console.log("hello");

let result1=document.getElementById("result2");

let result=()=>{
    let texbox=document.getElementById("area").value;
    console.log(texbox);
    
    let arr=texbox.split(" ");
    let word=arr.length;

    result1.innerText=word+"words per minutes"
    console.log(word);
    
}