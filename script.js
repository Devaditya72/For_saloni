const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");

const mediaArea = document.getElementById("mediaArea");
const photo = document.getElementById("photo");
const pleaText = document.getElementById("pleaText");

const finalArea = document.getElementById("finalArea");
const yesGif = document.getElementById("yesGif");
const finalText = document.getElementById("finalText");

const buttons = document.getElementById("buttons");
const successBox = document.getElementById("successBox");

const SUCCESS_HIDE_MS = 3000;
const maxNoClicks = 5;
let noClicks = 0;

// ✅ Using .jpeg images
const goofyPhotos = [
  { src: "assets/her1.jpeg", msg: "Oops… Wrong Button 😭👉 Try Again 💞" },
  { src: "assets/her2.jpeg", msg: "No?! Excuse Me?! 😤💘 Try Again 😈" },
  { src: "assets/her3.jpeg", msg: "Pleaseeeee 🥺✨ Say Yes 😭💖" },
  { src: "assets/her4.jpeg", msg: "I Am Literally Begging 🙏😭💘" },
  { src: "assets/her5.jpeg", msg: "Last Chance 😈💍 (Say Yes Or I Cry 😭)" }
];

function growYesButton() {
  // ✅ REAL growth (padding + font) so it DOES NOT cover the text above
  const newFont = 22 + noClicks * 2;
  const newPadY = 12 + noClicks * 2;
  const newPadX = 30 + noClicks * 6;

  yesBtn.style.fontSize = newFont + "px";
  yesBtn.style.padding = `${newPadY}px ${newPadX}px`;

  // cute glow ✨
  yesBtn.style.boxShadow = `0 0 ${14 + noClicks * 6}px rgba(54, 211, 153, 0.45)`;
}

function showGoofy(index) {
  mediaArea.classList.remove("hidden");
  finalArea.classList.add("hidden");
  photo.src = goofyPhotos[index].src;
  pleaText.textContent = goofyPhotos[index].msg;
}

function showSuccessBoxThenAutoHide() {
  successBox.classList.remove("hidden");
  setTimeout(() => successBox.classList.add("show"), 60);

  setTimeout(() => {
    successBox.classList.remove("show");
    setTimeout(() => successBox.classList.add("hidden"), 350);
  }, SUCCESS_HIDE_MS);
}

noBtn.addEventListener("click", () => {
  if (noClicks < maxNoClicks) {
    showGoofy(noClicks);
    noClicks++;
    growYesButton();

    if (noClicks === maxNoClicks) {
      noBtn.disabled = true;
      noBtn.textContent = "No (Disabled 😇)";
      noBtn.style.opacity = "0.65";
      noBtn.style.cursor = "not-allowed";
      pleaText.textContent += " ✅ Now Press Yes 😌💚✨";
    }
  }
});

yesBtn.addEventListener("click", () => {
  mediaArea.classList.add("hidden");

  finalArea.classList.remove("hidden");
  yesGif.src = "assets/gif_yes.gif";
  finalText.textContent = "YAAAAY!! Valentine Secured 💘🥳🎉✨";

  buttons.classList.add("hidden");

  // 🎉 Success box
  showSuccessBoxThenAutoHide();

  document.title = "She Said YES 💖";
});

// Optional: click overlay to close instantly
successBox.addEventListener("click", (e) => {
  if (e.target === successBox) {
    successBox.classList.remove("show");
    setTimeout(() => successBox.classList.add("hidden"), 350);
  }
});
