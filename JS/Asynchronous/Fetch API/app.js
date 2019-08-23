document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);



function getText(){
    fetch('test.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            document.getElementById('output').innerHTML=data;
        })
        .catch(function(err){
            document.getElementById('output').innerHTML=err;
        })
}

function getJSON(){
    fetch('posts.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let posts = "";
            data.forEach(function(post){
                posts += `<li>${post.name}</li>`;
                console.log(posts);
            })
            document.getElementById('output').innerHTML=posts;

        })
        .catch(function(err){
            document.getElementById('output').innerHTML=err;
        })
}

function getAPI(){
    fetch('https://api.github.com/users')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            let posts = "";
            data.forEach(function(post){
                posts += `<li>URL: ${post.avatar_url} </li>`;
                // console.log(posts);
            })
            document.getElementById('output').innerHTML=posts;

        })
        // .catch(function(err){
        //     document.getElementById('output').innerHTML=err;
        // })
}