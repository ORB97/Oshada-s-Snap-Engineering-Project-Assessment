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
  "https://static.wikia.nocookie.net/avatar/images/3/38/Katara.png";
const SOKKA_URL =
  "https://static.wikia.nocookie.net/avatar/images/a/a3/Sokka.png";
const ZUKO_URL =
  "https://static.wikia.nocookie.net/avatar/images/b/bd/Zuko.png";
const TOPH_URL =
  "https://static.wikia.nocookie.net/avatar/images/6/66/Toph_Beifong.png";
const IROH_URL =
  "https://static.wikia.nocookie.net/avatar/images/1/10/Iroh_smiling.png";


// Using objects lets us group related information (name, nation, bending, role, quote, and image)
// together instead of storing everything in separate arrays.

let characters = [
  {
    name: "Aang",
    nation: "Air Nomads",
    bending: "All Elements (Avatar)",
    role: "The Avatar",
    quote: "I'm just a kid. I'm not ready to save the world.",
    image: AANG_URL,
  },
  {
    name: "Katara",
    nation: "Water Tribe",
    bending: "Waterbending",
    role: "Master Waterbender & Healer",
    quote: "I will never, ever turn my back on people who need me!",
    image: KATARA_URL,
  },
  {
    name: "Sokka",
    nation: "Water Tribe",
    bending: "None",
    role: "Warrior & Strategist",
    quote: "That's rough, buddy.",
    image: SOKKA_URL,
  },
  {
    name: "Zuko",
    nation: "Fire Nation",
    bending: "Firebending",
    role: "Crown Prince / Fire Lord",
    quote: "I've always had to struggle and fight, and that's made me strong.",
    image: ZUKO_URL,
  },
  {
    name: "Toph Beifong",
    nation: "Earth Kingdom",
    bending: "Earthbending & Metalbending",
    role: "Greatest Earthbender Alive",
    quote: "I am the greatest earthbender in the world!",
    image: TOPH_URL,
  },
  {
    name: "Iroh",
    nation: "Fire Nation",
    bending: "Firebending",
    role: "General & Mentor",
    quote: "Destiny is a funny thing. You never know how things are going to work out.",
    image: IROH_URL,
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
    editCardContent(nextCard, character.name, character.image, character); // Edit card content
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL, character) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Portrait";

  // Fill in the bullet points with data from the character object
  const listItems = card.querySelectorAll("li");
  listItems[0].textContent = "Nation: " + character.nation;
  listItems[1].textContent = "Bending: " + character.bending;
  listItems[2].textContent = "Role: " + character.role;

  // Add the character's quote below the list
  const quoteEl = card.querySelector(".character-quote");
  quoteEl.textContent = '"' + character.quote + '"';

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
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
