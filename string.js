function getdata()
{
    let a = document.getElementById("input")
    console.log(a.value)
        document.getElementById("p1").innerHTML=a.value.split("").reverse().join("")
}