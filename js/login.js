// step-1: set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); // -->vajal for beginners
    console.log('login button clicked');

    // step-3: get the phone number
    const phoneNumber=document.getElementById('phone-number').value;
    console.log(phoneNumber);
});