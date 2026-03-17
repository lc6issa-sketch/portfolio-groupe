    document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btn-telecharger");

    btn.addEventListener("click", function () {

        btn.disabled = true;

        const element = document.getElementById("cv-contenu");

        const options = {
            margin: 0,
            filename: "CV__Mahamadou.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };

        html2pdf()
            .set(options)
            .from(element)
            .save()
            .then(() => {
                alert("✅ Le CV a été téléchargé avec succès !");
                btn.disabled = false;
            });

    });

});