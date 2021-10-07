const productImages = document.querySelectorAll(".product-images img");     // Selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider");          // Selecting image slider element

let activeImageSlide = 0; // Default slider image

productImages.forEach((item, i) => {        // Looping through each image thumb
    item.addEventListener('click', () => {      // Adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active')      // Removing active class from currentimage thumb
        item.classList.add('active');       // Adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`;     // Setting up image slider's background image
        activeImageSlide = i;       // Updating the image slider variable to track current thumb
    })
})
