document.getElementById("downloadbtn").addEventListener("click", function () {
  const cvHTML = document.getElementById("cv").outerHTML;

  // Tout ton CSS
  const css = `
* { padding: 0; margin: 0; box-sizing: border-box; font-family: "Segoe UI", Arial, sans-serif; font-size: 17px; }
body { display: flex; flex-direction: column; align-items: center; background: linear-gradient(#aeb784, #4d513a, #4d514a); padding: 20px; }
.profil { background-color: #aeb784; width: 100%; max-width: 900px; padding: 20px; text-align: end; }
.profil p { font-size: 15px; margin-right: 70px; }
.profil h1 { margin-right: 70px; font-size: 45px; }
.container { display: flex; gap: 20px; width: 100%; max-width: 900px; background-color: white; }
.container_left { background-color: #41431b; color: white; border-top-left-radius: 200px; border-top-right-radius: 200px; padding: 10px; margin-top: -165px; margin-left: 25px; flex: 1; }
.container_right { padding: 5px; flex: 2; }
ul { margin-top: 10px; }
ul li { margin-left: 35px; padding-top: 10px; }
`;

  const fullHtml = `<html>
<head>
<meta charset="UTF-8">
<title>Mon CV</title>
<style>${css}</style>
</head>
<body>${cvHTML}</body>
</html>`;

  const blob = new Blob([fullHtml], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "Mon_CV.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
