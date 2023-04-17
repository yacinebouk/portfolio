let darkMode = false;

function changeDarkMode() {
    if (darkMode) {
        // light mode
        darkMode = false;
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--background-color", "#efe7e5");
        document.getElementById("darkmode-light-mode").innerHTML = "Dark mode";
    } else {
        // dark mode
        darkMode = true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "black");
        document.getElementById("darkmode-light-mode").innerHTML = "Light mode";
    }
}
var count = 1
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)


var mousein = false

function demo() {
    if (mousein) return
    document.getElementById('demo' + count++)
        .classList.toggle('hover')

}

function demo2() {
    if (mousein) return
    document.getElementById('demo2')
        .classList.toggle('hover')
}

function reset() {
    count = 1
    var hovers = document.querySelectorAll('.hover')
    for (var i = 0; i < hovers.length; i++) {
        hovers[i].classList.remove('hover')
    }
}

document.addEventListener('mouseover', function() {
    mousein = true
    reset()
})