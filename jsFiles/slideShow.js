var images = ["images/alpaca1.jpg","images/alpaca2.jpg","images/llama1.jpg","images/llama2.jpg","images/llama3.jpg"];
var imageIndex = 0;
//change the Image to the previous image
function previousImage() {
  if (imageIndex === 0) {
    imageIndex = images.length -1;
  }
  else {
    imageIndex--;
  }
  document.getElementById('slideImage').src = images[imageIndex];
}

function nextImage() {
  if(imageIndex < images.length - 1){
    imageIndex++;
  }
  else{
    imageIndex = 0;
  }
  document.getElementById('slideImage').src = images[imageIndex];
}
