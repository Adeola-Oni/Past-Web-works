document.body.addEventListener("keydown", checker);
let audio = document.getElementById('audio');
audio:{
    src:"";
}

const keyCodes = new Map([[65, "sounds/clap.wav"], [83, "sounds/hihat.wav"], [68 , "sounds/kick.wav"], 
    [70, "sounds/openhat.wav"], [71, "sounds/boom.wav" ], [72 , "sounds/ride.wav"], [74, "sounds/snare.wav"],
    [75, "sounds/tom.wav"], [76 , "sounds/tink.wav"]
])

const effects = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];

function checker(e){
    let keys = keyCodes.entries();
    for(var [key, value] of keys){
        for(var x of effects){
            let box = document.getElementById(x)
            let boxLetter = box.firstElementChild.innerHTML;
            if((e.keyCode === key) && (boxLetter.toLowerCase() === e.key.toLowerCase())){
                playSound(value);
                box.className="effect"
                setTimeout(
                    function addclassname(){
                        box.className = "button"
                    }, 200
                );
            } 
        }
     }   
}

function playSound(soundname){
    audio.src = soundname;
    var sound = document.getElementById("audio");
    sound.play();
}





