document.querySelector(".errorpage").addEventListener("click", goTosignUpPage);

function goTosignUpPage(e){
    location.href = "signin.html";
    //https://wesbos.com/new-es6-string-methods/
    e.preventDefault();
}