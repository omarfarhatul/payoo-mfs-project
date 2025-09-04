document.getElementById('btn-add-money').addEventListener('click', function(){
    const addMoney=getInputFieldValueById('input-add-money');
    const pinNumber=getInputFieldValueById('input-pin-number');
    console.log('Add money inside addMoney.js: ', addMoney, pinNumber);
});