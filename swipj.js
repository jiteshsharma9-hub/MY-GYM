function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


// Toggle navbar for mobile
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navbar").classList.toggle("active");
});



// Optional: Animate cards on scroll
// We can integrate scroll-based animations using Intersection Observer or AOS.js if needed


function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}



// Optional: Alert or modal on button click
document.querySelectorAll('.learn-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("More info coming soon!");
  });
});


function selectPlan(planName) {
  alert(`You have selected the ${planName} Plan!`);
}



// Shuffle testimonial cards on each page load
window.addEventListener('load', () => {
  const grid = document.querySelector('.testimonials-grid');
  const cards = Array.from(grid.children);
  cards.sort(() => 0.5 - Math.random());
  cards.forEach(card => grid.appendChild(card));
});



// Simple form validation and feedback
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("form-message");

  if (!name || !email || !message) {
    response.textContent = "Please fill out all fields.";
    response.style.color = "red";
    return;
  }

  response.textContent = "Thank you! We'll get back to you soon.";
  response.style.color = "#00ffb3";

  // Reset form
  document.getElementById("contactForm").reset();
});


// Auto-update year
document.getElementById("year").textContent = new Date().getFullYear();

// Newsletter form feedback
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("newsletterEmail").value.trim();
  const message = document.getElementById("newsletter-message");

  if (emailInput) {
    message.textContent = "Subscribed successfully!";
    document.getElementById("newsletterForm").reset();
  } else {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
  }
});
