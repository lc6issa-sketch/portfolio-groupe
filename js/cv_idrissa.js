function showToast(message, type = "success") {

  const container = document.getElementById("toast-container");

  if (!container) return;

  const toast = document.createElement("div");

  toast.classList.add("toast");

  if (type === "success") toast.classList.add("toast-success");
  if (type === "error") toast.classList.add("toast-error");
  if (type === "info") toast.classList.add("toast-info");

  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";

    setTimeout(() => {
      toast.remove();
    }, 400);

  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {

  const btnDownload = document.getElementById("btnDownload");

  if (!btnDownload) return;

  btnDownload.addEventListener("click", async () => {

    const frame = document.querySelector(".cv");

    if (!frame) {
      showToast("CV introuvable", "error");
      return;
    }

    // Activer mode export
    frame.classList.add("is-exporting");

    const opt = {
      margin: 0,
      filename: "CV-Idrissa-Gassama.pdf",

      image: {
        type: "jpeg",
        quality: 0.98
      },

      html2canvas: {
        scale: 2,
        scrollX: 0,
        scrollY: 0,
        backgroundColor: "#ffffff"
      },

      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait"
      },

      pagebreak: {
        mode: ["avoid-all", "css", "legacy"]
      }
    };

    try {

      await html2pdf()
        .set(opt)
        .from(frame)
        .save();

      showToast("Téléchargement effectué avec succès", "success");

    } catch (error) {

      console.error("Erreur PDF:", error);

      showToast("Erreur lors du téléchargement", "error");

    } finally {

      frame.classList.remove("is-exporting");

    }

  });

});