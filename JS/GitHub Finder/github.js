class gitHub {
    constructor(){
        this.client_id = "efc89b2692f2d9e690c8",
        this.client_secret = "f1895866f5a623a39d338c82d3c715ce8fbf49e9"
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_ID}&
        client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        return{
            profileData
        }

    }
}

//export default github;