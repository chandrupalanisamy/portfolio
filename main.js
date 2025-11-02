// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(0, 0, 0, 0.7)';
    header.style.boxShadow = '0 0 20px #0ef';
    header.style.transition = '0.4s ease';
  } else {
    header.style.background = 'transparent';
    header.style.boxShadow = 'none';
  }
});

// ===== Floating & Fade-In Animation =====
window.addEventListener('load', () => {
  const content = document.querySelector('.home-content');
  if (content) content.classList.add('show');
});

// ===== Typing Animation for "And I'm a ..." =====
const roles = [
  "Full-Stack Python Developer",
  "Django Expert",
  "Frontend Developer",
  "React Developer",
  "Backend Developer",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetweenRoles = 1500;
const roleText = document.querySelector(".typewriter span");

function type() {
  if (roleText && charIndex < roles[roleIndex].length) {
    roleText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenRoles);
  }
}

function erase() {
  if (roleText && charIndex > 0) {
    roleText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    roleIndex++;
    if (roleIndex >= roles.length) roleIndex = 0;
    setTimeout(type, typingSpeed + 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) setTimeout(type, 1000);
});

// ===== Icon Hover Animation =====
const icons = document.querySelectorAll(".social-icons a");
icons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.3) rotate(10deg)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1) rotate(0deg)";
  });
});

// ===== Skill Section Animation =====
const skillBoxes = document.querySelectorAll(".skill");
const progressBars = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {
  skillBoxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
      box.style.animation = "fadeUp 0.8s ease forwards";
    }
  });

  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (barTop < windowHeight - 100 && bar.style.width === "0%") {
      bar.style.width = bar.dataset.width;
    }
  });
});
// Animate progress bars on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress").forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && bar.style.width === "0%") {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});

// ===== Achievements Section Effects =====

// 3D Card Tilt Effect
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
});

// Modal Image Viewer
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".certificate-img img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeModal.onclick = () => (modal.style.display = "none");

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// Scroll Reveal Animation
const cards = document.querySelectorAll(".achievement-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 }
);

cards.forEach((card) => observer.observe(card));


//contact form code 

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alertBox.textContent = "✅ Message sent successfully!";
        alertBox.style.color = "#00ff88";
        form.reset();
      } else {
        alertBox.textContent = "❌ Failed to send message. Please try again.";
        alertBox.style.color = "#ff4f4f";
      }
    } catch (error) {
      alertBox.textContent = "⚠️ Network error. Try again later.";
      alertBox.style.color = "#ffaa00";
    }
  });
});
