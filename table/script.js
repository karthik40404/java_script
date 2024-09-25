a=[{name:'luffy',age:'17',place:'east'},{name:'kaidou',age:'34',place:'oni village'},{name:'shanks',age:'30',place:'west'}]
function display() {
const t_var=document.querySelector('#ppltab tbody')
t_var.innerHTML=''
a.forEach(element => {
    const t_row=document.createElement('tr')

    const t_name=document.createElement('td')
    t_name.textContent=element.name
    t_row.appendChild(t_name)

    const t_age=document.createElement('td')
    t_age.textContent=element.age
    t_row.appendChild(t_age)

    const t_place=document.createElement('td')
    t_place.textContent=element.place
    t_row.appendChild(t_place)

    t_var.appendChild(t_row)
});

}
document.getElementById('submit_form').addEventListener('submit',function(event){
    event.preventDefault()
    const name=document.getElementById('name').value
    const age=parseInt(document.getElementById('age').value)
    const place=document.getElementById('place').value
    a.push({name:name,age:age,place:place})
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('place').value=''

display()
})


display()