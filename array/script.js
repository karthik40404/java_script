l=[1,2,3,4,5,6]
console.log(l);
console.log(l[2]);
console.log(l.length);
a= l.toString()
console.log(typeof a);
l.pop()
console.log(l);
l.push(20)
console.log(l);
l[12]=100
console.log(l);
l.shift()
console.log(l);
l.unshift(10)
console.log(l);
b=[1,2,3,4,5]
for (let i of b) {
    console.log(i);
    if(i==3){
        break
    }
}

