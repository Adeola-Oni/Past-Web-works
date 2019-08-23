import characters_json from '../data/characters.json';

let characters=(state=characters_json, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default characters;