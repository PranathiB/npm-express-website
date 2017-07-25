
function magicWordAnalyser(pass){
    clearErrorMessage();
    function clearField() {
        document.getElementById('pass').value = '';
    }

    function wrongPass() {
        document.getElementById('errorZone').innerHTML = "Uh-Oh!! That is not the right spell!";
    }

    if(pass === "") {
        wrongPass();
        clearField();
    }
    else if(pass === "hello") {
        successMessage();
        clearField();
    }
    else {
        wrongPass();
        clearField();
    }
}

function clearErrorMessage() {
    document.getElementById('pass').setAttribute('placeholder', '');
    document.getElementById('errorZone').innerHTML = '';
    document.getElementById('success').innerHTML = '';
}

function successMessage() {
    document.getElementById('success').innerHTML = "Congratulations!";
}