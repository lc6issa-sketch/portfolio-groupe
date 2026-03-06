document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("downloadbtn").addEventListener("click", function () {
       
        
    const lien = document.createElement("a");
    lien.href = "images/ismo_cv.pdf"; 
    lien.download = "Mon_CV.pdf";
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
    });

});