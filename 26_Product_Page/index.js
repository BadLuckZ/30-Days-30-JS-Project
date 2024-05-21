let productImg = document.getElementById("productImg");
let buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        productImg.src = `src/image${i+1}.png`;
        for (btn of buttons) {
            btn.classList.remove("active")
        }
        this.classList.add("active");
    }
}