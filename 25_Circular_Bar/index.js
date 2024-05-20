let number = document.getElementById("number");
let counter = 0;

setInterval(() => {
    if (counter == 65) {
        clearInterval();
    } else {
        counter++;
        number.innerHTML = counter + "%";
    }
}, 30);