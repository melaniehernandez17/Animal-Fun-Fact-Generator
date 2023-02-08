fact = ["Hello World!"]
function generateFact() {
    document.getElementById("randomFact").innerHTML = fact;
}

function hideShowFact() {
    var x = document.getElementById("randomFact");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}