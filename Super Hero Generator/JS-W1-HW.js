// Arrays of sentence fragments

// Add an array of at least 5 Hero Adjectives
const heroAdjectives = ["Brooding", "Ruthless", "Mysterious", "Vengeful", "Unforgiving", "Cunning", "Relentless"];
// Add an array of at least 5 Hero Nouns
const heroNouns = ["Warrior", "Guardian", "Rogue", "Defender", "Shadow", "Titan", "Wraith", "Reaper", "Outcast", "Vigilante", "Shadow"];
// Add an array of at least 5 Super Hero Powers
const superPowers = ["Flight", "Telekenisis", "Super Strength", "Invisibility", "Speed", "Necromancy", "Fear Inducement", "Mind Control", "Regeneration"];
// Add an array of at least 5 Super Hero Purpose/Mission Statements
const superPurposes = ["to protect the innocent", "to fight for justice", "to protect the city", "to save the world", "defend the weak", "uphold Peace", "to atone for past sins", "to deliver brutal justice", "to seek vengeance"];

// Create a function to generate a random superhero name and description
function generateSuperHero() {
    const adjectives = heroAdjectives[Math.floor(Math.random() * heroAdjectives.length)];
    const noun = heroNouns[Math.floor(Math.random() * heroNouns.length)];
    const power = superPowers[Math.floor(Math.random() * superPowers.length)];
    const purpose = superPurposes[Math.floor(Math.random() * superPurposes.length)];



 // Save the super hero name and description as variables
  const heroName = `${adjectives} ${noun}`;
  const heroDescription = `This Super hero has the power of ${power} and their mission is to ${purpose}`;

    //Display the super hero name and description inside the DOM
    document.getElementById("hero-name").textContent = heroName;
    document.getElementById("hero-description").textContent = heroDescription;
}    
// Add event listener to the button
document.getElementById("generate-button").addEventListener("click", generateSuperHero);

