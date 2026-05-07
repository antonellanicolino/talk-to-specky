window.addEventListener("DOMContentLoaded", () => {

  const textBox = document.getElementById("dialogue");

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

  document.querySelector(".head").onclick = () => setNextText("head");
  document.querySelector(".torso").onclick = () => setNextText("torso");
  document.querySelector(".lower").onclick = () => setNextText("lower");

});
