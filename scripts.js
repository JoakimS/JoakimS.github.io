// JavaScript to toggle the navbar visibility
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const storyText = "Welcome! I am a Computer Engineer and Full Stack Developer, and my portfolio showcases a range of applications, from dynamic front-end designs to robust back-end systems.";
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
