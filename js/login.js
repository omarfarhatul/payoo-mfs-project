// // step-1: set event handler
// document.getElementById('btn-login').addEventListener('click', function(event){
//     // step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault(); // -->vajal for beginners
//     console.log('login button clicked');

//     // step-3: get the phone number & pin num
//     const phoneNumber=document.getElementById('phone-number').value;
//     const pinNumber=document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     // step-4: validate phone and pin
//     // this is temporary, you should do like this 
//     if(phoneNumber === '5' && pinNumber==='1234'){
//         console.log('Your are logged in');
//         // step-5: allow user to use the website
//     }
//     else{
//         alert('Wrong phone number or pin number.');
//     }
// });

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    // get phone and pin number
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);
    
    // bad way to validate
    if(phoneNumber==='5' && pinNumber=='1234'){
        console.log('You are logged in.');
        window.location.href= '/home.html';
    }
    else{
        alert('Invalid phone or pin number');
    }
});