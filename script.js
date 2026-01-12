document.addEventListener('DOMContentLoaded', () => {

  // HAMBURGER TOGGLE
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('show');
    });

    // Close menu when clicking a link
    const menuLinks = document.querySelectorAll('.menu li a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('show');
      });
    });
  }

  // CAROUSEL FUNCTIONALITY
  const track = document.querySelector('.carousel-track');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  if (track && prevButton && nextButton) {
    const slides = Array.from(track.children);
    let currentIndex = 0;

    function updateSlide() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = 'translateX(' + (-slideWidth * currentIndex) + 'px)';
    }

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide();
    });

    window.addEventListener('resize', updateSlide);
    updateSlide();
  }

  // SAMPLE PRINTS MODAL
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const galleryImgs = document.querySelectorAll("#gallery img");
  const closeBtn = document.querySelector(".close");

  galleryImgs.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    });
  });

  closeBtn.onclick = function() { 
    modal.style.display = "none";
  }

  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }

});