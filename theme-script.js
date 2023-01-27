var themeIcon = document.getElementById("theme-icon")
var mode = document.getElementById("light-dark-mode")
themeIcon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme"))
    {
        themeIcon.src = "./assets/images/moon.png"
    }
    else
    {
        themeIcon.src = "./assets/images/sun.png"
    }
}

