function toggleDark() {
    changeDark();
    changeLogo();
    saveLocalTheme();
}

function changeDark() {
    document.documentElement.classList.toggle("dark");
}

function changeLogo() {
    if (document.getElementById("toggle").innerHTML == "🌒") {
        document.getElementById("toggle").innerHTML = "☀️";
    }
    else {
        document.getElementById("toggle").innerHTML = "🌒";
    }
}

function saveLocalTheme() {
    let theme = localStorage.getItem("theme");

    if (!theme) {
        localStorage.setItem("theme", "dark");
        return;
    }

    if (theme == "dark") {
        localStorage.setItem("theme", "light");
    }
    else {
        localStorage.setItem("theme", "dark");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem("theme");
    
    if (theme == "dark") {
        document.getElementById("toggle").innerHTML = "☀️";
        document.documentElement.classList.add("dark");
    }
    else if (theme == "light") {
        document.getElementById("toggle").innerHTML = "🌒";
        document.documentElement.classList.remove("dark");
    }
    else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.getElementById("toggle").innerHTML = "☀️";
            document.documentElement.classList.add("dark");
        }
        else {
            document.getElementById("toggle").innerHTML = "🌒";
            document.documentElement.classList.remove("dark");
        }
    }
});