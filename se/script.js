function sam(){
    a=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)
    sum=0
    for(i=a;i<=b;i++){
       sum+=i
    }
    console.log(sum);
    document.getElementById('h1').innerHTML = sum;
}
function sam1(){
    a=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)
    for(i=a;i<=b;i++){
       if(i%2!=0){
        console.log(i);
       }  
    } 
}           
function sam2(){
    a=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)
    while(a<=b){
        console.log(a);
        a++
    }   
}
function sam3(){
    a=1
    fact=1
    i=parseInt(document.getElementById("sno").value)
    do{
        fact*=a
        a++
    }
    while(a<=i) 
        console.log(fact); 
}