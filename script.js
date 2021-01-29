function selectSeating(seating , isIncrease){
    var seatingInput = parseInt(document.getElementById(seating+'-input').value);
    let seatingCount = seatingInput;
    if(isIncrease == true){
        seatingCount = seatingInput+1;
    }
    else if(isIncrease == false && seatingInput > 0){
        seatingCount = seatingInput-1;
    }
    document.getElementById(seating+'-input').value = seatingCount;

    calculateTotal();
}

document.getElementById('book-btn').addEventListener('click',function(){
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    alert('You have booked '+firstCount+' first class and ' +economyCount+ ' economy class tickets');
})

function calculateTotal(){
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    const subTotal = firstCount*150 + economyCount*100;
    document.getElementById('subTotal').innerText = '$'+subTotal;

    const vat = subTotal*0.1;
    document.getElementById('vat').innerText = '$'+vat;

    const total = subTotal+vat;
    document.getElementById('total').innerText = '$'+total;
}

function getInputValue(seat){
    const seatInput = document.getElementById(seat+'-input');
    const seatCount = parseInt(seatInput.value);
    return seatCount;
}


