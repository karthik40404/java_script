function display(){
let a='welcome'
console.log(a);

const main=document.querySelector('.main')
const div=document.createElement('div')
div.innerHTML=`<h2 style='color: green'>${a}</h2>`
main.appendChild(div)
}
display()