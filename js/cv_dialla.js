document.getElementById("downloadbtn").addEventListener("click", function () {
  let elt = document.getElementById("cv");

  const opt = {
    margin:       0.5,
    filename:     'CV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(elt).save();
});
