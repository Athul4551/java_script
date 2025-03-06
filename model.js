
// let n=parseInt(prompt("enter the number"))
// let i
// let s=0

// while(i<=10)
// {
//     s=i*n
//     console.log(i+"*"+n+"="+s)
//     i++
// }
// for(i=1;i<=10;i++){
//     s=i*n
//     console.log(i+"*"+n+"="+s)
// }
let a=parseInt(prompt("enter the number"))
let b=parseInt(prompt("enter the second number"))
let i
let s=0
for(i=1;a<=b;i++)
{
    let j
    for(j=1;j<=10;j++)
    {
    s=j*a
    console.log(j+"*"+a+"="+s)
    }
    console.log("")
    a=a+1
}
