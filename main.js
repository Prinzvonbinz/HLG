const categories = {
  LandesBevölkerung: [
    { name: "China", value: 1444216107 },
    { name: "Indien", value: 1393409038 },
    { name: "USA", value: 331893745 },
    { name: "Indonesien", value: 273523621 },
    { name: "Pakistan", value: 220892331 },
    { name: "Brasilien", value: 212821986 },
    { name: "Nigeria", value: 206139587 },
    { name: "Bangladesch", value: 164689383 },
    { name: "Russland", value: 145912025 },
    { name: "Mexiko", value: 128932753 },
    { name: "Japan", value: 125836021 },
    { name: "Äthiopien", value: 114963583 },
    { name: "Philippinen", value: 109581085 },
    { name: "Ägypten", value: 102334403 },
    { name: "Vietnam", value: 97338583 },
    { name: "DR Kongo", value: 89561403 },
    { name: "Iran", value: 83992953 },
    { name: "Türkei", value: 84339067 },
    { name: "Deutschland", value: 83783942 },
    { name: "Thailand", value: 69799978 },
    { name: "Frankreich", value: 65273512 },
    { name: "Vereinigtes Königreich", value: 67886011 },
    { name: "Italien", value: 60461828 },
    { name: "Südafrika", value: 59308690 },
    { name: "Tansania", value: 59734218 },
    { name: "Myanmar", value: 54409800 },
    { name: "Südkorea", value: 51269185 },
    { name: "Kolumbien", value: 50882891 },
    { name: "Kenia", value: 53771296 },
    { name: "Spanien", value: 46754778 },
    { name: "Argentinien", value: 45195774 },
    { name: "Algerien", value: 43851043 },
    { name: "Sudan", value: 43849260 },
    { name: "Ukraine", value: 43733762 },
    { name: "Uganda", value: 45741007 },
    { name: "Irak", value: 40222493 },
    { name: "Polen", value: 37846611 },
    { name: "Kanada", value: 38067913 },
    { name: "Marokko", value: 36910560 },
    { name: "Saudi-Arabien", value: 34813871 },
    { name: "Usbekistan", value: 33469203 },
    { name: "Peru", value: 32971846 },
    { name: "Angola", value: 32866268 },
    { name: "Malaysia", value: 32365999 },
    { name: "Mosambik", value: 31255435 },
    { name: "Ghana", value: 31072940 },
    { name: "Jemen", value: 29825968 },
    { name: "Nepal", value: 29136808 },
    { name: "Venezuela", value: 28435943 },
    { name: "Madagaskar", value: 27691018 }
  ],
vPromiCash: [
    { name: "Jeff Bezos", value: 185000000000 },
    { name: "Elon Musk", value: 180000000000 },
    { name: "Bernard Arnault", value: 150000000000 },
    { name: "Bill Gates", value: 130000000000 },
    { name: "Mark Zuckerberg", value: 120000000000 },
    { name: "Warren Buffett", value: 110000000000 },
    { name: "Larry Ellison", value: 105000000000 },
    { name: "Larry Page", value: 100000000000 },
    { name: "Sergey Brin", value: 98000000000 },
    { name: "Mukesh Ambani", value: 94000000000 },
    { name: "Steve Ballmer", value: 90000000000 },
    { name: "Francoise Bettencourt Meyers", value: 90000000000 },
    { name: "Amancio Ortega", value: 88000000000 },
    { name: "Carlos Slim Helu", value: 82000000000 },
    { name: "Jim Walton", value: 70000000000 },
    { name: "Alice Walton", value: 69000000000 },
    { name: "Rob Walton", value: 68000000000 },
    { name: "Michael Bloomberg", value: 67000000000 },
    { name: "Julia Koch", value: 60000000000 },
    { name: "MacKenzie Scott", value: 59000000000 },
    { name: "Charles Koch", value: 58000000000 },
    { name: "Phil Knight", value: 54000000000 },
    { name: "Mark Cuban", value: 4000000000 },
    { name: "Oprah Winfrey", value: 2700000000 },
    { name: "Kylie Jenner", value: 9000000000 },
    { name: "Rihanna", value: 1700000000 },
    { name: "Jay-Z", value: 1400000000 },
    { name: "Kim Kardashian", value: 1200000000 },
    { name: "Dr. Dre", value: 820000000 },
    { name: "Ellen DeGeneres", value: 330000000 },
    { name: "LeBron James", value: 480000000 },
    { name: "Cristiano Ronaldo", value: 500000000 },
    { name: "Lionel Messi", value: 400000000 },
    { name: "Taylor Swift", value: 365000000 },
    { name: "Beyoncé", value: 450000000 },
    { name: "Ariana Grande", value: 180000000 },
    { name: "Kanye West", value: 1400000000 },
    { name: "Jennifer Lopez", value: 400000000 },
    { name: "Dwayne Johnson", value: 320000000 },
    { name: "Billie Eilish", value: 250000000 },
    { name: "Ed Sheeran", value: 220000000 },
    { name: "Elton John", value: 500000000 },
    { name: "Madonna", value: 600000000 },
    { name: "Bruce Springsteen", value: 500000000 },
    { name: "Paul McCartney", value: 1200000000 },
    { name: "George Lucas", value: 7000000000 }
  ],

  GamesVerkauft: [
    { name: "Minecraft", value: 238000000 },
    { name: "Grand Theft Auto V", value: 185000000 },
    { name: "Tetris", value: 170000000 },
    { name: "Wii Sports", value: 82940000 },
    { name: "PlayerUnknown's Battlegrounds", value: 70000000 },
    { name: "Pokémon Rot/Blau", value: 47000000 },
    { name: "Super Mario Bros.", value: 40200000 },
    { name: "Mario Kart 8", value: 38200000 },
    { name: "Wii Fit", value: 43300000 },
    { name: "The Legend of Zelda: Breath of the Wild", value: 27000000 },
    { name: "Red Dead Redemption 2", value: 44000000 },
    { name: "Call of Duty: Modern Warfare 3", value: 30000000 },
    { name: "FIFA 21", value: 31000000 },
    { name: "Animal Crossing: New Horizons", value: 35000000 },
    { name: "Super Smash Bros. Ultimate", value: 25000000 },
    { name: "Pokémon Schwert/Schild", value: 23000000 },
    { name: "Halo 3", value: 14000000 },
    { name: "Among Us", value: 10000000 },
    { name: "Cyberpunk 2077", value: 13000000 },
    { name: "The Sims 4", value: 22000000 },
    { name: "Terraria", value: 35000000 },
    { name: "Minecraft Dungeons", value: 8000000 },
    { name: "GTA San Andreas", value: 27000000 },
    { name: "Minecraft: Pocket Edition", value: 100000000 },
    { name: "The Witcher 3", value: 28000000 },
    { name: "Fortnite", value: 350000000 },
    { name: "Super Mario Odyssey", value: 21000000 },
    { name: "Candy Crush Saga", value: 270000000 },
    { name: "Pac-Man", value: 40000000 },
    { name: "Call of Duty: Black Ops", value: 30000000 },
    { name: "Halo: Reach", value: 12000000 },
    { name: "PUBG Mobile", value: 200000000 },
    { name: "League of Legends", value: 115000000 },
    { name: "FIFA 20", value: 31000000 },
    { name: "Call of Duty: Warzone", value: 100000000 },
    { name: "Minecraft Earth", value: 3000000 },
    { name: "Animal Crossing: Wild World", value: 31000000 },
    { name: "Super Mario 64", value: 11500000 },
    { name: "Half-Life 2", value: 12500000 },
    { name: "The Elder Scrolls V: Skyrim", value: 30000000 },
    { name: "Overwatch", value: 50000000 },
    { name: "God of War (2018)", value: 19000000 },
    { name: "Final Fantasy VII Remake", value: 5300000 },
    { name: "Metal Gear Solid V", value: 12500000 },
    { name: "Dark Souls III", value: 10000000 },
    { name: "Assassin's Creed Valhalla", value: 12000000 },
    { name: "Monster Hunter: World", value: 17000000 },
    { name: "Destiny 2", value: 31000000 },
    { name: "Minecraft: Java Edition", value: 150000000 }
  ],

  SongsGehört: [
    { name: "Shape of You - Ed Sheeran", value: 2800000000 },
    { name: "Blinding Lights - The Weeknd", value: 2600000000 },
    { name: "Dance Monkey - Tones and I", value: 2300000000 },
    { name: "Rockstar - Post Malone", value: 2200000000 },
    { name: "Someone You Loved - Lewis Capaldi", value: 2100000000 },
    { name: "Sunflower - Post Malone", value: 2000000000 },
    { name: "Bad Guy - Billie Eilish", value: 1900000000 },
    { name: "Señorita - Shawn Mendes & Camila Cabello", value: 1850000000 },
    { name: "Old Town Road - Lil Nas X", value: 1800000000 },
    { name: "Havana - Camila Cabello", value: 1750000000 },
    { name: "Closer - The Chainsmokers", value: 1700000000 },
    { name: "Perfect - Ed Sheeran", value: 1650000000 },
    { name: "Girls Like You - Maroon 5", value: 1600000000 },
    { name: "Believer - Imagine Dragons", value: 1550000000 },
    { name: "Counting Stars - OneRepublic", value: 1500000000 },
    { name: "Thunder - Imagine Dragons", value: 1450000000 },
    { name: "Love Yourself - Justin Bieber", value: 1400000000 },
    { name: "Faded - Alan Walker", value: 1350000000 },
    { name: "Memories - Maroon 5", value: 1300000000 },
    { name: "Cheap Thrills - Sia", value: 1250000000 },
    { name: "Wake Me Up - Avicii", value: 1200000000 },
    { name: "Lean On - Major Lazer", value: 1150000000 },
    { name: "Let Her Go - Passenger", value: 1100000000 },
    { name: "Hello - Adele", value: 1050000000 },
    { name: "Stay - Rihanna", value: 1000000000 },
    { name: "Roar - Katy Perry", value: 950000000 },
    { name: "Counting Stars - OneRepublic", value: 900000000 },
    { name: "Thinking Out Loud - Ed Sheeran", value: 850000000 },
    { name: "Wake Me Up Before You Go-Go - Wham!", value: 800000000 },
    { name: "Despacito - Luis Fonsi", value: 750000000 },
    { name: "Love Me Like You Do - Ellie Goulding", value: 700000000 },
    { name: "All of Me - John Legend", value: 650000000 },
    { name: "Sorry - Justin Bieber", value: 600000000 },
    { name: "I Gotta Feeling - Black Eyed Peas", value: 550000000 },
    { name: "Sugar - Maroon 5", value: 500000000 },
    { name: "Happy - Pharrell Williams", value: 450000000 },
    { name: "Uptown Funk - Mark Ronson", value: 400000000 },
    { name: "Chandelier - Sia", value: 350000000 },
    { name: "Can't Stop the Feeling - Justin Timberlake", value: 300000000 },
    { name: "Shake It Off - Taylor Swift", value: 250000000 },
    { name: "Rolling in the Deep - Adele", value: 200000000 },
    { name: "Blurred Lines - Robin Thicke", value: 150000000 },
    { name: "Royals - Lorde", value: 100000000 },
    { name: "Call Me Maybe - Carly Rae Jepsen", value: 95000000 },
    { name: "Firework - Katy Perry", value: 90000000 },
    { name: "Bad Romance - Lady Gaga", value: 85000000 },
    { name: "Tik Tok - Kesha", value: 80000000 }
  ],

OnlineSuchen : [
    { name: "Facebook", value: 26000000000 },
    { name: "YouTube", value: 25000000000 },
    { name: "Google", value: 24000000000 },
    { name: "Amazon", value: 23000000000 },
    { name: "Wikipedia", value: 22000000000 },
    { name: "Instagram", value: 21000000000 },
    { name: "Twitter", value: 20000000000 },
    { name: "Netflix", value: 19000000000 },
    { name: "WhatsApp", value: 18000000000 },
    { name: "eBay", value: 17000000000 },
    { name: "LinkedIn", value: 16000000000 },
    { name: "TikTok", value: 15000000000 },
    { name: "Reddit", value: 14000000000 },
    { name: "Pinterest", value: 13000000000 },
    { name: "Zoom", value: 12000000000 },
    { name: "Craigslist", value: 11000000000 },
    { name: "Quora", value: 10000000000 },
    { name: "CNN", value: 9000000000 },
    { name: "BBC", value: 8500000000 },
    { name: "Yahoo", value: 8000000000 },
    { name: "Bing", value: 7500000000 },
    { name: "Microsoft", value: 7000000000 },
    { name: "Apple", value: 6500000000 },
    { name: "Adobe", value: 6000000000 },
    { name: "Spotify", value: 5500000000 },
    { name: "Dropbox", value: 5000000000 },
    { name: "Slack", value: 4500000000 },
    { name: "Uber", value: 4000000000 },
    { name: "Airbnb", value: 3500000000 },
    { name: "Pinterest", value: 3000000000 },
    { name: "Zoom", value: 2500000000 },
    { name: "Salesforce", value: 2000000000 },
    { name: "PayPal", value: 1800000000 },
    { name: "eBay", value: 1600000000 },
    { name: "Netflix", value: 1400000000 },
    { name: "Dropbox", value: 1200000000 },
    { name: "Hulu", value: 1000000000 },
    { name: "Shopify", value: 900000000 },
    { name: "TikTok", value: 800000000 },
    { name: "Reddit", value: 700000000 },
    { name: "BBC", value: 600000000 },
    { name: "CNN", value: 500000000 },
    { name: "Twitter", value: 400000000 },
    { name: "Quora", value: 350000000 },
    { name: "Yelp", value: 300000000 },
    { name: "TripAdvisor", value: 250000000 },
    ]
};
let currentCategory = [];
let score = 0;
let highscore = 0;
let currentIndex = 0;

const categoryButtonsContainer = document.getElementById("category-buttons");
const gameContainer = document.getElementById("game-container");
const leftName = document.getElementById("left-name");
const leftValue = document.getElementById("left-value");
const rightName = document.getElementById("right-name");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const highscoreDisplay = document.getElementById("highscore");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const btnHigher = document.getElementById("btn-higher");
const btnLower = document.getElementById("btn-lower");
const backToMenu = document.getElementById("back-to-menu");

const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");

function loadHighscore(category) {
  return localStorage.getItem(`highscore_${category}`) || 0;
}

function saveHighscore(category, score) {
  const current = loadHighscore(category);
  if (score > current) {
    localStorage.setItem(`highscore_${category}`, score);
  }
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startGame(categoryName) {
  currentCategory = shuffle([...categories[categoryName]]);
  highscore = loadHighscore(categoryName);
  currentIndex = 0;
  score = 0;

  updateUI();
  categoryButtonsContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  scoreContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
}

function updateUI() {
  const leftItem = currentCategory[currentIndex];
  const rightItem = currentCategory[currentIndex + 1];

  if (!rightItem) return endGame();

  leftName.textContent = leftItem.name;
  leftValue.textContent = leftItem.value.toLocaleString();
  rightName.textContent = rightItem.name;
  scoreDisplay.textContent = score;
  highscoreDisplay.textContent = highscore;
}

function guess(higher) {
  const leftItem = currentCategory[currentIndex];
  const rightItem = currentCategory[currentIndex + 1];

  const isCorrect = (higher && rightItem.value >= leftItem.value) || (!higher && rightItem.value < leftItem.value);
  document.body.classList.remove("flash-green", "flash-red");

  if (isCorrect) {
    score++;
    soundCorrect.play();
    document.body.classList.add("flash-green");
    currentIndex++;
    setTimeout(updateUI, 500);
  } else {
    soundWrong.play();
    document.body.classList.add("flash-red");
    endGame();
  }
}

function endGame() {
  saveHighscore(currentCategory[0].category, score);
  resultText.textContent = `Game Over! Dein Score: ${score}`;
  gameContainer.classList.add("hidden");
  scoreContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
}

function returnToMenu() {
  categoryButtonsContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
}

btnHigher.addEventListener("click", () => guess(true));
btnLower.addEventListener("click", () => guess(false));
backToMenu.addEventListener("click", returnToMenu);

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(categories).forEach(cat => {
    const btn = document.createElement("button");
    btn.classList.add("category-btn");
    btn.textContent = cat;
    btn.addEventListener("click", () => startGame(cat));
    categoryButtonsContainer.appendChild(btn);
  });
});
