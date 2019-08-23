const users = JSON.parse(localStorage.getItem("users"));

if(users === null || users ===[] ){
    //document.getElementById('body').innerHTML = 'NO RECORDS';
}
else{

    let userHTML = '';
    for(let user of users){
        
        userHTML += 
        `<tr id ="${user.id}">                    
            <td>${user.firstname}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.phoneNumber}</td>
            <td>${(user.faculty) ? user.faculty : 'Not set'}</td>
            <td>${(user.department) ? user.department : 'Not set'}</td>
            <td>${(user.level) ? user.level : 'Not set'}</td>
            <td>${(user.matricnumber) ? user.matricnumber : 'Not set'}</td>
            <td>
                <button class="btn btn-danger deleteStudent">DELETE</button>
            </td>
        </tr>`
        
    }
    
    document.getElementById('body').innerHTML = userHTML;
    
}



document.body.addEventListener('click', deleteStudent);

function deleteStudent(e){
    if(e.target.className === "btn btn-danger deleteStudent"){
        const id = e.target.parentElement.parentElement.id;

        users.map((item, index)=>{
            if(item.id === parseInt(id)){
                // delete users[index];
                users.splice(users.indexOf(item), 1);
                window.location.reload(true);
               
            }
            localStorage.setItem("users", JSON.stringify(users));
        });
       
    } 
}

