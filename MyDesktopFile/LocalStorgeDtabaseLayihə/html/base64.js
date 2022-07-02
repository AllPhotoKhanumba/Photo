var input_enc_div = document.getElementById("input_enc_div");
var output_enc_div = document.getElementById("output_enc_div");

var input_dec_div = document.getElementById("input_dec_div");
var output_dec_div = document.getElementById("output_dec_div");

var data_input = "";
var data_output = "";


function encode() {
  var encodedString = window.btoa(input_enc_div.value.toString());
  output_enc_div.innerText = encodedString;
}


function decode() {
  var decodedString = window.atob(input_dec_div.value.toString());
  output_dec_div.innerText = decodedString;
}
