// fetch('https://dummyjson.com/products').then(res => res.json())
// .then(Data=>{
//     Data.products.forEach(element => {
//         console.log(element.title);
        
//     });
// });

// fetch('https://dummyjson.com/products').then(res => res.json())
// .then(Data=>{
//     Data.products.forEach(element => {
//         const row = document.querySelector('.row')
//         const col = document.createElement('div')
//         col.classList.add('col-lg-4')
//         col.innerHTML=`<img src='${element.images}' width=100%> 
//         <h3>${element.title}</h3>
//         <h6>${element.price}</h3>`
//         row.appendChild(col)        
//     });
// });

// const main = async (url) =>{    //using another method async 
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         return[data,null]
//     } catch (error) {
//         return[null,error]        
//     }
// }

// const fetchdata =async () =>{
//     const[response,error] =await main('https://dummyjson.com/products')
//     if (response) {
//         console.log(response);
        
//     }
//     else{
//         console.log('error');
//     }
// }
// fetchdata()
