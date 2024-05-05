var icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "src/sun.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "src/moon.png";
        localStorage.setItem("theme", "light");
    }
}

loadLatestTheme();

function loadLatestTheme() {
    if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "light");
    }
    let localData = localStorage.getItem("theme");
    if (localData == "light") {
        icon.src = "src/moon.png";
        document.body.classList.remove("dark-theme");
    } else if (localData == "dark") {
        icon.src = "src/sun.png";
        document.body.classList.add("dark-theme");
    }
}