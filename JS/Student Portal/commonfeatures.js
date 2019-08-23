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

