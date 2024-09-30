// d=[{id:'1',name:'qwe',age:'10',email:'qwe@gmail.com',course:'bca',date:'24-2-2017'},{id:'2',name:'asd',age:'20',email:'asd@gmail.com',course:'ba',date:'17-12-2007'},{id:'3',name:'zxc',age:'30',email:'zxc@gmail.com',course:'bsc',date:'27-6-2024'}]
// function diaplay(){
//     const t_var=document.querySelector('#stdtab tbody')
//     t_var.innerHTML=''
//     d.forEach(element => {
//         const t_row=document.createElement('tr')

//         const t_id=document.createElement('td')
//         t_id.textContent=element.id
//         t_row.appendChild(t_id)

//         const t_name=document.createElement('td')
//         t_name.textContent=element.name
//         t_row.appendChild(t_name)

//         const t_age=document.createElement('td')
//         t_age.textContent=element.age
//         t_row.appendChild(t_age)

//         const t_email=document.createElement('td')
//         t_email.textContent=element.email
//         t_row.appendChild(t_email)

//         const t_course=document.createElement('td')
//         t_course.textContent=element.course
//         t_row.appendChild(t_course)

//         const t_date=document.createElement('td')
//         t_date.textContent=element.date
//         t_row.appendChild(t_date)

//         const e_td=document.createElement('td')
//         const e_btn=document.createElement('button')
//         e_btn.textContent='edit'
//         e_btn.onclick=function(){
//             edit_fm(element.id)
//         }
//         e_td.appendChild(e_btn)
//         t_row.appendChild(e_td)

//         t_var.appendChild(t_row)
//     });
    
// }
// document.getElementById('submit_form').addEventListener('submit',function(event){
//     event.preventDefault()
//     const id=document.getElementById('id').value
//     const name=document.getElementById('name').value
//     const age=document.getElementById('age').value
//     const email=document.getElementById('email').value
//     const course=document.getElementById('course').value
//     const date=document.getElementById('date').value
//     d.push({id:id ,name:name,age:age,email:email,course:course,date:date})
//     document.getElementById('id').value=''
//     document.getElementById('name').value=''
//     document.getElementById('age').value=''
//     document.getElementById('email').value=''
//     document.getElementById('course').value=''
//     document.getElementById('date').value=''
//     // console.log();
    

// display()
// })

let d = [
    {id: '1', name: 'qwe', age: '10', email: 'qwe@gmail.com', course: 'bca', date: '24-2-2017'},
    {id: '2', name: 'asd', age: '20', email: 'asd@gmail.com', course: 'ba', date: '17-12-2007'},
    {id: '3', name: 'zxc', age: '30', email: 'zxc@gmail.com', course: 'bsc', date: '27-6-2024'}
  ];
  
  let editMode = false;
  let editId = null;
  
  // Display the table content
  function display() {
      const t_var = document.querySelector('#stdtab tbody');
      t_var.innerHTML = '';
      d.forEach(element => {
          const t_row = document.createElement('tr');
  
          // Create table data for each field
          ['id', 'name', 'age', 'email', 'course', 'date'].forEach(field => {
              const td = document.createElement('td');
              td.textContent = element[field];
              t_row.appendChild(td);
          });
  
          // Edit button
          const e_td = document.createElement('td');
          const e_btn = document.createElement('button');
          e_btn.textContent = 'edit';
          e_btn.onclick = function() {
              edit_fm(element.id);
          };
          e_td.appendChild(e_btn);
          t_row.appendChild(e_td);
  
          t_var.appendChild(t_row);
      });
  }
  
  // Edit form function
  function edit_fm(id) {
      const student = d.find(s => s.id === id);
      if (student) {
          document.getElementById('id').value = student.id;
          document.getElementById('name').value = student.name;
          document.getElementById('age').value = student.age;
          document.getElementById('email').value = student.email;
          document.getElementById('course').value = student.course;
          document.getElementById('date').value = student.date;
  
          editMode = true;
          editId = id; // Save the ID for editing
      }
  }
  
  // Form submission
  document.getElementById('submit_form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const id = document.getElementById('id').value;
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const email = document.getElementById('email').value;
      const course = document.getElementById('course').value;
      const date = document.getElementById('date').value;
  
      // If editing, update the existing student
      if (editMode) {
          const studentIndex = d.findIndex(s => s.id === editId);
          if (studentIndex !== -1) {
              d[studentIndex] = {id, name, age, email, course, date};
          }
          editMode = false;
          editId = null;
      } else {
          // Add new student (ensure no duplicate ID)
          if (d.find(s => s.id === id)) {
              alert('ID already exists');
          } else {
              d.push({id, name, age, email, course, date});
          }
      }
  
      // Reset form fields
      document.getElementById('id').value = '';
      document.getElementById('name').value = '';
      document.getElementById('age').value = '';
      document.getElementById('email').value = '';
      document.getElementById('course').value = '';
      document.getElementById('date').value = '';
  
      display(); // Refresh the table
  });
  
  // Initialize the table
  display();
  