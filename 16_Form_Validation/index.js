var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required!';
        return false;
    } 
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z][A-Za-z]*$/)) {
        // Pattern to write must be <Name> <Name>
        nameError.innerHTML = 'Write your Fullname!';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required!';
        return false;
    }
    if (!phone.match(/^[0-9]{9,10}$/)) {
        // Phone must contain only 9-10 digits
        phoneError.innerHTML = 'Invalid Phone!';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required!';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        // Example: A.2@gaming.com, 11-asda@email.th, AS__HOLE@gmail.asca, noob@gmail.com
        emailError.innerHTML = 'Invalid Email!';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;
    const required = 30;
    var left = required - message.length;
    if (left > 0) {
        if (left == 1) {
            messageError.innerHTML = "1 more character required";
        } else {
            messageError.innerHTML = left + " more characters required";
        }
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage) {
        validateName(); validatePhone(); validateEmail(); validateMessage();
        submitError.style.display = 'block';
        submitError.innerHTML = "Invalid Form!"
        setTimeout(function() {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}