function selectSeating(seating , isIncrease){
    var seatingInput = parseInt(document.getElementById(seating+'-input').value);
    let seatingCount = seatingInput;
    if(isIncrease == true){                     //plus button functions
        seatingCount = seatingInput+1;
    }
    else if(isIncrease == false && seatingInput > 0){       //minus button functions and to check the counts do not become less than 0
        seatingCount = seatingInput-1;
    }
    document.getElementById(seating+'-input').value = seatingCount;

    calculateTotal();
}

document.getElementById('book-btn').addEventListener('click',function(){
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    if(firstCount == 0 && economyCount == 0){
        alert('You did not book any ticket. try again!!!!');
    }
    if(economyCount == 0){
        if(firstCount == 1){
            alert('You have booked '+firstCount+' first class ticket');
        }
        else if(firstCount > 1){
            alert('You have booked '+firstCount+' first class tickets'); 
        }
    }else if(firstCount == 0){
        if(economyCount == 1){
            alert('You have booked '+economyCount+' economy class ticket');
        }
        else if(economyCount > 1){
            alert('You have booked '+economyCount+' economy class tickets'); 
        }
    }else{
        alert('You have booked '+firstCount+' first class and ' +economyCount+ ' economy class tickets');
    }
})

function calculateTotal(){                 //calculate all the total,vat,subtotal
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    const subTotal = firstCount*150 + economyCount*100;
    document.getElementById('subTotal').innerText = '$'+subTotal;

    const vat = subTotal*0.1;
    document.getElementById('vat').innerText = '$'+vat;

    const total = subTotal+vat;
    document.getElementById('total').innerText = '$'+total;
}

function getInputValue(seat){               //functions to know the input values of seatings
    const seatInput = document.getElementById(seat+'-input');
    const seatCount = parseInt(seatInput.value);
    return seatCount;
}


