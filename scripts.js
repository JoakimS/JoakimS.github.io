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
