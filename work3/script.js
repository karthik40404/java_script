fetch('https://dummyjson.com/products').then(res => res.json())
.then(Data=>{
    Data.products.forEach(element => {
        const row = document.querySelector('.row')
        const col = document.createElement('div')

        col.classList.add('col-lg-4')


        col.innerHTML=`<div class='card'>
        <img class='card-img-top' src='${element.thumbnail}' width=100%> 
        <div class='card-body'>
        <h3 class='card-title'>${element.title}</h3>
        <h6 class='card-text'>${element.description}</h6>
        <a href='#' class='btn btn-primary see-more-btn' data-id='${element.id}' data-bs-toggle='modal' data-bs-target='#productmodal'>see more</a>
        </div>
        </div>`

        row.appendChild(col)  

    });

    document.querySelectorAll('.see-more-btn').forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const productid= e.target.getAttribute('data-id');
            const product = Data.products.find(p=>p.id==productid)

            if (product) {
                document.getElementById('modal-image').src = product.thumbnail
                document.getElementById('modal-title').textContent = product.title
                document.getElementById('modal-desc').textContent = product.description
                document.getElementById('modal-price').textContent = `Price:$${product.price}`
            }
        })
    })
.catch(error=>{
    console.error('error fetching in data:',error);
    
})
});