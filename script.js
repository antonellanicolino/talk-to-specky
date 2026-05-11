const img = document.querySelector(".character");

function blink() {

  img.src = "images/Specky2.png";

  setTimeout(() => {
    img.src = "images/Specky1.png";
    setTimeout(blink, Math.random() * 4000 + 2000);
  }, 120);
}

blink();



const textBox = document.getElementById("dialogue");

window.onload = () => {
  textBox.textContent = "Click on Specky.";
};

document.querySelector(".head").onclick = () => setNextText("head");
document.querySelector(".torso").onclick = () => setNextText("torso");
document.querySelector(".lower").onclick = () => setNextText("lower");

function setNextText(type) {
  const lines = messages[type];  
  const i = index[type];        

  textBox.textContent = lines[i];

  index[type] = (i + 1) % lines.length;
}

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

  let icon = "";

  if (window.innerWidth <= 768) {

    if (type === "head") {
      icon = "🧠  ";
    }

    if (type === "torso") {
      icon = "❤️  ";
    }

    if (type === "lower") {
      icon = "👖  ";
    }

  }

textBox.innerHTML = `<span style="font-size: 0.45em;">${icon}</span>${lines[i]}`;
  
  index[type] = (i + 1) % lines.length;
  
};
