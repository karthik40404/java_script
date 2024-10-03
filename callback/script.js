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

// function display(){
// }
// const a=setInterval(display,2000)

// let count=10
// let b=setInterval(function(){
//     console.log(count);
//     count--
//     if(count==0){
//         clearInterval(b)
//         console.log('finish');
        
//     }
// },2000)

// function display(){
//     const main=document.querySelector('.main')
//     const div=document.createElement('div')
//     let count=10
//     let c=setInterval(function(){
//     div.innerHTML=`<h2>00:${count}</h2>`
//     count--
//     if(count==0){
//         clearInterval(c)
//         div.innerHTML=`<h2 style='color: red'>finish</h2>`
//         alert('BOOM')
//     }
//     },1000)  
//      main.appendChild(div)
// }
// display()

function demo(){
    const main=document.querySelector('.main')
    const div=document.createElement('div')
    let c1=3
    let c2=2
    let c=setInterval(function(){
        div.innerHTML=`<h2>${c1}:0${c2}</h2>`
        c2--
        if(c2==-1){
            c1--
            c2=2
        }
        if(c1==0){
            clearInterval(c)
            div.innerHTML=`<h2>complete</h2>`
        }
        
    },1000);
    main.appendChild(div)
    }
    demo()