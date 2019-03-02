function signOnFunction () {
    document.getElementById("dropSign").classList.toggle("show");
}
function change () {
   if (document.getElementById("signOnButton").innerHTML == "Sign On") {
       document.getElementById("signOnButton").innerHTML = "Close";
   } else if (document.getElementById("signOnButton").innerHTML == "Close") {
    document.getElementById("signOnButton").innerHTML = "Sign On"
   }
}