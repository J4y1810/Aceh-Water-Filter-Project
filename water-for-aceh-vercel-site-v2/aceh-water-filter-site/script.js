// Small interaction layer: mark the header when the page has scrolled.
const header = document.querySelector('.site-header');
const updateHeader = () => {
  header.style.boxShadow = window.scrollY > 8
    ? '0 8px 30px rgba(16,43,45,.07)'
    : 'none';
};
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
