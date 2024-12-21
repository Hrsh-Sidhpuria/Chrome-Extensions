let btn = document.querySelector("button");
const resultElement = document.getElementById("result");
const hexText = document.getElementById("hex-text");
const colorSection = document.getElementById("color-section");
const copyText = document.getElementById("copy-section");
const copyAlert = document.getElementById("copied-alert");

btn.addEventListener("click", async () => {
  try {
    if (!window.EyeDropper) {
      resultElement.textContent =
        "Your browser does not support the EyeDropper API";
      return;
    }
    const eyeDropper = new EyeDropper();
    const abortController = new AbortController();
    let result = await eyeDropper.open({ signal: abortController.signal });
    console.log(result);
    hexText.textContent = result.sRGBHex;
    colorSection.style.backgroundColor = result.sRGBHex;

    setTimeout(() => {
      abortController.abort();
    }, 2000);
  } catch (error) {
    console.log("there is a error : ", error.name);
  }
});

copyText.addEventListener("click", function (event) {
  navigator.clipboard
    .writeText(hexText.textContent)
    .then(() => {
      console.log("Text copied to clipboard");
      copyAlert.textContent = "copied";
      setTimeout(() => {
        copyAlert.textContent = "";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});
