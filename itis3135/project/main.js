document.addEventListener("DOMContentLoaded", () => {
    //Slides
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
    // Form
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
  //Draw VSA
  function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent('canvas-container');
    background(220);
  }
  
  function draw() {
    fill (140, 199, 161);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
  }

  //Reset button
  function resetCanvas() {
    background(220); // Reset to initial light gray background
}