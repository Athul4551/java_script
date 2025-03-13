// let a= document.getElementById("sample")
// a.setAttribute("style","color:red")
// a.setAttribute("class","s1")
// console.log(a.getAttribute("style"));
// a.classList.add("s2")
// a.classList.remove("s1")

// let div = document.querySelector("div")
// let p = document.createElement("p")
// p.innerHTML = "hello"
// div.appendChild(p)

// div.removeChild(p)
// function myfunction()
// {
//     let a = window.confirm("press a button")
//     console.log(a);
// }


// const btn = document.querySelector("button")
// console.log(btn);
// // btn.onclick = function(){
// //     alert("welcome")
// // }
// btn.onclick = () => alert("welcome")


// const a = document.querySelector("a")
// a.onclick = () => alert("hello")

const btn = document.querySelector("button")
btn.addEventListener("keypress",() =>
{
    const p = document.querySelector("p")
    p.style.color = "red"
})
