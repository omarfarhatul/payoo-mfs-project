function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    // console.log(id, inputValue, inputNumber);

    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);

    return textNumber;
}


// call by features functions
function showSectionById(id){
    // hide all the section or form
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transction-form').classList.add('hidden');
    // show the section or form with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}

