facts = [
    "Dolphins sleep with half of their brain at a time and they always keep one eye open. This way they are able to look for predators and surface to breath.", 
    "A lions roar can be heard up to 5 miles away.", 
    "Pandas can eat between 26 to 84 pounds of bamboo a day."];
function generateFact() {
    let myFact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById("randomFact").innerHTML = myFact;
}

function hideShowFact() {
    var x = document.getElementById("randomFact");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}