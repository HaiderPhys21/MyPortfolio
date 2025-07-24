// Mobile nav toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('active');
});

// Contact form submission handler
const form = document.querySelector('.contact-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();
  if (!name || !email || !message) {
    alert('Please fill out all fields before sending.');
    return;
  }

  // Simulate sending: replace with real endpoint when available
  try {
    // Example: send to a real API endpoint
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, message })
    // });

    // For now, show confirmation
    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  } catch (err) {
    console.error(err);
    alert('Oops! Something went wrong. Please try again later.');
  }
});