const boutton=document.querySelector("#btnDownload");
boutton.onclick=()=>{
  const lien=document.createElement("a");
  lien.setAttribute("href", "pdf/CV_Idrissa.pdf");
  lien.setAttribute("download", "cv_idrissa_Gassama");
  lien.click();
  setTimeout(()=>{alert("le CV a été télécharger avec succes.");},2000);
  
}