document.getElementById('spacing').addEventListener('change', addSpace);
document.getElementById('blur').addEventListener('change', addBlur);
document.getElementById('base').addEventListener('change', changeBorder);
document.getElementById('img').addEventListener('change', changeImage);

window.addEventListener('load', getBorderColor);
const image = document.getElementById('image');
const space = document.getElementById('spacing');
let baseColor = document.getElementById('base');
let val = baseColor.value;



function getBorderColor(){
    image.style.outline = `${space.value}px solid ${val}`;  
}

function addSpace(e){
    let border = e.target.value;
    image.style.outline = `${space.value}px solid ${val}`;
    image.style.margin = `${space.value}px`;
}

function addBlur(e){
    let blurValue = e.target.value;
    let newBlur = blurValue/10;

    if(blurValue === e.target.min){
        image.style.filter = `blur(${0})`
    }
    else{
        image.style.filter = `blur(${newBlur}px)`
    }
}

function changeBorder(e){
    let borderColor = e.target.value;
    image.style.outline = `${space.value}px solid ${borderColor}`;
    val = borderColor;
}

function changeImage(e){
    const type = e.target.files[0].type ;
    console.log(e.target.files[0].size);
    if( type === 'image/png' || type === 'image/jpeg' ||  type === 'image/jpg' ){
        if(e.target.files && e.target.files[0] ){
            if(e.target.files[0].size < 1000000){
                let reader = new FileReader();
                reader.onload= function(e){
                    document.getElementById('image').src = e.target.result;
                } 
                reader.readAsDataURL(e.target.files[0])
            }
            else{
                document.getElementById('img').value='';
                alert('Please pick an image with size less than 100kb');
            }
                
        }
        
    }
    else{
        alert('Please pick an image')
    }
    
}