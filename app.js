var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

function validateInput(input){
    var passwordMismatch = ( firstPasswordInput.value != secondPasswordInput.value );

    /* grab logic */
    var lengthUnder16 = ( input.value.length < 16 );
    var lengthOver100 = ( input.value.length > 100 );
    var isMissingSymbols = ( !( /[\!\@\#\$\%\^\&\*]/g.test(input.value)) );
    var isMissingNumbers = ( !( /[0-9]/g.test(input.value)) );
    var isMissingLowercase = ( !( /[a-z]/.test(input.value)) );
    var isMissingUppercase = ( !( /[A-Z]/.test(input.value)) );
    var isIllegal = ( /[^A-z0-9\!\@\#\$\%\^\&\*]/g.test(input.value) );

    /* Make messages! */
    var passwordMismatchMsg = "The passwords must match.";
    var lengthUnder16Msg = "The password should be at least 16 characters.";
    var lengthOver100Msg = "The password should not be more than 100 characters.";
    var missingSymbolsMsg = "The password must contain a following symbol :  !, @, #, $, %, ^, &, *";
    var missingNumbersMsg = "The password must contain a number";
    var missingLowercaseMsg = "The password must contain a lowercase letter.";
    var missingUppercaseMsg = "The password must contain an uppercase letter.";
    var illegalMsg = "This password contains illegal characters.";

    return [
        [passwordMismatch, passwordMismatchMsg],
        [lengthUnder16, lengthUnder16Msg],
        [lengthOver100, lengthOver100Msg],
        [isMissingSymbols, missingSymbolsMsg],
        [isMissingNumbers, missingNumbersMsg],
        [isMissingLowercase, missingLowercaseMsg],
        [isMissingUppercase, missingUppercaseMsg],
        [isIllegal, illegalMsg]
    ];
}

function assembleErrorList(validityArray){
    var errorMsgList = [];
    for (var i = 0; i < validityArray.length; i++) {
        var validity = validityArray[i];
        var logic = validity[0];
        var msg = validity[1];

        if ( logic )
        {
            errorMsgList.push(msg);
        }

    }
    return errorMsgList;
}

function checkInputs(firstInput, secondInput){
    var inputs = [firstInput, secondInput];

    for (var n = 0; n < inputs.length; n++) {
        var input = inputs[n];
        
        var validityArray = validateInput(input);
        var errorMsgList = assembleErrorList(validityArray);

        var errMsg = errorMsgList.join(' ; ');
        input.setCustomValidity(errMsg);
    }
}

submit.onclick = function () {
    checkInputs(firstPasswordInput, secondPasswordInput);
};



















