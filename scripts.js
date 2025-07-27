// JavaScript to toggle the navbar visibility
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const storyText = "Welcome! I am a Computer Engineer and Full Stack Developer. My portfolio showcases a range of applications—from dynamic front-end designs to robust back-end systems—built using technologies such as HTML, CSS, JavaScript, React, and Node.js. I have strong command of Data Structures and Algorithms (DSA), and experience with both relational (SQLite, MySQL) and non-relational (MongoDB) databases. I also work comfortably with C and C++, and use shell scripting for automation and system-level tasks.";
const storyElement = document.getElementById("story-text");
let index = 0;

function typeLetter() {
  if (index < storyText.length) {
    storyElement.innerHTML += storyText[index];
    index++;
    setTimeout(typeLetter, 100); // Adjust typing speed (100ms per letter)
  }
}


document.addEventListener("DOMContentLoaded", typeLetter);
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});
window.addEventListener('scroll', () => {
  const section = document.querySelector('.references-section');
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    section.classList.add('visible');
  }
});


const canvas = document.getElementById('binaryBackground');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const fontSize = 16;
  const columns = Math.floor(window.innerWidth / fontSize);
  const drops = Array(columns).fill(1);
  const chars = '010101001100110011010101010011';

  function draw() {
    ctx.fillStyle = 'rgba(15, 23, 34, 0.1)'; // Fade color to blend with #0f1722
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff99'; // Neon green
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 50);

