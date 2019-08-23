const data = [
    {
        name: "John",
        age: 20,
        gender: "Male",
        lookingfor: "A God Fearing woman ",
        location: "Suxxex, London",
        image: 'img/IMG_1003.JPG'
    },

    {
        name: "Jane",
        age: 20,
        gender: "Female",
        lookingfor: "A God Fearing man guy",
        location: "London",
        image: 'img/IMG_0676.PNG'
    },

    {
        name: "John",
        age: 20,
        gender: "Male",
        lookingfor: "A God Fearing woman ",
        location: "Suxxex, London",
        image: 'img/IMG_0788.JPG'   
        
    }
]

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" style="width: 100%;">`;
  } else {
    // No more profiles
    window.location.reload();
  }

}



function profileIterator(profiles){
    let nextIndex = 0;

    return{
        next: function(){
            return nextIndex < profiles.length ?
                {value :profiles[nextIndex++], done:false}:
                {done: true}
            
        }
    }
}