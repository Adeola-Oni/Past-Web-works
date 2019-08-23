const secondHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const updateClock = ()=>{
    let today = new Date();

    const seconds = today.getSeconds();
    const newDegreeSec = ((seconds/60)*360) +90;
    secondHand.style.transform= `rotate(${newDegreeSec}deg)`;

    const minutes = today.getMinutes();
    const newDegreeMin = ((minutes/60)*360) + 90;
    minsHand.style.transform= `rotate(${newDegreeMin}deg)`;

    const hour = today.getHours();
    const newDegreeHour = (((hour/12)*360)) + 90;
    hourHand.style.transform= `rotate(${newDegreeHour}deg)`;
    setTimeout(updateClock,1000);  
   
}

       
   
