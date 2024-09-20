function sam1(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    console.log(a)
    console.log(b)
    document.getElementById("h1").innerHTML=a+b
}
function sam2(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    console.log(a)
    console.log(b)
    document.getElementById("h1").innerHTML=a-b
}
function sam3(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    console.log(a)
    console.log(b)
    document.getElementById("h1").innerHTML=a*b
}
function sam4(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    console.log(a)
    console.log(b)
    document.getElementById("h1").innerHTML=a/b
}
function sam5(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    console.log(a)
    console.log(b)
    document.getElementById("h1").innerHTML=a%b
}
function sam6(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    if(a>b){
        document.getElementById("h1").innerHTML=a
    }
    else{
        document.getElementById("h1").innerHTML=b
    }
}
function sam7(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    c=parseInt(document.getElementById('tno').value)
    if(a>b && a>c){
        document.getElementById("h1").innerHTML=a
    }
    else if (b>c && b>a) {
        document.getElementById("h1").innerHTML=b  
    }
    else{
        document.getElementById("h1").innerHTML=c
    }
}
// function sam7() {
//     var a = parseInt(document.getElementById('fno').value);
//     var b = parseInt(document.getElementById('sno').value);
//     var c = parseInt(document.getElementById('tno').value);
    
//     var maxNum = Math.max(a, b, c);
//     document.getElementById("h1").innerHTML = maxNum;
// }

function sam8(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    c=parseInt(document.getElementById('tno').value)
    d=parseInt(document.getElementById('frno').value)
    if(a>b && a>c && a>d){
        document.getElementById("h1").innerHTML=a
    }
    else if (b>c && b>a && b>d) {
        document.getElementById("h1").innerHTML=b  
    }
    else if (c>a && c>b && c>d) {
        document.getElementById("h1").innerHTML=c 
    }
    else{
        document.getElementById("h1").innerHTML=d
    }
}