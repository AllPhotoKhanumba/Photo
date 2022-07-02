var encodeBtn = document.getElementById("encode-button"),
    decodeBtn = document.getElementById("decode-button"),
    textTxt = document.getElementById("text-textarea"),
    binaryTxt = document.getElementById("binary-textarea");

encodeBtn.addEventListener("click", function(event) {
  binaryTxt.value = textTxt.value.trim()  
    .split("")
    .map(item => ("0000000" + item.charCodeAt().toString(2))
      .split("").slice(-8).join(""))
    .join(" ");
});

decodeBtn.addEventListener("click", function(event) {
  textTxt.value = binaryTxt.value.trim().split(" ")  
    .map(item => String.fromCharCode(parseInt(item, 2)))
    .join("");
  return false;
});