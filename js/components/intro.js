// =========================
// INTRO IMAGE SLIDER
// =========================

const introImages = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56",
  "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  "https://images.unsplash.com/photo-1518546305927-5a555bb7020d"
];

let index = 0;

const slider = document.getElementById("introSlider");

function changeIntroImage() {
  index++;

  if (index >= introImages.length) {
    index = 0;
  }

  slider.src = introImages[index];
}

// change every 5 seconds
setInterval(changeIntroImage, 5000);