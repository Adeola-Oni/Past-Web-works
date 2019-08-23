function easyHTTP(){
    this.http = new XMLHttpRequest();
}


class easyHTTP{
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err=> reject(err))
        })
    }

    
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {'Content' : 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err=> reject(err))
        })
    }
}

//POST
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    thsi.http.setRequestHeader("Content", "application/json");
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText); 
        
    };

    this.http.send(JSON.stringify(data));
}
//PUT

//DELETE