function downloadPDF(){
    //alert("bbfbfbfbf")
    const moncv =document.getElementById("cv");
    html2pdf().from(moncv).save()
    //window.print();
}
