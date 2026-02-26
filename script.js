
      function hidePreloader() {
        const preloader = document.getElementById("preloader");
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 300);
      }

      // Hide after page fully loads
      window.addEventListener("load", hidePreloader);

      // Auto-hide after 2 seconds (fallback)
      setTimeout(hidePreloader, 2000);

      // Enable overlay toggle on mobile (click)
      document.querySelectorAll(".team-card").forEach((card) => {
        card.addEventListener("click", function () {
          if (window.innerWidth <= 768) {
            this.classList.toggle("active");
          }
        });
      });

      // Enable overlay toggle on mobile click
      document.querySelectorAll(".gallery-card").forEach((card) => {
        card.addEventListener("click", function () {
          if (window.innerWidth <= 768) {
            this.classList.toggle("active");
          }
        });
      });


      // Show button when scrolled down
window.addEventListener("scroll", function() {
  const btn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 200) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

// Scroll to top on click
document.getElementById("scrollTopBtn").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
  




