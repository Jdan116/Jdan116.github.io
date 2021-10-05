window.onload = function () {
    "use strict";


    const submit_btn = document.getElementById("submit_btn");
    const pass_text = document.getElementById("pass_id");
    const msg = document.getElementById("msg");
    const url_txt = document.getElementById("url_txt");

    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const http_protocol = /^http:|https:/g;
    const MIN_LENGTH = 10;

    submit_btn.onclick = (e) => {
        let error_msg = "";
        if (!pass_text.value.match(lowerCaseLetters)) {
            error_msg += "at least one lowercase letter required </br>" 
        }

        if (!pass_text.value.match(upperCaseLetters)) {
            error_msg += "at least one upperCase letter required </br>" 
        }

        if (!pass_text.value.match(numbers)) {
            error_msg += "at least one numeric value required </br>" 
        }

        if (pass_text.value.length < MIN_LENGTH) {
            error_msg += "minium charater must be 10 <br/>" 
        }

        if (!url_txt.value.match(http_protocol)) {
            error_msg += "Invalid http protocol" 
        }


        if(error_msg !== "") {
            console.log(error_msg)
            msg.style.display = "block"
            msg.innerHTML = error_msg;
        } else {
            msg.style.display = "none"
            msg.innerHTML = "";
        }
    }

    url_txt.onkeyup = (e) => {

    }

}