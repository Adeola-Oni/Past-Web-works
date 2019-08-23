//let github = require('./github.js')
const github = new gitHub;
    
const ui = new UI;

const searchUser = document.getElementById("searchUser");
searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;
    if(userText!==""){
        github.getUser(userText)
        .then(data=>{
            if(data.profileData.message === "Not Found"){
                document.getElementById('profile').innerHTML=data.profileData.message;
            }else{
                ui.showProfile(data.profileData)
            }
            console.log(data)
        })
    }
});