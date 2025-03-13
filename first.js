// let p = document.getElementsByTagName("p")
// console.log(p);


// let a = document.getElementsByClassName("p")
// console.log(a);


// let a = document.getElementById("p1")
// console.log(a);
 
// a.innerHTML = "hello world"
// a.innerHTML = `<h1>link</h1>`


// function getdata()
// {
//     let a = document.getElementById("input")
//     console.log(a.value)
//         document.getElementById("p1").innerHTML=parsInt(a.value)
// }


function add(){
    let a = document.getElementById("num1")
    let b = document.getElementById("num2")
    let c = parseInt(a.value) + parseInt(b.value)
    document.getElementById("result").innerHTML = c
}

function sub(){ 
    let a = document.getElementById("num1")
    let b = document.getElementById("num2")     
    let c = parseInt(a.value) - parseInt(b.value)
    document.getElementById("result").innerHTML = c
}

function mul(){
    let a = document.getElementById("num1")
    let b = document.getElementById("num2")
    let c = parseInt(a.value) * parseInt(b.value)
    document.getElementById("result").innerHTML = c
}

function div(){ 
    let a = document.getElementById("num1")
    let b = document.getElementById("num2")
    let c = parseInt(a.value) / parseInt(b.value)
    document.getElementById("result").innerHTML = c
}