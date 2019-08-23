document.getElementById("loan-form").addEventListener('submit', calculateResults);
//console.log("lol");
function calculateResults(e){
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayment = parseFloat(years.value) *12;

    const cal = Math.pow( 1 + calculatedInterest, calculatedPayment);
    const monthly = (principal*cal*calculatedInterest)/(cal-1);
  

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment)-principal).toFixed(2);
    }
    else{
        showError("please enter a valid input")
    }
    e.preventDefault();
}


// function showError(error){
//     const errordiv = document.createElement('div');

//     const card = document.querySelector('.card');
//     const heading = document.querySelector('.heading');
//     errordiv.className =" alert alert-danger";
//     errordiv.appendChild(document.createTextNode(error));
// }

function showError(error){
    // Create a div
    const errorDiv = document.createElement('div');
  
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Add class
    errorDiv.className = 'alert alert-danger';
  
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
  
  // Clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }