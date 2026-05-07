window.addEventListener("DOMContentLoaded", () => {

  const img = document.querySelector(".character");
  const textBox = document.getElementById("dialogue");

  const head = document.querySelector(".head");
  const torso = document.querySelector(".torso");
  const lower = document.querySelector(".lower");

  const messages = {
    head: [
      "You're looking for meaning.",
      "Think a bit harder.",
      "Why are you here?",
      "",
    ],
    torso: [
      "I'm hungry.",
      "Don't poke me.",
      "Hihihi, that tickles."
    ],
    lower: [
      "Hey... buy me dinner first.",
      "That's inappropriate!",
      "Don't be a weirdo now.",
      "Nope."
    ]
  };

  const index = {
    head: 0,
    torso: 0,
    lower: 0
  };

  function setNextText(type) {
    const lines = messages[type];
    const i = index[type];

    textBox.textContent = lines[i];
    index[type] = (i + 1) % lines.length;
  }

  head.onclick = () => setNextText("head");
  torso.onclick = () => setNextText("torso");
  lower.onclick = () => setNextText("lower");

  function blink() {
    img.src = "images/Specky2.png";

    setTimeout(() => {
      img.src = "images/Specky1.png";
      setTimeout(blink, Math.random() * 4000 + 2000);
    }, 120);
  }

  blink();

});
