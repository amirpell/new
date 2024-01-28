let m = prompt("please write any number","");
let x = prompt("please write any number","");

if(!isNaN(m) && !isNaN(x))
{
    x = parseInt(x)
m = parseInt(m)
    let y = m**x
    console.log(y)
}
else 
{
    console.log("Please enter Numbers!");
}
