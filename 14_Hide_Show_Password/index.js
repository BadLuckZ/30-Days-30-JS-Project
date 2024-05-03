let eyeIcon = document.getElementById("eye-icon");
let password = document.getElementById("password");

eyeIcon.onclick = function() {
    if (password.type == "password") {
        password.type = "text"
        eyeIcon.src = "src/eye-open.png"
    } else {
        password.type = "password"
        eyeIcon.src = "src/eye-close.png"
    }
};