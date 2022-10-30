"use strict";
let button = document.getElementById("button");
let img = document.getElementById("qrimg");
let img_container = document.getElementById("img_container");
let input_area = document.getElementById("input");
let alert_container = document.getElementById("alert_container");
let source;
const generatecode = function () {
  let input = document.getElementById("input");
  let download_button = document.getElementById("download_button");
  let spinnerdiv = document.getElementById("spinnerdiv");
  if (!input.value) {
    alert_container.classList.remove("hide-alert");
    ////////////////////////////////////////
    ////////////////////////////////////////
    img_container.classList.add("hide");
  } else {
    img.onload = function () {
      console.log("on loaded");
      img_container.classList.remove("hide");
      alert_container.classList.add("hide-alert");
      img.classList.remove("hide");
      spinnerdiv.classList.add("hide");
    };
    spinnerdiv.classList.remove("hide");
    img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    source = img.src;
  }
};
//////////////////////////////////////////////////////////////
// EVENT LISTENERS ON BUTTON AND INPUT FIELD(WHEN ENTER IS PRESSED)
button.addEventListener("click", generatecode); //listening to click event on [generate code  button]
//listening to keypress event on [text input field]
input_area.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    generatecode();
  }
});
