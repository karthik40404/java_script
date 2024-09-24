a=[{name:'luffy',age:'17',place:'east'},{name:'kaidou',age:'34',place:'oni village'},{name:'shanks',age:'30',place:'west'}]
b=[]
c=[]
for( let i of a){
    if(i.age>=30){
        b.push(i.name);
    }   
    else{
        c.push(i.name);
    }  
}
console.log(b);
console.log(c);
