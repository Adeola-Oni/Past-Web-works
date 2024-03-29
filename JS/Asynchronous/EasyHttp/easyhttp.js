function easyHTTP(){
    this.http = new XMLHttpRequest();
}

//GET
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, self.http.responseText); 
        }else{
            callback("Error "+ self.http.status);
        }
    };

    this.http.send();
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