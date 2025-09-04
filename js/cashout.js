/* document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out button clicked.');

    const cashOut=document.getElementById('input-cash-out').value;
    const cashOutNumber=parseFloat(cashOut);

    const pinNumber=document.getElementById('input-cashout-pin-number').value;
    console.log(cashOut, pinNumber);
    // wrong way to verify pin number

    if(pinNumber=== '1234'){
        const balance=document.getElementById('account-balance').innerText;
        const balanceNumber=parseFloat(balance);

        // reduce the balance
        const newBalance=balanceNumber-cashOutNumber;
        // update the ui
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('Invalid amount or pin. Please try again later.');
    }
}); */



document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut=getInputFieldValueById('input-cash-out');
    const pinNumber=getInputFieldValueById('input-cashout-pin-number');

    // validation check
    if(isNaN(cashOut)){
        alert('Failed to Cash Out...');
        return;
    }

    // console.log(cashOut, pinNumber);
    if(pinNumber===1234){
        const balance=getTextFieldValueById('account-balance');

        if(cashOut > balance){
            alert('You do not have enough money to Cash Out!');
            return;
        }

        const newBalance=balance-cashOut;
        document.getElementById('account-balance').innerText=newBalance;

        // add to transaction history
        const div=document.createElement('div');
        div.classList.add('bg-yellow-200');

        div.innerHTML=`
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} withdraw. New Balance ${newBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Invalied amount or pin number! Please try again later.');
    }
});