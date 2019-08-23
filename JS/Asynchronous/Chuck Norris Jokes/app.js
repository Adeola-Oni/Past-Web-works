document.getElementById('get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const xhr = new XMLHttpRequest();
    const num = document.getElementById('number').value;

    xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`, true);
    xhr.onload = function(){
        if(this.status === 200){
            const Alljokes = JSON.parse(this.responseText);
            let jokes = "";
            if(Alljokes.type == 'success'){
                console.log( Alljokes.value);
                Alljokes.value.forEach(function(joke){
                    jokes += `<li>${joke.joke}</li>`
                });
                document.querySelector(".jokes").innerHTML=jokes;
            }
            else{
                const error = `<li>Sorry something went wrong</li>`;
                document.querySelector(".jokes").innerHTML = error;
            }
            
        }
    }
    xhr.send();
   
    e.preventDefault()
}
