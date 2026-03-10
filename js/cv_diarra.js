
 document.addEventListener('DOMContentLoaded', function() {
    const downloadLink = document.getElementById('download-link');
    
  downloadLink.addEventListener('click', function(e) {
   e.preventDefault();
    const link = document.createElement('a');
    link.href = 'images/diarra.pdf';
    link.download = 'diarra.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('✓ Téléchargement réussi !');
    });
   });