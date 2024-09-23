function valid(){
    document.getElementById("phno_eror").innerHTML=""
    name=document.getElementById('name').value
    phno=document.getElementById('phno').value
    email=document.getElementById('email').value
    console.log(name,phno,email)
    if (phno.length!=10){
        document.getElementById("phno_eror").innerHTML="invalid"
    }
    if (! email.match('@gmail.com$')){
        document.getElementById("email").innerHTML="invalid"
    }
}