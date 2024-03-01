let spinner = document.querySelector(".spinner");
let form = document.querySelector("form");
let blob;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  fetchdata(formData.get("input"));
});
const fetchdata = async function (input) {
  spinner.classList.remove("hide");
  const response = await fetch(
    ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      input
    )}`
  );
  blob = response.blob();
  let generatedImage = document.querySelector("#generatedImage");
  if (generatedImage) {
    generatedImage.src = response.url;
  } else {
    spinner.insertAdjacentHTML("afterend", generateHtml(response.url));
    addListeners(blob);
  }
  spinner.classList.add("hide");
};
function addListeners(blob) {
  let download_button = document.querySelector("#download_button");
  let share_button = document.querySelector(".share-btn ");
  download_button.addEventListener("click", () => {
    blob.then((file) => {
      let locator = URL.createObjectURL(file);
      let a = document.createElement("a");
      a.href = locator;
      a.download = "Qr code";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  });
  share_button.addEventListener("click", () => {
    blob.then((blob) => {
      const filesArray = [
        new File([blob], "qrimage.jpg", {
          type: "image/jpeg",
          lastModified: new Date().getTime(),
        }),
      ];
      const shareData = {
        files: filesArray,
      };
      if (navigator.share && navigator.canShare(shareData)) {
        navigator.share(shareData);
      }
    });
  });
}
function generateHtml(url) {
  return `
  <div class="main_div">
       <div class="image-container" id="img_container">
                <img src="${url}" alt="qrcodeimage" id="generatedImage">;
        </div>
        <div class="buttons">
            <button class="download-btn" id="download_button">
               Download<ion-icon
                 name="arrow-down-circle-outline"
                 class="download-icon"
               ></ion-icon>
            </button>
            <button class="share-btn share" id="share">
               Share<ion-icon
                 name="share-social-outline"
                 class="share-icon"
               ></ion-icon>
            </button>
        </div>
  </div>
        `;
}
