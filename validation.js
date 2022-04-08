let username = document.getElementById("username");
let password = document.getElementById("password");
let confirm = document.getElementById("confirm-password");
let submit = document.getElementById("submit");
let email = document.getElementById("email")
let form = document.getElementById("register");
let emailError = document.getElementById("emailError")
let usernameError = document.getElementById("usernameError")
let passwordError = document.getElementById("passwordError")
let confirmPasswordError = document.getElementById("confirmPasswordError")


form.addEventListener("submit", (event) =>{  //function submit para sa button
    event.preventDefault()//hindi ma refresh saka ma submit pero ma trigger parin ang event
    let usernameValue = username.value.trim(); //gamit ng trim para sa white space pag walang tinype puro space lang lalabas parin enter username
    let usernameLength = usernameValue.length;

    if(!usernameValue){ //use ng value para magkaroon ng laman ang input because its have ! means insist walang laman talga
        usernameError.textContent = "Enter Username";
    } else if(usernameLength < 5 || usernameLength >=16){ //this validation for the limit in text
        usernameError.textContent = "Enter between 5 and 16 characters";
    }

    let emailValue = email.value.trim();
    let regEx =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailValue){  //this is to check if meron laman ang input ng email if wala mag alert enter email address
        emailError.textContent = "Enter an Email Address";
    } else if(!regEx.test(emailValue)){ //this is to set if not the same the format in regEx alert please enter valid
        emailError.textContent = "Please enter a valid email address";
    }

    let passwordValue = password.value.trim();
    let pasRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!passwordValue){
        passwordError.textContent = "Enter A password";
    }else if(!pasRegEx.test(passwordValue)){
        passwordError.textContent = "password must contain digit 1 uppercase 1 lowercase and have character symbol";
    }

    let confirmPasValue = confirm.value.trim();
    if(!confirmPasValue){
        confirmPasswordError.textContent = "please confirm your password";
    } else if(confirmPasValue != passwordValue){ //this is to match the password and confirm password
        confirmPasswordError.textContent = "Please password match";
    }


})





