const carousels = document.querySelectorAll(".edition-carousel");

carousels.forEach((carousel) => {

  const images = carousel.querySelectorAll(".carousel-image");
  const previousButton = carousel.querySelector(".carousel-prev");
  const nextButton = carousel.querySelector(".carousel-next");

  let currentIndex = 0;


  function showImage(index) {

    images.forEach((image) => {
      image.classList.remove("active");
    });

    images[index].classList.add("active");

  }


  nextButton.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    showImage(currentIndex);

  });


  previousButton.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    showImage(currentIndex);

  });

});