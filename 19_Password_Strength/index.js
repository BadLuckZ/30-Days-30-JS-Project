var password = document.getElementById("password");
var message = document.getElementById("message");
var strength = document.getElementById("strength");

password.addEventListener('input', () => {
    if (password.value.length > 0) {
        message.style.display = 'block';
    } else {
        message.style.display = 'none'
    }
    if (password.value.length < 4) {
        strength.innerHTML = "is weak!"
        password.style.borderColor = "#ff5925";
        message.style.color = "#ff5925";
    } else if (password.value.length < 8) {
        strength.innerHTML = "looks fine!"
        password.style.borderColor = "yellow";
        message.style.color = "yellow";
    } else {
        strength.innerHTML = "is stonk!"
        password.style.borderColor = "#26d730";
        message.style.color = "#26d730";
    }
});