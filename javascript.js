//Generate Random Fact
facts = [
    "Dolphins sleep with half of their brain at a time and they always keep one eye open. This way they are able to look for predators and surface to breath.", 
    "A lions roar can be heard up to 5 miles away.", 
    "Pandas can eat between 26 to 84 pounds of bamboo a day.",
    "Octupuses have three hearts.",
    "Snow leopards are able to leap as far as 50 feet.",
    "Foxes can make up to 40 different sounds."];
function generateFact() {
    let myFact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById("randomFact").innerHTML = myFact;
}

 //Hide/Show Content inside div tag
function hideShowFact() {
    var x = document.getElementById("randomFact");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

 //Toggle Background Color
function changeBackground() {
    var body = document.body.style;
    if (body.background === "rgb(179, 218, 255)") {
        body.background = "rgb(203, 203, 250)";
    } else {
        body.background = "rgb(179, 218, 255)";
    }
}

//Slideshow
let slideIndex = 1;
showSlides(slideIndex);

//Next and prev
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Images
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

showSlides(1); // Show the first image without clicking anything
