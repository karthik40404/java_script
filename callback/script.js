// console.log('start');
// function display(callback){
//     console.log("1");
//     setTimeout(function(){
//         console.log('inside ');
//         callback()
        
//     },4000)
// }
// function display1(){
//     console.log('d2');
// }
// console.log('before');
// display(display1)
// console.log('end');

function display(){
    // console.log('display');
}
const a=setInterval(display,2000)

let count=10
let b=setInterval(function(){
    console.log(count);
    count--
    if(count==0){
        clearInterval(b)
        console.log('finish');
        
    }
},2000)