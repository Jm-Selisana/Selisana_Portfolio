// You can add form validation or animations here later
console.log("Welcome to John Selisana's Portfolio!");

// ✅ CAPTCHA & CV Download Logic
document.addEventListener('DOMContentLoaded', () => {
  const humanCheck = document.getElementById('humanCheck');
  const downloadBtn = document.getElementById('downloadBtn');

  if (humanCheck && downloadBtn) {
    humanCheck.addEventListener('change', () => {
      downloadBtn.disabled = !humanCheck.checked;
    });

    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (humanCheck.checked) {
        window.open('files/JohnEmmanuel-Selisana-CV.pdf', '_blank');
      } else {
        alert('Please verify you are not a robot.');
      }
    });
  }
});

// Typing effect for name
document.addEventListener('DOMContentLoaded', () => {
  const name = "John Emmanuel Selisana";
  const typedName = document.getElementById('typed-name');
  let index = 0;

  function typeLetter() {
    if (index < name.length) {
      typedName.textContent += name.charAt(index);
      index++;
      setTimeout(typeLetter, 100); // typing speed in ms
    }
  }

  typeLetter(); // start typing animation
});
document.querySelectorAll('.btn-primary, .btn-secondary, .form-input, .service-card, .project-card')
  .forEach(el => el.classList.add('animated-border'));
