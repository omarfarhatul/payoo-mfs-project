// add money to the account
/* 
s-1: add event handler
s-2: get money to be added to the account balance and get pin number
s-3: verify pin number
*/

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form supmit
    event.preventDefault();

    // step-2: get money to be added to the account
    const addMoneyInput=document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput= document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step-3: verify pin number
    // wrong way to validate pin num
    if(pinNumberInput==='1234'){
        console.log('adding money to your account');

        // step-4: get the current balance
        const balance=document.getElementById('account-balance').innerText;
        console.log(balance);

        // step-5: add addMoneyInput with balance
        const newBalance=balance+addMoneyInput;
        
    }
    else{
        alert('Invalid');
    }
});