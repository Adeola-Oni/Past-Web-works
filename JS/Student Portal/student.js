const staticFirstName = document.getElementById("staticFirstName");
const staticLastName = document.getElementById("staticLastName");
const staticEmail = document.getElementById("staticEmail");
const staticPhoneNumber = document.getElementById("staticPhoneNumber");
const matricnumber = document.getElementById("matricnumber");
const faculty = document.getElementById("faculty");
const department = document.getElementById("department");
const levels = document.getElementById("levels");


staticFirstName.value = user.firstname;
staticLastName.value = user.lastName;
staticEmail.value = user.email;
staticPhoneNumber.value = user.phoneNumber;
matricnumber.value = user.matNo;
matricnumber.readOnly=true;





if(user.department !== undefined && user.faculty !== undefined && user.level !== undefined){
    // matricnumber.value = user.matricnumber;
    faculty.value = user.faculty;
    department.value = user.department;
    levels.value = user.level;
    matricnumber.value = user.matNo;

    // matricnumber.readOnly = true;
    faculty.readOnly = true;
    department.readOnly = true;
    document.getElementById('levels').disabled = true;


    document.getElementById('saveandedit').innerHTML = `
            <input type="submit" class="btn btn-danger edit form-control" id="edit" value="Edit">
        `;
}


document.body.addEventListener("click", save);

function save(e){
    if(e.target.className === "form-control btn btn-success save"){
        if(user.faculty===undefined || user.department=== undefined 
        || user.level===undefined){
            //const matricno = matricnumber.value;
            const fac = faculty.value;
            const dept  = department.value;
            const lev  = levels.value;
        
            //user.matNo = matricno;
            user.faculty = fac;
            user.department = dept;
            user.level = lev;
    
            //matricno.readOnly = true;
            fac.readOnly = true;
            dept.readOnly = true;
            lev.disabled = true;

            
            document.getElementById('saveandedit').innerHTML = `
            <input type="submit" class="btn btn-danger edit form-control" id="edit" value="Edit">
            `;

            const users = JSON.parse(localStorage.getItem('users'));
            
            users.map(olduser=>{
                if(olduser.email === user.email){
                    users.splice(users.indexOf(olduser), 1);
                    users.push(user);
                    localStorage.setItem("auth", JSON.stringify(user))
                    localStorage.setItem('users', JSON.stringify(users));
                } 
            });
        }
        else{
            //console.log(matricnumber.value);
            user.firstname = staticFirstName.value;
            user.lastName = staticLastName.value;
            user.email = staticEmail.value;
            user.phoneNumber = staticPhoneNumber.value;
            user.faculty = faculty.value;
            user.department = department.value;
            //user.matNo = matricnumber.value;
            user.level = levels.value;
            


            console.log(user.matNo);
            document.getElementById('saveandedit').innerHTML = `
            <input type="submit" class="btn btn-danger edit form-control" id="edit" value="Edit">
            `;

            const users = JSON.parse(localStorage.getItem('users'));
            
            users.map(olduser=>{
                if(olduser.id = user.id){
                    users.splice(users.indexOf(olduser), 1);
                    users.push(user);
                    localStorage.setItem("auth", JSON.stringify(user))
                    localStorage.setItem('users', JSON.stringify(users));
                } 
            });
        }
    
    }

    e.preventDefault();

}


document.getElementById("logout").addEventListener('click', logout);

function logout(e){
    location.href = "signin.html"
    e.preventDefault();
    localStorage.removeItem("auth")
}

document.body.addEventListener("click", edit);

function edit(e){
    const place = e.target.className;
    if(place === "btn btn-danger edit form-control"){
        //console.log(user);
        staticFirstName.readOnly= false;
        staticLastName.readOnly= false;
        staticEmail.readOnly= false;
        staticPhoneNumber.readOnly= false;
       // matricnumber.readOnly = false;
        faculty.readOnly = false;
        department.readOnly = false;
        levels.disabled = false;

        document.getElementById('saveandedit').innerHTML = `
            <input type="submit" class="form-control btn btn-success save" id="save" value="Save">
        `;
    }
}
