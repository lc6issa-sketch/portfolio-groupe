  //
            //   document.addEventListener('DOMContentLoaded', function() {
            //  const downloadLink = document.getElementById('download-link');
            //  const successMessage = document.getElementById('success-message');
    
            //  downloadLink.addEventListener('click', function(e) {
            //  successMessage.style.display = 'flex';
        
            //  setTimeout(function() {
            //   successMessage.style.animation = 'slideOut 0.3s ease';
            //     setTimeout(function() {
            //       successMessage.style.display = 'none';
            //       successMessage.style.animation = ''; // Reset animation
            //      }, 300);
            // }, 3000);
            // });
            // });
            //
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