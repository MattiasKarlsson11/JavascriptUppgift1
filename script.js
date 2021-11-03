function validText(value) {
    const regEx = /(.*[a-z]){3}/g

    if(!regEx.test(value))
        return false

    return true
}
function passwordMatch(value) {

    if (document.getElementById('inputPassword').value == document.getElementById('inputPasswordConfirm').value)
        return false
    
    return true
}
function validEmail(value) {
    const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if(!regEx.test(value))
        return false

    return true
}
function validPassword(value) {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    if(!regEx.test(value))
        return false

    return true
}
function validZip(value) {
    const regEx = /\b\d{5}\b/g

    if(!regEx.test(value))
        return false

    return true
}
function checkValidForm(elements) {
    let disable = false
    let errors = document.querySelectorAll('.is-invalid')
    let submitButton = document.querySelectorAll('.submit')[0]   

    elements.forEach(element => {
        if(element.value === "" || errors.length > 0)
            disable = true
    })     

    if(submitButton !== undefined)
        submitButton.disabled = disable
}
function setEventListeners() {
    forms.forEach(element => {
        switch(element.id) {
            case "inputFirstName":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validText(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        e.target.classList.add("is-valid");
                        checkValidForm(forms)
                    }
                })
                break;
            case "inputLastName":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validText(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        e.target.classList.add("is-valid");
                        checkValidForm(forms)
                    }
                })
                break;
    
            case "inputEmail":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validEmail(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        e.target.classList.add("is-valid");
                        checkValidForm(forms)
                    }
                })
                break;
    
            case "inputPassword":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validPassword(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        e.target.classList.add("is-valid");
                        checkValidForm(forms)
                    }
                })
                break;
    

            case "inputPasswordConfirm":
                element.addEventListener("keyup", function(e) { 
                    
                    if(passwordMatch(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        e.target.classList.add("is-valid");
                        checkValidForm(forms)
                    }
                })
                break;

            case "inputAddress":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validText(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        e.target.classList.add("is-valid");
                        checkValidForm(forms)
                    }
                })
                break;

            case "inputCity":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validText(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        e.target.classList.add("is-valid");
                        checkValidForm(forms)
                    }
                })
                break;

            case "inputZip":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validZip(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        e.target.classList.add("is-valid");
                        checkValidForm(forms)
                    }
                })
                break;
        }     
    })
}
function onSubmit(e) {
    e.preventDefault()
    console.log("submitted")
}

var forms = document.querySelectorAll('.needs-validation')
setEventListeners()
checkValidForm(forms)
