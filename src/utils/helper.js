let spacetrimmer = /^\s+|\s+$/g;
let emailvalidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const loginValidation = (model) => {
    const { username, password, securityText, security } = model;
    let _errors = {
        username: { status: false, message: "" },
        password: { status: false, message: "" },
        securityText: { status: false, message: "" },
    };

    let error_found = false;

    if (!username) {
        _errors.username.status = true;
        _errors.username.message = "Please enter the username !";
        error_found = true;
    }
    if (spacetrimmer.test(username)) {
        _errors.username.status = true;
        _errors.username.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!password) {
        _errors.password.status = true;
        _errors.password.message = "Please enter the password !";
        error_found = true;
    }
    if (!securityText) {
        _errors.securityText.status = true;
        _errors.securityText.message = "Please enter the security text !";
        error_found = true;
    }
    if (security !== securityText) {
        _errors.securityText.status = true;
        _errors.securityText.message = "Please enter the security text !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
};

export const emailValidation = (model) => {
    const { email } = model;
    let _errors = {
        email: { status: false, message: "" }
    };

    let error_found = false;

    if (spacetrimmer.test(email) || !emailvalidator.test(email) || !email) {
        _errors.email.status = true;
        _errors.email.message = "Please enter a valid email id !";
        error_found = true;
    }
    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
};

export const changePasswordValidation = (model) => {
    const { password, repassword } = model;
    let _errors = {
        password: { status: false, message: "" },
        repassword: { status: false, message: "" },
        matchpassword: { status: false, message: "" }
    };

    let error_found = false;


    if (!password) {
        _errors.password.status = true;
        _errors.password.message = "Please enter the password !";
        error_found = true;
    }

    if (!repassword) {
        _errors.repassword.status = true;
        _errors.repassword.message = "Please enter the password !";
        error_found = true;
    }

    if (password.length > 1 && password.length < 8) {
        _errors.password.status = true;
        _errors.password.message = "Password must be of atleast 8 characters !";
        error_found = true;
    }

    if (password.length > 1 && repassword.length < 8) {
        _errors.repassword.status = true;
        _errors.repassword.message = "Password must be of atleast 8 characters !";
        error_found = true;
    }

    if (password !== repassword) {
        _errors.matchpassword.status = true;
        _errors.matchpassword.message = "Password dose not match !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}