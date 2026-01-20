// Mobile hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  
  if (hamburger && navbar) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navbar.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navbar.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnHamburger) {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
      }
    });
  }
});
