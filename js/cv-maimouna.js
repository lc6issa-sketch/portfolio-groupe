const cvButton = document.getElementById('downloadBtn');

cvButton.addEventListener('click', (event) => {
  event.preventDefault(); // empêche le saut vers le haut de la page

  const cvUrl = 'pdf/cv-maimouna.pdf';
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'cv-maimouna.pdf';
  link.click();

  const message = document.createElement('p');
  message.textContent = 'CV téléchargé avec succès !';
  message.style.position = 'fixed';
  message.style.top = '20px';
  message.style.right = '30%';
  message.style.transform = 'translateX(-50%)';
  message.style.backgroundColor = '#fff';
  message.style.color = '#000';
  message.style.padding = '10px 20px';
  message.style.borderRadius = '5px';
  document.body.appendChild(message);

  setTimeout(() => message.remove(), 5000);
});