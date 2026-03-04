
document.getElementById("downloadBtn").addEventListener("click", function(e) {
    e.preventDefault();

    // Récupérer le contenu du CV
    const cvContent = document.documentElement.outerHTML;

    // Créer un fichier Blob
    const blob = new Blob([cvContent], { type: "text/html" });

    // Créer un lien temporaire
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "images/cv-maimouna.pdf";

    // Déclencher le téléchargement
    link.click();

    // Libérer la mémoire
    URL.revokeObjectURL(link.href);
});