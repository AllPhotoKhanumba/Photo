var input_rev = document.getElementById("input_rev");
var output_rev = document.getElementById("output_rev");

var input_unrev = document.getElementById("input_unrev");
var output_unrev = document.getElementById("output_unrev");

function rev(){
    var reversed = input_rev.value.split("").reverse().join("");
    output_rev.innerText = reversed;
}

function unrev(){
    var unreversed = input_unrev.value.split("").reverse().join("");
    output_unrev.innerText = unreversed ;
}