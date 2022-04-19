"use strict";
let button = document.getElementById("button");
let img = document.getElementById("qrimg");
let img_container = document.getElementById("img_container");
button.addEventListener("click", function () {
  let input = document.getElementById("input");
  let download_button = document.getElementById("download_button");
  let spinnerdiv = document.getElementById("spinnerdiv");
  if (input.value == null) {
    return;
  } else {
    spinnerdiv.classList.remove("hide");
    setTimeout(() => {
      img_container.classList.remove("hide");
      img.classList.remove("hide");
      spinnerdiv.classList.add("hide");
      img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    }, 1000);
    setTimeout(() => {
      input.value = "";
    }, 2000);
  }
});
