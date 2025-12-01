// Year in footer(s)
const year = new Date().getFullYear();
document.getElementById('year')?.textContent = year;
document.getElementById('year2')?.textContent = year;
document.getElementById('year3')?.textContent = year;
document.getElementById('year4')?.textContent = year;

// Mobile menu toggles (works across pages)
function wireMenu(toggleId, menuId, closeId) {
  const toggle = document.getElementById(toggleId);
  const menu = document.getElementById(menuId);
  const close = document.getElementById(closeId);

  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu.setAttribute('aria-hidden', 'false');
  });
  if (close) close.addEventListener('click', () => {
    menu.style.display = 'none';
    menu.setAttribute('aria-hidden', 'true');
  });

  // click outside to close
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.style.display = 'none';
      menu.setAttribute('aria-hidden', 'true');
    }
  });
}

// initialize for IDs present on each page
wireMenu('navToggle', 'mobileMenu', 'navClose');
wireMenu('navToggle2', 'mobileMenu2', 'navClose2');
wireMenu('navToggle3', 'mobileMenu3', 'navClose3');
wireMenu('navToggle4', 'mobileMenu4', 'navClose4');

// Hero slideshow simple loop (decorative)
(function heroSlides(){
  const slides = document.querySelectorAll('.hero-slideshow .slide');
  if (!slides || slides.length === 0) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 4000);
})();

// Simple contact form handler (demo)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks — message received (demo). Replace with your API/email handler.');
    form.reset();
  });
}
