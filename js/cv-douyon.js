const btn = document.getElementById("downloadBtn");
const message = document.getElementById("message");

btn.addEventListener("click", function(){

    message.style.display = "block";

    setTimeout(function(){
        message.style.display = "none";
    },2000);

});