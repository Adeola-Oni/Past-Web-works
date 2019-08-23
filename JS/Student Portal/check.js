const user = JSON.parse(localStorage.getItem("auth"));
if(user === null || user === undefined){
    location.href ="errorpage.html"
}