function signOnFunction() {
    document.getElementById("dropSign").classList.toggle("show");
}
function change() {
    if (document.getElementById("signOnButton").innerHTML == "Sign On") {
        document.getElementById("signOnButton").innerHTML = "Close";
    } else if (document.getElementById("signOnButton").innerHTML == "Close") {
        document.getElementById("signOnButton").innerHTML = "Sign On"
    }
}

var kBtn = document.getElementsByClassName("kservices");
for (var i = 0; i < kBtn.length; i++) {
    kBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display == "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });    
}
