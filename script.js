let inputUsername = document.getElementById("inputUsername")
let signInTextValue = document.getElementById("SignInText")

function signIn() {
    let inputValue = inputUsername.value;
    let verifyText = "Hi " + inputValue + " Verifying Your account....";
    signInTextValue.textContent = verifyText; 
    signInTextValue.style.color = "Black";
    signInTextValue.style.fontSize = "30px";
} 