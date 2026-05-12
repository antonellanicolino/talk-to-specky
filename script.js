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
    "Click on Specky.",
    "You're looking for meaning.",
    "Think a bit harder.",
    "Why are you here?",
    "Why is there something...",
    "... instead of nothing?",
    "The mind and body are one.",
    "What is the mind, though?",
    "Is the mind tangible?",
    "Am I tangible?",
    "Is a click truly a touch?",
    "You're real... don't worry.",
    "Can something be nothing?",
    "Is 'nothing' even possible?",
    "We can't imagine nothing.",
    "We think of darkness.",
    "Or an empty space.",
    "But that's... something.",
    "Something has to exist.",
    "Nothingness is impossible.",
    "I'm pixels, you're particles.",
  ],

  torso: [
    "I'm hungry.",
    "Don't poke me!",
    "Hihihi, that tickles.",
    "Do you like my outfit?",
    "Why I'm chubby, you ask?",
    "I love photon snacks.",
    "I can't exercise much.",
    "I sit here all day.",
  ],

  lower: [
    "Hey... buy me dinner first.",
    "That's inappropriate!",
    "Don't be a weirdo now.",
    "Nope.",
  ]
};

const index = {
  head: 1,
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
