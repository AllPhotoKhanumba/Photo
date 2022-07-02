// var input_enc = document.getElementById("input_enc");
// var output_enc = document.getElementById("output_enc");


function encode() {
  var encrypted = CryptoJS.MD5.encrypt("salam");

  output_enc.innerText = encrypted.toString();
}
