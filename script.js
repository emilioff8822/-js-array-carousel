
let images = [  "https://picsum.photos/500/300?random=1",  "https://picsum.photos/500/300?random=2",  "https://picsum.photos/500/300?random=3"];
let currentImage = 0;
let imgElement = document.querySelector(".slider img");

function prev() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  imgElement.src = images[currentImage];
}

function next() {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  imgElement.src = images[currentImage];
}
