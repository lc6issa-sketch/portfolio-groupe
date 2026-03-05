
document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("Download"); // correspond à l'id exact

    button.addEventListener("click", function() {
        const link = document.createElement("a");
        link.href = "cv-safiatou.pdf";       // chemin vers ton PDF
        link.download = "CV_Safiatou.pdf";   // nom du fichier téléchargé
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

});