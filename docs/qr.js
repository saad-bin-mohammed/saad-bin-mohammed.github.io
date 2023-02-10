let input = document.querySelector(".input-area");
let download = document.querySelector(".download-btn");
let section = document.querySelector("section");
let spinner = document.querySelector(".spinner");
let generate_button = document.querySelector(".generate-code-button");
let blob;
generate_button.addEventListener("click", function fetch() {
  input.value ? fetchdata() : null;
});
input?.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (input.value) {
      fetchdata();
    } else {
      document.querySelector(".main_div")?.remove();
    }
  }
});
const fetchdata = async function () {
  spinner.classList.remove("hide");
  const response = await fetch(
    ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      input.value
    )}`
  );
  blob = response.blob();
  let main_div = document.querySelector(".main_div");
  if (main_div) {
    main_div.querySelector("img").src = response.url;
  } else {
    let html = `
      <div class="main_div">
           <div class="image-container" id="img_container">
                    <img src="${response.url}" alt="qrcodeimage" >;
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
    spinner.insertAdjacentHTML("afterend", html);
  }
  spinner.classList.add("hide");
};
section.addEventListener("click", function (e) {
  if (e.target.classList.contains("download-btn")) {
    blob.then((file) => {
      let locator = URL.createObjectURL(file);
      let a = document.createElement("a");
      a.href = locator;
      a.download = "Qr code";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }
  if (e.target.classList.contains("share-btn")) {
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
  }
});
