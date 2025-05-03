document.addEventListener("DOMContentLoaded", () => {
    // Declare slideIndex before using it
    let slideIndex = 1;
    function showSlides(n) {
      const slides = document.getElementsByClassName("slide");
      const thumbs = document.getElementsByClassName("thumb");
      if (slides.length === 0) return;
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].dataset.active = "false";
      }
      slides[slideIndex - 1].style.display = "block";
      if (thumbs[slideIndex - 1]) {
        thumbs[slideIndex - 1].dataset.active = "true";
      }
    }
    showSlides(slideIndex);
    window.plusSlides = function(n) {
      showSlides(slideIndex += n);
    };
    window.currentSlide = function(n) {
      showSlides(slideIndex = n);
    };
    // Form handling
    const joinForm = document.getElementById("joinForm");
    const confirmation = document.getElementById("formConfirmation");
    if (joinForm && confirmation) {
      joinForm.addEventListener("submit", (e) => {
        e.preventDefault();
        joinForm.classList.add("hidden");
        confirmation.classList.remove("hidden");
      });
    }
  });