const navbar = document.getElementById("navbar");
const btn__toggle = document.getElementById("toogle__btn");
btn__toggle.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.classList.toggle("dnone");
    console.log("si jala wey")
})


if (!document.getElementById("carousel")) {
    console.log("worg page");
} else {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("sending petition");
});
