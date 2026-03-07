document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("downloadbtn").addEventListener("click", function () {
       
        let elt = document.querySelector(".container");
        
        const opt = {
            filename: 'CV.pdf',
            
        };

        html2pdf().set(opt).from(elt).save();
    });

});