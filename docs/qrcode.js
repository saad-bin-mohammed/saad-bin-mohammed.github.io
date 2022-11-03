"use strict";
let button = document.getElementById("button");
let img = document.getElementById("qrimg");
let img_container = document.getElementById("img_container");
let input = document.getElementById("input");
let download_button = document.getElementById("download_button");
let source;
const generatecode = function () {
  let input = document.getElementById("input");
  let spinnerdiv = document.getElementById("spinnerdiv");
  if (!input.value) {
    img_container.classList.add("hide");
    download_button.classList.add("hide");
    return;
  } else {
    img.onload = function () {
      img_container.classList.remove("hide");
      img.classList.remove("hide");
      spinnerdiv.classList.add("hide");
    };
    spinnerdiv.classList.remove("hide");
    img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      input.value
    )}`;
    source = img.src;
    setTimeout(() => {
      download_button.classList.remove("hide");
    }, "1000");
  }
};

//////////////////////////////////////////////////////////////
// EVENT LISTENERS ON BUTTON AND INPUT FIELD(WHEN ENTER IS PRESSED)
button.addEventListener("click", generatecode); //listening to click event on [generate code  button]
//listening to keypress event on [text input field]
input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    generatecode();
  }
});
download_button.addEventListener("click", function () {
  fetchFile(source);
});
function fetchFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let locator = URL.createObjectURL(file);
      let a = document.createElement("a");
      a.href = locator;
      a.download = "Qr code";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
}
