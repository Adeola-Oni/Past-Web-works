const emailsignin = document.getElementById("emailsignin");
const passwordsignin = document.getElementById("passwordsignin");

document.getElementById("submitsignin").addEventListener('click', signin);


function signin(e){
    const users= JSON.parse(localStorage.getItem("users"));
    if(users === null){
        errorMessage();
    } else{
        const userArr = users.filter((user)=>{
           let us = user.password === passwordsignin.value  && emailsignin.value.toLowerCase() === user.email;
           if(us===true){
               return us;
           }
        }
        );

        
        
        if(userArr.length !== 0){
            userArr.filter((user)=>{localStorage.setItem("auth", JSON.stringify(user));
            location.href = "studentdashboard.html";
            });
        }
        else{
            errorMessage();
        }                 
        
    }
    clearsignup();
    e.preventDefault();
}




function errorMessage(){
    let div = document.getElementById("message");
    const message = "Please input a correct Email and Password";

    div.appendChild(document.createTextNode(message));
    div.className = `alert form-control center bg-danger mess`;
        
    setTimeout(function(){
        document.querySelector(".alert").remove();
    }, 3000);

}

function clearsignup(){
    emailsignin.value="";
    passwordsignin.value="";
}


