// class name {
//     constructor(parameters) {
        
//     }
// }

// class Bike {
//     constructor(name,year) {
//         this.name=name
//         this.year=year
//     }
//     display(){
//         console.log(this.name,this.year);
        
//     }
// }

// enfield= new Bike('enfield',2002)
// enfield1= new Bike('enfield1',2003)
// enfield.display()
// enfield1.display()

d={f_name:'karthi',l_name:'senpai', full_name:function () {
    return this.f_name+this.l_name
}}
console.log(d.full_name());
