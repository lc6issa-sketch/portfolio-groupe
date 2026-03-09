function telechagerPDF() {
    window.print();
    // Quand l'impression est terminée
    window.onafterprint = function() {
        let message = document.getElementById("msg");
        message.style.display = 'block';
        message.innerHTML = 'Le fichier est téléchargé avec succès !';
    };

    
}