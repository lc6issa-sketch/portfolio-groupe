
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("downloadbtn").addEventListener("click", function () {
       
        let elt = document.querySelector(".container");
        const originalMargin = elt.style.margin;
        const originalWidth = elt.style.width;
        elt.style.margin = "0";
        elt.style.width = "200mm";
         const opt = {
            margin:       [5, 5, 5, 5],
            filename:     'CV_Ismaila_Sangare.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, scrollX: 0, scrollY: 0 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak:    { mode: ['css', 'legacy'] }
        };


       html2pdf().from(elt).save().then(() => {
            elt.style.margin = originalMargin;
            elt.style.width = originalWidth;
        }); ;

    });

});