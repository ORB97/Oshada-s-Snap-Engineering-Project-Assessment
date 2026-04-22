/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another object to the characters array a few lines down. Reload
 *    your browser and observe what happens. You should see a new card appear
 *    with the character you added.
 */

const AANG_URL =
  "https://static.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png";
const KATARA_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Katara_character.png/500px-Katara_character.png";
const SOKKA_URL =
  "https://upload.wikimedia.org/wikipedia/en/c/cc/Sokka.png";
const ZUKO_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/3e/Prince_Zuko.jpg";
const TOPH_URL =
  "https://upload.wikimedia.org/wikipedia/en/4/46/Toph_Beifong.png";
const IROH_URL =
  "https://upload.wikimedia.org/wikipedia/en/b/bb/General_Iroh.jpg";


// Aged image URLs 

const AANG_AGED_URL = 
  "https://cdn.nerdist.com/wp-content/uploads/2026/03/12070547/First-look-at-adult-aang-from-the-legend-of-aang-new-avatar-the-last-airbender-movie.jpg";
const KATARA_AGED_URL = 
  "https://cdn.nerdist.com/wp-content/uploads/2026/03/12071632/First-look-at-adult-Katara-from-the-legend-of-aang-new-avatar-the-last-airbender-movie-2.jpg";
const SOKKA_AGED_URL = 
  "https://preview.redd.it/sokkas-shirt-design-for-the-new-movie-v0-aabhyf0v18ug1.jpeg?width=640&crop=smart&auto=webp&s=63232f68c06fba2cb88822e465cb74c7fbb07594";
const ZUKO_AGED_URL = 
  "https://cdn.nerdist.com/wp-content/uploads/2026/03/12070506/First-look-at-adult-zuko-from-the-legend-of-aang-new-avatar-the-last-airbender-movie.jpg";
const TOPH_AGED_URL = 
  "https://pbs.twimg.com/media/HDLKKO8bQAAibVr.jpg";
const IROH_AGED_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/5/51/System_Message_%22Visualeditor-dialog-error%22_pop-up.png";
 

// Using objects lets us group related information (name, nation, bending, role, quote, and image)
// together instead of storing everything in separate arrays.
// Each object also has an "aged" boolean field that tracks whether the card
// is currently showing the character's older movie appearance or not.
let characters = [
  {
    name: "Aang",
    nation: "Air Nomads",
    bending: "All Elements (Avatar)",
    role: "The Avatar",
    quote: "I'm just a kid. I'm not ready to save the world.",
    image: AANG_URL,
    agedImage: AANG_AGED_URL,
    aged: false,
  },
  {
    name: "Katara",
    nation: "Water Tribe",
    bending: "Waterbending",
    role: "Master Waterbender & Healer",
    quote: "I will never, ever turn my back on people who need me!",
    image: KATARA_URL,
    agedImage: KATARA_AGED_URL,
    aged: false,
  },
  {
    name: "Sokka",
    nation: "Water Tribe",
    bending: "None",
    role: "Warrior & Strategist",
    quote: "That's rough, buddy.",
    image: SOKKA_URL,
    agedImage: SOKKA_AGED_URL,
    aged: false,
  },
  {
    name: "Zuko",
    nation: "Fire Nation",
    bending: "Firebending",
    role: "Crown Prince / Fire Lord",
    quote: "I've always had to struggle and fight, and that's made me strong.",
    image: ZUKO_URL,
    agedImage: ZUKO_AGED_URL,
    aged: false,
  },
  {
    name: "Toph Beifong",
    nation: "Earth Kingdom",
    bending: "Earthbending & Metalbending",
    role: "Greatest Earthbender Alive",
    quote: "I am the greatest earthbender in the world!",
    image: TOPH_URL,
    agedImage: TOPH_AGED_URL,
    aged: false,
  },
  {
    name: "Iroh",
    nation: "Fire Nation",
    bending: "Firebending",
    role: "General & Mentor",
    quote: "Destiny is a funny thing. You never know how things are going to work out.",
    image: IROH_URL,
    agedImage: IROH_AGED_URL,
    aged: false,
  },
];
 
// This function adds cards to the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
 
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
 
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, character, i); // Edit card content
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}
 
function editCardContent(card, character, index) {
  card.style.display = "block";
 
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = character.name;
 
  const cardImage = card.querySelector("img");
  // Show aged image if character.aged is true, otherwise show normal image
  cardImage.src = character.aged ? character.agedImage : character.image;
  cardImage.alt = character.name + " Portrait";
 
  // Fill in the bullet points with data from the character object
  const listItems = card.querySelectorAll("li");
  listItems[0].textContent = "Nation: " + character.nation;
  listItems[1].textContent = "Bending: " + character.bending;
  listItems[2].textContent = "Role: " + character.role;
 
  // Add the character's quote below the list
  const quoteEl = card.querySelector(".character-quote");
  quoteEl.textContent = '"' + character.quote + '"';
 
  // Feature 3: wire up the age toggle button on this card
  const ageBtn = card.querySelector(".age-btn");
  ageBtn.textContent = character.aged ? "Show Young" : "Show in Movie";
  ageBtn.onclick = function () {
    toggleAge(index);
  };
 
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", character.name, "- html: ", card);
}
 
// Feature 3: Age Toggle — flips the "aged" boolean on the character object
// at the given index, then re-renders all cards to reflect the change
function toggleAge(index) {
  characters[index].aged = !characters[index].aged; // flip true to false or false to true
  showCards();
}
 
// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
 
// Feature 1: Search — filters cards by character name as the user types
function handleSearch() {
  const searchText = document.getElementById("search-input").value.toLowerCase();
  const allCharacters = [...characters]; // copy so we don't lose original data
 
  characters = allCharacters.filter(function (character) {
    return character.name.toLowerCase().includes(searchText);
  });
 
  showCards();
  characters = allCharacters; // restore full array after displaying
}
 
// Feature 2: Filter by Nation — shows only characters from the selected nation
function handleFilter() {
  const selectedNation = document.getElementById("nation-filter").value;
  const allCharacters = [...characters];
 
  if (selectedNation === "All") {
    showCards();
    return;
  }
 
  characters = allCharacters.filter(function (character) {
    return character.nation === selectedNation;
  });
 
  showCards();
  characters = allCharacters; // restore full array after displaying
}
 
function quoteAlert() {
  console.log("Button Clicked!");
  // Pick a random character quote to display
  let randomIndex = Math.floor(Math.random() * characters.length);
  alert(characters[randomIndex].name + ' says: "' + characters[randomIndex].quote + '"');
}
 
function removeLastCard() {
  characters.pop(); // Remove last item in characters array
  showCards(); // Call showCards again to refresh
}
 
