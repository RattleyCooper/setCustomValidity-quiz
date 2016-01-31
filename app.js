var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

function validateInput(input){
    return [
        [( firstPasswordInput.value != secondPasswordInput.value ), "Passwords must match."], // mismatch
        [( input.value.length < 16 ), "Password needs 16 characters."], // under 16
        [( input.value.length > 100 ), 'Password should not exceed 100 characters'],  // over 100
        [( !( /[\!\@\#\$\%\^\&\*]/g.test(input.value)) ), "Missing symbol !, @, #, $, %, ^, &, or *"],  // no symbols
        [( !( /[0-9]/g.test(input.value)) ), "Missing a number"], // no nums
        [( !( /[a-z]/.test(input.value)) ), "Missing a lowercase letter."], // no lowers
        [( !( /[A-Z]/.test(input.value)) ), "Missing an uppercase letter."], // no uppers
        [( /[^A-z0-9\!\@\#\$\%\^\&\*]/g.test(input.value) ), "Password has illegal characters."] // illegal chars
    ];
}

function assembleErrorList(validityArray){
    var errorMsgList = [];
    for (var i = 0; i < validityArray.length; i++) {
        var validity = validityArray[i];
        var logic = validity[0];
        var msg = validity[1];

        if ( logic ) {
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
