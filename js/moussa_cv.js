function telechagerPDF() {
    const message = document.getElementById('msg');
    
    // Afficher le message de succès immédiatement
    message.style.display = 'block';
    message.innerHTML = ' Le fichier est téléchargé avec succès !';
    
    // Désactiver le bouton pendant le téléchargement
    const downloadBtn = document.querySelector('.btn-download');
    downloadBtn.disabled = true;
    downloadBtn.style.opacity = '0.5';
    downloadBtn.style.cursor = 'not-allowed';
    
    // Attendre 2 secondes pour que le message soit visible, puis lancer l'impression
    setTimeout(() => {
        // Cacher le message avant l'impression
        message.style.display = 'none';
        
        // Lancer l'impression (qui génère le PDF)
        window.print();
        
        // Réactiver le bouton après l'impression
        setTimeout(() => {
            downloadBtn.disabled = false;
            downloadBtn.style.opacity = '1';
            downloadBtn.style.cursor = 'pointer';
        }, 1000);
        
    }, 2000); // 2 secondes de délai pour voir le message
}

