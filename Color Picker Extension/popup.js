let btn = document.querySelector("button");
const resultElement = document.getElementById("result");

btn.addEventListener("click", async () => {
  try {
    console.log("hekko");
    const eyeDropper = new EyeDropper();
    const abortController = new AbortController();
    let result = await eyeDropper.open({ signal: abortController.signal });
    setTimeout(() => {
      abortController.abort();
    }, 2000);
  } catch (error) {
    console.log("there is a error : ", error.name);
  }
});
