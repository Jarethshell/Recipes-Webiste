// Smoothly scroll to recipes when clicking the hero button.
document.querySelector('.button')?.addEventListener('click', (event) => {
  event.preventDefault();
  const section = document.querySelector('#recipes');
  section?.scrollIntoView({ behavior: 'smooth' });
});