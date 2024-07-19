//implémenter le JS de ma page


const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPreNom);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidatePassword);
   
    if(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk){
        btnValidation.disabled = false;
    } else{
        btnValidation.disabled = true;
    }
}

function validateConfirmationPassword (inputPwd, inputConfirmPwd){
    if(inputPwd.value === inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");

        return true;

    } else {
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");

        return false;
    }
}

function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
5
    if(passwordUser.match(passwordRegex)){
6
        input.classList.add("is-valid");
7
        input.classList.remove("is-invalid"); 
8
        return true;
9
    } else{
11
        input.classList.remove("is-valid");
12
        input.classList.add("is-invalid");
13
        return false;
14
    }
}

function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
5
    if(mailUser.match(emailRegex)){
6
        input.classList.add("is-valid");
7
        input.classList.remove("is-invalid"); 
8
        return true;
9
    } else{
11
        input.classList.remove("is-valid");
12
        input.classList.add("is-invalid");
13
        return false;
14
    }
}

function validateRequired(input){
    if(input.value != ''){
        //c'est ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");

        return true;
    }

    else{
        //c'est pas ok
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");

        return false;
    }
}