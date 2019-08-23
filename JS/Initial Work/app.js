localStorage.setItem("name", "john");
localStorage.setItem("school", "UNILAG");

document.querySelector("form").addEventListener("submit", function(a){
    const task = document.getElementById('task').value;
    localStorage.setItem('task', task);
    alert('Task Saved');

    let tasks;
    
    if((document.getitem('tasks')) === null){
        tasks =[];
    }else{
        tasks = localStorage.getItem('tasks');
    }

    
    e.preventDefault();

});
