const error_message = document.getElementById('snackbar-error');
const success_message = document.getElementById('snackbar-success');

function action_submit() {

    error_message.innerHTML = '';
    success_message.innerHTML = '';

    if(!checkEmail()) {}
    else if(!checkPassword()) {}
    else if(!checkAddress()) {}
    else if(!checkGender()) {}
    else if(!checkTerms()) {}

    if (error_message.innerHTML === '')
        success_message.innerHTML = "Register success !";

    const snackbar = (error_message.innerHTML !== '') ?
        document.getElementById("snackbar-error") :
        document.getElementById("snackbar-success");

    snackbar.className = "show";
    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}

function checkEmail() {

    const email = document.getElementById('email').value;

    let errorMessage = "";
    const emailLength = email.length;

    if (emailLength === 0)
        errorMessage = "Email cannot be empty !";
    else {
        const emailAtIndex = email.indexOf("@");
        const emailAtCount = email.split("@").length;

        if (emailAtIndex === -1)
            errorMessage = "Email must be have at least one '@' characters !";
        else if (emailAtCount > 2)
            errorMessage = "Email only have one '@' characters !";
        else {
            const emailSplitByAt = email.split("@");
            const emailDotIndex = emailSplitByAt[1].indexOf(".");

            if (emailDotIndex === -1)
                errorMessage = "Email must be have at least one '.' character after '@' character !";
            else if (emailDotIndex < 2)
                errorMessage = "There must be have at least one character between first '.' character and '@' character";
            else {
                const emailSplitByDot = emailSplitByAt[1].split(".");

                for (let i = 0; i < emailSplitByDot.length - 1; i++)
                    if (emailSplitByDot[i].length === 0)
                        errorMessage = "There must be have at least 1 character between '.' character";

                if (errorMessage === "" && emailSplitByDot[emailSplitByDot.length - 1].length === 0)
                    errorMessage = "There must be have at least 1 character at the end of the email";
            }
        }
    }

    if (errorMessage !== "")
        error_message.innerHTML = errorMessage;

    return (errorMessage === "");
}

function checkPassword() {
    const password = document.getElementById('password').value;

    let errorMessage = "";
    const passwordLength = password.length;

    if (passwordLength === 0)
        errorMessage = "Password cannot be empty !";
    else {
        let totalAlphabet = 0;
        let totalNumber = 0;

        for (let i = 0; i < passwordLength; i++) {
            if ((password.charAt(i) < 'a' || password.charAt(i) > 'z') &&
                (password.charAt(i) < 'A' || password.charAt(i) > 'Z'))
                totalAlphabet++;
            else if ((password.charAt(i) < '0' || password.charAt(i) > '9'))
                totalNumber++;
        }

        if (totalAlphabet === 0 || totalNumber === 0)
            errorMessage = "Password must be alphanumeric !";
    }

    if (errorMessage !== "")
        error_message.innerHTML = errorMessage;

    return (errorMessage === "");
}

function checkAddress() {
    const address = document.getElementById('address').value;

    let errorMessage = "";
    const addressLength = address.length;

    if (addressLength === 0)
        errorMessage = "Address cannot be empty !";
    else if (addressLength < 10 || addressLength > 40)
        errorMessage = "Address length must be between 10 and 40 !";

    if (errorMessage !== "")
        error_message.innerHTML = errorMessage;

    return (errorMessage === "");
}

function checkGender() {
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;

    let errorMessage = "";

    if (!genderMale && !genderFemale) {
        errorMessage = "Choose your gender !";
        error_message.innerHTML = errorMessage;
    }

    return (errorMessage === "");
}

function checkTerms() {
    const terms = document.getElementById('terms').checked;

    let errorMessage = "";

    if (!terms) {
        errorMessage = "Check the checkbox if you agree to our terms and conditions !";
        error_message.innerHTML = errorMessage;
    }

    return (errorMessage === "");
}
