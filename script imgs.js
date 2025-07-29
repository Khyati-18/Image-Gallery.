const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

function openLightbox(img) {
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
  currentIndex = [...images].indexOf(img);
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage(event) {
  event?.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function prevImage(event) {
  event?.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}