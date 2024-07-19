const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnsignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici il faudra appeler l'API pour vérefier les credentials en BDD

    if(mailInput.value === "teste@mail.com" && passwordInput.value === "123"){
        alert("Vous êtes connecté");

        //il faudra récupérer le vrai token
        const token = "jkhdkjhkbkjsbdkjhzkp1246853gkjsbdkjzbdkjsv"

        //placer ce token en cookie

        window.location.replace("/");
    }else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}