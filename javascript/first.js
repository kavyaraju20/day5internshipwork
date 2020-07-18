var a=10
undefined
if(a%2==0){
    console.log("number is even")
}else{
    console.log("number is odd")
}
// number is even

var a=11
undefined
if(a%2==0){
    console.log("number is even")
}else{
    console.log("number is odd")
}
// number is odd

var a =15
undefined
if(a%2==0){
    console.log("no is even")
}else if(a%3===0){
    console.log("no is divisible by 3")
}else{
    console.log("no is odd")
}
//VM1741:4 no is divisible by 3

var a=true
undefined
if(a){
    console.log("first")
}else{
    console.log("second")
}
//VM2061:2 first

var a=20
(a>15)?"no is greater":"no is lesser"
//"no is greater"

var mydate = new Date()
undefined
mydate
//Mon Jul 13 2020 18:11:22 GMT+0530 (India Standard Time)
mydate.getDay()
//1
mydate.getMonth()
//6
mydate.getFullYear()
//2020
mydate.getDate()
//13

var day = '1'
undefined
switch(day){
    case '1':
        console.log("monday")
        break;
    case '2':
        console.log("tuesday")
        break;
    case '3':
        console.log("wednesday")
        break;
    default:
        console.log("try again")
}
//monday

function add(a,b){
    return a+b
}
undefined
add(3,4)
//7

function isEven(num){
    var out;
    if(num%2==0){
        out=console.log("no is even")
    }else{
        out=console.log("no is odd")
    }
    return out
}
isEven(12)
//VM18882:4 no is even

>>arrow function
let mul=(a,b)=> {return a*b}
undefined
mul(2,3)
//6

//generator function
function *looping(uservalue){
    for(i=0;i<uservalue;i++){
        yield(i)
    }
}
/*var d=looping(2)
undefined
d.next()
{value: 0, done: false}
d.next()
{value: 1, done: false}*/

var city=["NewYork","Boston","London","California"]
undefined
for(i=0;i<city.length;i++)
{
   console.log(city[i])
}
/*VM1825:3 NewYork
VM1825:3 Boston
VM1825:3 London
VM1825:3 California*/

var city=["NewYork","Boston","London","California"]
undefined
city.push("amsterdam")
//5
city.pop()
//"amsterdam"
city.unshift("Los Angeles")
//5
city.shift()
//"Los Angeles"
city.push("Washington")
//5
city.push("chicago")
//6
city.slice(0)
//(6) ["NewYork", "Boston", "London", "California", "Washington", "chicago"]
city.slice(1)
//(5) ["Boston", "London", "California", "Washington", "chicago"]
city.slice(1,3)
//(2) ["Boston", "London"]
var city = ["Helsinki", "London", "Newyork", "Delhi", "Boston", "Amsterdam", "Venice"]

undefined
city.splice(1,2)
//(2) ["London", "Newyork"]
city.splice(3,0,"New Delhi")
//[]
city
//(6) ["Helsinki", "Delhi", "Boston", "New Delhi", "Amsterdam", "Venice"]
Array.isArray(city)
//true
