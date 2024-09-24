a={name:'naruto',age:'14',place:'leaf village'}
// console.log(a);
// console.log(a.place);
// a.place='hidden leaf village'
// delete a.age
// console.log(a);

for(i in a){
    if (a.name=='naruto')
        console.log(i,a[i]);       
}

