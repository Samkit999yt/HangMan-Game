let categories = {
  animals: {
    words: [
      "elephant", "tiger", "lion", "giraffe", "zebra", "kangaroo",
      "panda", "monkey", "whale", "dolphin", "crocodile", "hippopotamus",
      "rhinoceros", "cheetah", "gorilla", "bear", "wolf", "seal",
      "penguin", "koala", "sloth"
    ],
    hints: [
      "The largest land animal, often seen in Indian zoos",
      "A big cat with stripes, found in India’s jungles",
      "Known as the 'king of the jungle', found in Indian national parks",
      "A tall animal with a very long neck, seen in safari parks",
      "A striped animal, similar to a horse, found in Africa",
      "An Australian animal that hops, not found in India",
      "A black and white bear, native to China",
      "A tree-climbing primate, commonly seen in Indian forests",
      "The largest mammal in the ocean, not found in India’s waters",
      "A clever marine mammal, seen in aquariums",
      "A reptile with a long snout, found in Indian rivers",
      "A large animal with a big mouth, seen in African safaris",
      "An animal with a horn on its nose, found in Indian reserves",
      "The fastest land animal, found in Africa",
      "A large primate, found in African forests",
      "A large carnivorous mammal with fur, found in zoos",
      "A wild animal known for howling, not native to India",
      "A marine mammal that lives on ice, found in polar regions",
      "A flightless bird from Antarctica, not seen in India",
      "A marsupial from Australia, known for sleeping a lot"
    ],
  },
  birds: {
    words: [
      "peacock", "sparrow", "eagle", "parrot", "penguin", "owl",
      "swan", "flamingo", "woodpecker", "kingfisher", "hummingbird",
      "canary", "crane", "ostrich", "pigeon", "robin", "toucan",
      "falcon", "seagull", "dove", "turkey"
    ],
    hints: [
      "India’s national bird, with colorful feathers",
      "A small bird found in most Indian cities",
      "A bird of prey with sharp eyes, seen in India’s forests",
      "A colorful bird that can mimic human speech, often kept as a pet",
      "A flightless bird from Antarctica, not found in India",
      "A bird known for its night calls, found in Indian forests",
      "A graceful white bird often seen in lakes",
      "A pink bird with long legs, found in Indian wetlands",
      "A bird that pecks on trees, found in Indian forests",
      "A bird known for diving into water, found in Indian rivers",
      "The smallest bird, known for its rapid wing flaps",
      "A small yellow bird, often seen in gardens",
      "A tall bird found near water bodies in India",
      "The largest bird, native to Africa",
      "A common city bird, found everywhere in India",
      "A bird with a brightly colored beak, from tropical regions",
      "A bird of prey known for speed, found in India",
      "A bird often seen near the sea, found in coastal areas",
      "A peaceful bird symbolizing love, often seen in parks",
      "A bird commonly cooked in festivals, not found in India"
    ],
  },
  indian: {
    words: [
      "ganga", "mumbai", "delhi", "tajmahal", "kerala", "rajasthan",
      "karnataka", "sikkim", "chennai", "kolkata", "jaipur", "agra",
      "meghalaya", "punjab", "assam", "goa", "hyderabad", "bengaluru",
      "uttarakhand", "himachal", "ladakh"
    ],
    hints: [
      "A holy river, very important in Hinduism",
      "The financial capital of India, located on the west coast",
      "The capital city of India, known for its historical monuments",
      "A famous marble monument, a UNESCO World Heritage site",
      "A state known for its backwaters and lush greenery",
      "A desert state, known for its palaces and forts",
      "A state with the city of Bangalore, known for its IT industry",
      "A small northeastern state, known for its beautiful landscapes",
      "A major city in the south, formerly known as Madras",
      "The city of joy, located in eastern India",
      "Known as the pink city, famous for its historic forts",
      "A city where the Taj Mahal is located",
      "A state known for its heavy rainfall and beautiful hills",
      "A state famous for its agriculture and Punjabi culture",
      "A northeastern state known for its tea plantations",
      "A small state known for its beautiful beaches and casinos",
      "A city known for its IT industry and historic sites",
      "A state known for its beautiful hill stations",
      "A region known for its stunning landscapes and monasteries"
    ],
  },
  fruits: {
    words: [
      "apple", "banana", "orange", "strawberry", "grape", "pineapple",
      "mango", "blueberry", "watermelon", "kiwi", "cherry", "peach",
      "plum", "blackberry", "raspberry", "pear", "grapefruit", "apricot",
      "pomegranate", "fig", "papaya"
    ],
    hints: [
      "A fruit that can be red or green, often eaten as a snack",
      "A long yellow fruit, commonly used in smoothies",
      "A round orange fruit, rich in Vitamin C",
      "A red fruit with tiny seeds on the outside, used in desserts",
      "Small purple or green fruits, often used in wine",
      "A tropical fruit with a spiky exterior, used in fruit salads",
      "A sweet, juicy fruit with orange flesh, known as the 'king of fruits'",
      "A small blue fruit, not commonly found in India",
      "A large fruit with green skin and red flesh, very refreshing",
      "A small brown fruit with green flesh inside",
      "A small red fruit with a pit, used in many dishes",
      "A fuzzy fruit with a sweet, juicy center",
      "A small dark purple fruit, used in jams and pies",
      "A small dark fruit often used in desserts and jams",
      "A small red fruit used in jams and juices",
      "A fruit with a sweet and slightly grainy texture, often eaten fresh",
      "A citrus fruit that is tangy and often used in juices",
      "A small orange fruit with a sweet and tart taste",
      "A fruit with many seeds inside and a tough outer skin",
      "A tropical fruit with orange flesh and black seeds"
    ],
  },
  vegetables: {
    words: [
      "carrot", "potato", "tomato", "cucumber", "spinach", "broccoli",
      "cauliflower", "pepper", "onion", "garlic", "peas", "corn",
      "eggplant", "zucchini", "lettuce", "beetroot", "sweetpotato",
      "radish", "celery", "brusselsprouts", "artichoke"
    ],
    hints: [
      "An orange root vegetable, often used in salads and curries",
      "A starchy tuber, used in many Indian dishes like aloo gobi",
      "A red fruit often used in gravies and curries",
      "A long green vegetable, used in salads and raita",
      "A leafy green vegetable, used in saag and palak dishes",
      "A green vegetable resembling a tree, used in stir-fries",
      "A white vegetable, used in dishes like aloo-gobhi",
      "A vegetable that comes in many colors, used in curries",
      "A vegetable that makes you cry when cut, used in bhajis and curries",
      "A strong-smelling vegetable used in flavoring dishes",
      "Small green round seeds, used in curries and pulao",
      "A yellow vegetable often eaten as a side dish or in soups",
      "A purple vegetable, used in bhartas and curries",
      "A green squash used in many Indian dishes",
      "A leafy green vegetable used in salads and sandwiches",
      "A red root vegetable used in salads and curries",
      "A sweet orange tuber often used in chaat and desserts",
      "A small round vegetable with a spicy taste, used in salads",
      "A crunchy stalk used in soups and salads, not common in Indian cuisine",
      "Small cabbage-like vegetables, often seen in festive dishes",
      "A thistle-like vegetable, not commonly found in Indian markets"
    ],
  },
};
let getbutton = true;
var guesses = [];
let alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let currentCategory = {};
let hint = "";
let randWord = "";
let counter = 0;
let correctGuesses = 0;
let falseGuess = 0;
let previousGuess = "";

//Selct the category
const selector = () => {
  document.getElementById("selector").style.display = "none";
  document.getElementById("starter").style.display = "flex";
};

// Start the game and initialization
const startGame = (category) => {
  currentCategory = categories[category];
  document.querySelector("body").style.backgroundColor = "black";
  document.getElementById("starter").style.display = "none";
  document.getElementById("container").style.display = "flex";
  getbuttons();
  wordPicker();
};

// Picks the random Word
const wordPicker = () => {
  const idx = Math.floor(Math.random() * currentCategory.words.length);
  randWord = currentCategory.words[idx];
  hint = currentCategory.hints[idx];
  console.log(randWord);
  wordToGuess();
};

// Create the keyboard
const getbuttons = () => {
  if (getbutton) {
    const myButtons = document.getElementById("keyboard");
    const letters = document.createElement("ul");
    letters.id = "alphabet";

    for (let i = 0; i < alphabets.length; i++) {
      const button = document.createElement("button");
      button.id = `letter-${alphabets[i]}`;
      button.innerHTML = alphabets[i].toUpperCase();
      button.setAttribute("class", "letter");
      button.setAttribute("value", alphabets[i]);
      button.onclick = function () {
        handleGuess(this.getAttribute("value"), this);
      };
      letters.appendChild(button);
    }
    myButtons.appendChild(letters);
    getbutton = false;
  }
};

// Display the word to guess with blanks
const wordToGuess = () => {
  const blank = document.getElementById("blank");
  blank.innerHTML = ""; // Clear previous content
  guesses = [];
  const correct = document.createElement("ul");
  correct.setAttribute("id", "my-word");
  for (let i = 0; i < randWord.length; i++) {
    const guess = document.createElement("li");
    guess.setAttribute("class", "guess");
    if (randWord[i] === "-") {
      guess.innerHTML = "-";
    } else {
      guess.innerHTML = "_";
    }
    guesses.push(guess);
    correct.appendChild(guess);
  }
  blank.appendChild(correct);
};

// Handle the guess
const handleGuess = (guess, element) => {
  let guessedCorrectly = false;
  if (!(previousGuess === guess)) {
    for (let i = 0; i < randWord.length; i++) {
      if (randWord[i] === guess) {
        guesses[i].innerHTML = guess.toUpperCase();
        correctGuesses += 1;
        guessedCorrectly = true;
      }
    }
    if (!guessedCorrectly) {
      wrongGuess();
    }
  }
  // Disable the clicked button
  element.disabled = true;
  element.classList.add("active");
  previousGuess = guess;

  // Check if the game is won
  if (correctGuesses === randWord.length) {
    document.getElementById("message").innerHTML =
      "Congratulations! You've won!"; for (i = 0; i < alphabets.length; i++) {
        button = document.getElementById(`letter-${alphabets[i]}`);
        button.disabled = true;
      }
    confettiAnimation();
  }
};

function opnHint() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("output").innerText = hint;
}

function clsHint() {
  document.getElementById("popup").style.display = "none";
}

// Function to draw the stickman
function draw() {
  const c = document.getElementById("hangMan");
  const ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height); // Clear the canvas before drawing
  ctx.lineWidth = 2;

  // Drawing all parts based on the falseGuess count
  if (falseGuess > 0) {
    ctx.moveTo(15, 140);
    ctx.lineTo(150, 140);
    ctx.stroke();
    ctx.clearRect(0, 0, 150, 138);
  }
  if (falseGuess > 1) {
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 140);
    ctx.moveTo(20, 50);
    ctx.lineTo(50, 30);
    ctx.stroke();
    ctx.clearRect(60, 40, 110, 90);
  }
  if (falseGuess > 2) {
    ctx.moveTo(10, 30);
    ctx.lineTo(100, 30);
    ctx.stroke();
    ctx.clearRect(60, 40, 110, 90);
  }
  if (falseGuess > 3) {
    ctx.beginPath();
    ctx.arc(90, 30, 2, 0, 2 * Math.PI);
    ctx.moveTo(90, 30);
    ctx.lineTo(90, 70);
    ctx.stroke();
    ctx.clearRect(60, 69, 90, 70.03);
  }
  if (falseGuess > 4) {
    ctx.clearRect(60, 69, 90, 70.03);
    ctx.beginPath();
    ctx.arc(90, 77, 7, 0, 2 * Math.PI);
    ctx.stroke();
  }
  if (falseGuess > 5) {
    ctx.moveTo(90, 83);
    ctx.lineTo(90, 110);
    ctx.stroke();
  }
  if (falseGuess > 6) {
    ctx.moveTo(90, 87);
    ctx.lineTo(80, 105);
    ctx.moveTo(90, 87);
    ctx.lineTo(100, 105);
    ctx.stroke();
  }
  if (falseGuess > 7) {
    ctx.moveTo(90, 110);
    ctx.lineTo(80, 125);
    ctx.moveTo(90, 110);
    ctx.lineTo(100, 125);
    ctx.stroke();
  }

  if (falseGuess >= 8) {
    document.getElementById("message").innerHTML =
      "Game Over! The correct word was " +
      randWord[0].toUpperCase() +
      randWord.slice(1);
    for (i = 0; i < alphabets.length; i++) {
      button = document.getElementById(`letter-${alphabets[i]}`);
      button.disabled = true;
    }
  }
}

// Handle wrong guesses
const wrongGuess = () => {
  falseGuess += 1;
  draw();
};

// Reset the game
const resetGame = () => {
  const c = document.getElementById("hangMan");
  const ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  document.getElementById("keyboard").innerHTML = "";
  document.getElementById("message").innerHTML = "";
  correctGuesses = 0;
  falseGuess = 0;
  previousGuess = "";
  getbutton = true;
  startGame(
    Object.keys(categories)[
      Math.floor(Math.random() * Object.keys(categories).length)
    ]
  ); // Start with a random category
};

// Add an event listener to the "Play Again" button
document.getElementById("playAgain").onclick = resetGame;

function confettiAnimation() {
  let duration = 5 * 1000;
  let animationEnd = Date.now() + duration;
  let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  let interval = setInterval(function () {
    let timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    let particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}
