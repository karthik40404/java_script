
let d = [
    {id: '1', name: 'qwe', age: '10', email: 'qwe@gmail.com', course: 'bca', date: '24-2-2017'},
    {id: '2', name: 'asd', age: '20', email: 'asd@gmail.com', course: 'ba', date: '17-12-2007'},
    {id: '3', name: 'zxc', age: '30', email: 'zxc@gmail.com', course: 'bsc', date: '27-6-2024'}
];

let edit_id = '';
function display() {
    const t_var = document.querySelector('#stdtab tbody');
    t_var.innerHTML = '';

    d.forEach(element => {
        const t_row = document.createElement('tr');
        ['id', 'name', 'age', 'email', 'course', 'date'].forEach(field => {
            const td = document.createElement('td');
            td.textContent = element[field];
            t_row.appendChild(td);
        });

        const e_td = document.createElement('td');
        const e_btn = document.createElement('button');
        e_btn.textContent = 'Edit';
        e_btn.onclick = function() {
            edit_fm(element.id);
        };
        e_td.appendChild(e_btn);
        t_row.appendChild(e_td);

        const del_td = document.createElement('td');
        const del_btn = document.createElement('button');
        del_btn.textContent = 'Delete';
        del_btn.onclick = function() {
            delete_data(element.id);
        };
        del_td.appendChild(del_btn);
        t_row.appendChild(del_td);

        t_var.appendChild(t_row);
    });
}

function edit_fm(id) {
    document.getElementById('edit_form').style.display = 'block';
    document.getElementById('submit_form').style.display = 'none';

    const edit_data = d.find(user => user.id === id);
    if (edit_data) {
        
        document.getElementById('e_id').value = edit_data.id;
        document.getElementById('e_name').value = edit_data.name;
        document.getElementById('e_age').value = edit_data.age;
        document.getElementById('e_email').value = edit_data.email;
        document.getElementById('e_course').value = edit_data.course;
        document.getElementById('e_date').value = edit_data.date;
        
        edit_id = id;
    }
}


document.getElementById('submit_form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const id = document.getElementById('id').value
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const course = document.getElementById('course').value
    const date = document.getElementById('date').value

 
    if (d.find(s => s.id === id)) {
        alert('ID already exists');
        return;
    }
    d.push({id, name, age, email, course, date});
    document.getElementById('submit_form').reset();
    display();
});


document.getElementById('edit_form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const e_id = document.getElementById('e_id').value
    const e_name = document.getElementById('e_name').value
    const e_age = document.getElementById('e_age').value
    const e_email = document.getElementById('e_email').value
    const e_course = document.getElementById('e_course').value
    const e_date = document.getElementById('e_date').value

   
    if (e_id !== edit_id && d.find(user => user.id === e_id)) {
        alert('ID already exists');
        return;
    }
 
    d = d.map(user => {
        if (user.id == edit_id) {
            return {id: e_id, name: e_name, age: e_age, email: e_email, course: e_course, date: e_date};
        }
        return user;
    });

    
    document.getElementById('edit_form').style.display = 'none';
    document.getElementById('submit_form').style.display = 'block';

  
    document.getElementById('edit_form').reset();
    edit_id = '';

    
    display();
});


function delete_data(id){
  
    if(confirm('delete???')){  
        d = d.filter(user => user.id !== id);    
        display();  
    }
}


display();
