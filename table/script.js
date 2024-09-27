a=[{id:'1', name:'luffy',age:'17',place:'east'},{id:'2',name:'kaidou',age:'34',place:'oni village'},{id:'3',name:'shanks',age:'30',place:'west'}]
function display() {
const t_var=document.querySelector('#ppltab tbody')
t_var.innerHTML=''
a.forEach(element => {
    const t_row=document.createElement('tr')

    const t_id=document.createElement('td')
    t_id.textContent=element.id
    t_row.appendChild(t_id)

    const t_name=document.createElement('td')
    t_name.textContent=element.name
    t_row.appendChild(t_name)

    const t_age=document.createElement('td')
    t_age.textContent=element.age
    t_row.appendChild(t_age)

    const t_place=document.createElement('td')
    t_place.textContent=element.place
    t_row.appendChild(t_place)

    const edit_td=document.createElement('td')
    const edit_btn=document.createElement('button')
    edit_btn.textContent='edit'
    edit_btn.onclick=function(){
        edit_fm(element.id)
    }
    edit_td.appendChild(edit_btn)
    t_row.appendChild(edit_td)

  
    const del_td=document.createElement('td')
    const del_btn=document.createElement('button')
    del_btn.textContent='delete'
    del_btn.onclick=function(){
        delete_data(element.id)
    }
    del_td.appendChild(del_btn)
    t_row.appendChild(del_td)

    t_var.appendChild(t_row)


});

}
document.getElementById('submit_form').addEventListener('submit',function(event){
    event.preventDefault()
    const id=document.getElementById('id').value
    const name=document.getElementById('name').value
    const age=document.getElementById('age').value
    const place=document.getElementById('place').value
    a.push({id:id ,name:name,age:age,place:place})
    document.getElementById('id').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('place').value=''

display()
})

let edit_id=''
function edit_fm(id){
    document.getElementById('edit_form').style.display='block'
    document.getElementById('submit_form').style.display='none'

    const edit_data=a.find(user=>user.id==id)

    document.getElementById('e_id').value=edit_data.id
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    document.getElementById('e_place').value=edit_data.place
    
    edit_id = id
}

document.getElementById('edit_form').addEventListener('submit',function(event){
    event.preventDefault()
    const e_id=document.getElementById('e_id').value
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    const e_place=document.getElementById('e_place').value
    // console.log(e_id,e_name,e_age,e_place);
    a=a.map(user=>{
        if(user.id==edit_id){
            return{id:e_id,name:e_name,age:e_age,place:e_place}
        }
        return user
    })
    document.getElementById('submit_form').style.display='block'
    document.getElementById('edit_form').style.display='none'

    document.getElementById('e_id').value = ''
    document.getElementById('e_name').value = ''
    document.getElementById('e_age').value = ''
    document.getElementById('e_place').value = ''

    display()

})

 function delete_data(id){
        console.log(id);    
        a=a.filter(user=>{
            if(user.id!=id){
                return user
            }
        })
        alert('delete')     
        display()  
     }
display()