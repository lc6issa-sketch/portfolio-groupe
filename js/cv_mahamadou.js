function telechargerPDF() {
    // Vérifier si html2pdf est chargé
    if (typeof html2pdf === 'undefined') {
        alert('Erreur: La bibliothèque PDF n\'est pas chargée. Vérifiez votre connexion internet.');
        return;
    }
    
    const element = document.getElementById('cv-contenu');
    const opt = {
        margin: 0,
        filename: 'CV_Mahamadou_Alhabibou.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save()
        .then(function() {
            alert('Le fichier est téléchargé avec succès');
        })
        .catch(function(error) {
            console.error('Erreur lors du téléchargement:', error);
            alert('Une erreur est survenue lors de la génération du PDF.');
        });
}
