/**
 * Created by florian on 9/6/15.
 */

function clickButtonStart(){
    numberTipps = $('#ddNumberTipps').val();
    for (i = 1; i <= numberTipps; i++) {
        document.getElementById('tipp'+i).innerHTML = getTipp();
    }
    for (i = 15; i > numberTipps; i--) {
        document.getElementById('tipp'+i).innerHTML = null;
    }
}

function getTipp(){
    var tipp = [];
    var wholeTipp = "";
    for(j = 0; j < 6; j++){
        tipp[j] = checkDuplicateNumber(Math.floor(Math.random()*(45-1+1)+1),tipp);
    }
    tipp.sort(sortNumber);
    $.each( tipp, function( key, value ) {
        wholeTipp = wholeTipp + value + " "
    });
    return wholeTipp;
}

function checkDuplicateNumber(newNumber, numbers){
    flag = false;
    $.each (numbers, function(key,value) {
        if (newNumber == value){
            flag = true;
        }
    });
    if(flag == true){
        return checkDuplicateNumber(Math.floor(Math.random()*(45-1+1)+1),numbers);
    }
    else{
        return newNumber;
    }
}

function sortNumber(a,b) {
    return a - b;
}