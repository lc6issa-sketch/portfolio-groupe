document.addEventListener("DOMContentLoaded", () => {
  const btnDownload = document.getElementById("btnDownload");
  const cv = document.querySelector(".cv");

  //On vérifie seulement ce qui est nécessaire
  if (!btnDownload || !cv) {
    console.warn("btnDownload ou .cv introuvable", { btnDownload, cv });
    return;
  }

  // Convertit une image en base64 (same-origin idéalement)
  async function imgToDataURL(imgEl) {
    const src = imgEl.getAttribute("src");
    if (!src || src.startsWith("data:")) return null;

    const res = await fetch(src, { cache: "no-store" });
    if (!res.ok) throw new Error("Image non accessible: " + src);

    const blob = await res.blob();
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  async function safeImagesForExport(rootEl) {
    const imgs = Array.from(rootEl.querySelectorAll("img"));
    const backups = imgs.map((img) => ({
      el: img,
      src: img.getAttribute("src"),
      crossorigin: img.getAttribute("crossorigin"),
      visibility: img.style.visibility
    }));

    for (const img of imgs) {
      try {
        img.setAttribute("crossorigin", "anonymous");
        const dataUrl = await imgToDataURL(img);
        if (dataUrl) img.setAttribute("src", dataUrl);
      } catch (e) {
        console.warn("Image problématique, masquée:", e);
        img.style.visibility = "hidden";
      }
    }

    return () => {
      for (const b of backups) {
        if (b.src) b.el.setAttribute("src", b.src);
        else b.el.removeAttribute("src");

        if (b.crossorigin) b.el.setAttribute("crossorigin", b.crossorigin);
        else b.el.removeAttribute("crossorigin");

        b.el.style.visibility = b.visibility || "";
      }
    };
  }

  btnDownload.addEventListener("click", async () => {
    if (typeof window.html2pdf === "undefined") {
      alert("html2pdf n'est pas chargé. Vérifie le script CDN.");
      return;
    }

    btnDownload.disabled = true;

    const oldBodyBg = document.body.style.background;
    document.body.style.background = "#ffffff";

    let restoreImages = null;

    try {
      restoreImages = await safeImagesForExport(cv);

      const opt = {
        margin: [8, 8, 8, 8],
        filename: "CV-Idrissa-Gassama.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: false,
          backgroundColor: "#ffffff",
          scrollY: 0
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      };

      await window.html2pdf().set(opt).from(cv).save();
    } catch (error) {
      console.error("Erreur PDF :", error);
      alert("Impossible de générer le PDF. Lance avec Live Server (http), pas file://");
    } finally {
      if (restoreImages) restoreImages();
      document.body.style.background = oldBodyBg;
      btnDownload.disabled = false;
    }
  });
});