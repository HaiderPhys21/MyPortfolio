// Mobile nav toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('active');
});

// Contact form → Formspree integration
const form = document.querySelector('.contact-form');

// Ensure the form posts to Formspree
form.setAttribute('action', 'https://formspree.io/f/xnnzdqvp');
form.setAttribute('method', 'POST');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent normal submission

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert('Thank you! Your message has been sent.');
      form.reset();
    } else {
      const data = await response.json();
      if (data.errors) {
        alert(data.errors.map(err => err.message).join('\n'));
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    }
  } catch (error) {
    console.error('Formspree error:', error);
    alert('Network error. Please try again later.');
  }
});
