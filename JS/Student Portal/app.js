
document.getElementById("submitsignup").addEventListener('click', signup);

function signup(e){
    if(firstName.value===""||lastName.value===""||email.value===""||phoneNumber.value===""||password.value==="" ||
    firstName.classList.contains("is-invalid") || lastName.classList.contains("is-invalid") || email.classList.contains("is-invalid") ||
    phoneNumber.classList.contains("is-invalid") || password.classList.contains("is-invalid")){

        firstName.classList.add("is-invalid");
        lastName.classList.add("is-invalid");
        email.classList.add("is-invalid");
        phoneNumber.classList.add("is-invalid");
        password.classList.add("is-invalid");
    
    }
    else {
        const user = { firstname : firstName.value, 
                        lastName : lastName.value, 
                        email : (email.value.toLowerCase()), 
                        phoneNumber: phoneNumber.value, 
                        password: password.value
                    };

        let users;
        if(localStorage.getItem("users")===null){
            users=[];

        }else{
            users = JSON.parse(localStorage.getItem("users"));
        }


        if(users.length === 0){
            console.log('it was empty');
            user.id = new Date().getTime();
            user.matNo = '140-805-' + (users.length + 1);
        
            console.log(user);
            users.push(user);
            localStorage.setItem('users',JSON.stringify(users));
            
            clear();
            successMessage();
        } else {
            let emailExisted = false;
            for(let x of users){
                if(x.email.toLowerCase() === user.email){
                    emailExisted = true;
                }
            }

            if(emailExisted){
                emailexists();
            }else{
                
                user.id = new Date().getTime();
                    user.matNo = '140-805-' + (users.length + 1);
                    users.push(user);
                    localStorage.setItem('users',JSON.stringify(users));
                    
                    clear();
                    successMessage();
            }
        }

        
       
    } 
    
    //window.location.reload(true);
    e.preventDefault();
}


function clear(){
    firstName.value="";
    lastName.value="";
    email.value="";
    phoneNumber.value="";
    password.value="";
}



function successMessage(){
    const div = document.querySelector(".message");
    const message = "You have been successfully registered";

    div.appendChild(document.createTextNode(message));
    div.className = `alert form-control center bg-success mess`;
        
    
    setTimeout(function(){
        document.querySelector(".alert").remove();
    }, 3000);

}

function emailexists(){
    //console.log("exists");
    const div = document.querySelector(".message");
    const message = "This Email exists. Please enter another valid email.";

    div.appendChild(document.createTextNode(message));
    div.className = `alert form-control center bg-danger mess`;
        
    
    setTimeout(function(){
        document.querySelector(".alert").remove();
    }, 5000);

 }




