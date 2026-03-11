function goHome(){
window.location.href="index.html";
}

function downloadCV(){

const link=document.createElement("a");

link.href="pdf/CV_Oumar_Kanadji.pdf";

link.download="pdf/CV_Oumar_Kanadji.pdf";

link.click();

alert("Le fichier est téléchargé avec succès");

}

console.log("CV chargé correctement");