class UI{
    constructor (){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML=`
        <div class="row ">
            <div class="card" style="width:35%; padding: 1%; margin:2%">
                <h3> ${user.name}</h3>
                <img class="card-img-top" src='${user.avatar_url}' style="padding: 5%">
                <div class="card-body">
                    <p class="card-text">BIOGRAPHY:   ${user.bio}</p>
                </div>
            </div>

            <div class="card" style="width:55%;  padding: 1%; margin:2% ;padding-top: 5%">
                <div class="card-body "> 
                    <div>  
                        <span class="badge badge-primary" style="padding: 2%; margin:1% ;">WEBSITE:   ${user.url}</span>
                        <span class="badge badge-success" style="padding: 2%; margin:1% ;">PUBLIC_REPOS:   ${user.public_repos}</span>
                        <span class="badge badge-primary" style="padding: 2%; margin:1% ;">PUBLIC_GISTRS:  ${user.public_gists}</span>
                        <br><br>
                    </div>  
                    <ul class="list-group">
                        <li class="list-group-item">COMPANY:  ${user.company}</li>
                        <li class="list-group-item">BLOG:   ${user.blog}</li>
                        <li class="list-group-item">FOLLOWING:   ${user.following}</li>
                        <li class="list-group-item">LOCATION:  ${user.location}</li>
                        <li class="list-group-item">FOLLOWERS:   ${user.followers}</li>
                    </ul>
                </div>
            </div>
  
        </div>
        `
    }
}