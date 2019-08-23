const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phonenumber");
const password = document.getElementById("password");

firstName.addEventListener('blur', validatefirstName);
lastName.addEventListener('blur', validatelastName);
email.addEventListener('blur', validateEmail);
phoneNumber.addEventListener('blur', validatePhoneNumber);
password.addEventListener('blur', validatePassword);

function validatefirstName(){
    if(firstName.value===""){
        firstName.classList.add("is-invalid");
    }else{
        firstName.classList.remove("is-invalid");
    }
}

function validatelastName(){
    if(lastName.value===""){
        lastName.classList.add("is-invalid")
    }else{
        lastName.classList.remove("is-invalid")
    }
}

function validateEmail(){
    if(email.value===""){
        email.classList.add("is-invalid")
    }else{
        email.classList.remove("is-invalid")
    }
}

function validatePhoneNumber(){
    if(phoneNumber.value==="" || phoneNumber.value.length!==11){
        phoneNumber.classList.add("is-invalid")
    }else{
        phoneNumber.classList.remove("is-invalid")
    }
}

function validatePassword(){
    if(password.value ==="" || password.value.length < 6){
        password.classList.add("is-invalid")
    }else{
        password.classList.remove("is-invalid")
    }
}
