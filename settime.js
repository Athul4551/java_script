// const btn = document.querySelector("button")
// btn.addEventListener("click",() => 
// {
//     console.log("clicked");

//     setTimeout(() => {
//         alert("hello")
//     }, 2000);
    
// })


// setInterval(() => {
//     console.log("hello");
// }, 1000);


const p=document.querySelector("p")
let i=10
x=setInterval(() => {
    i--
    p.textContent=i
    if(i==0)
    {
        clearInterval(x)
    }
}, 1000);