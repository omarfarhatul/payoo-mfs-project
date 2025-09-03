document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out button clicked.');

    const cashOut=document.getElementById('input-cash-out').value;
    const pinNumber=document.getElementById('input-cashout-pin-number').value;
    console.log(cashOut, pinNumber);
    // wrong way to verify pin number
    if(pinNumber=== '1234'){
        const balance=document.getElementById('account-balance').innerText;
        console.log(balance);
    }
    else{
        alert('Invalid amount or pin. Please try again later.');
    }
});