const typewriter = document.querySelector(".typewriter");
const phrases = [
  "Frontend Developer",
  "JavaScript Enthusiast",
  "Web Design Learner"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function typeLoop() {
  typewriter.textContent = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === phrases.length) i = 0;
    }
  }

  setTimeout(typeLoop, isDeleting ? 60 : 120);
}
typeLoop();

// ===== Contact Form Message =====
const form = document.getElementById("contact-form");
const message = document.querySelector(".form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  message.textContent = "✅ Your message has been sent!";
  form.reset();
});
