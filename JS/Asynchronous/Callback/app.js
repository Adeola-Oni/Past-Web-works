const posts = [
    {title:"The Ineffable", body:"this is post 1"},
    {title:"Oliver Junie", body:"this is post 2"}
];

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output= "";
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML= output;
    }, 1000);
}


createPost({title:"Junie Maine", body:"this is post 3"}, getPosts);
