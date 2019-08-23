const http = new easyHTTP;

http.get('http://jsonplaceholder.typicode.com/posts', function(err, response){
    if(err){
        console.log(err)
    }else{
        console.log(JSON.parse(response));
    }
});
