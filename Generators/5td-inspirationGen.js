/*
This is based on the Five Torches Deep Book
*/

const thingTab = ["Deity", "Mage", "Monarch", "Warlord", "Monster", "Horde", "Kingdom", "Plane", "Artifact", "Stranger", "Cult", "Landmark"];
const actionTab = ["Destroy", "Build", "Bond", "Steal", "Corrupt", "Control", "Protect", "Empower", "Move", "Weaken", "Seal", "Discover"];
const falloutTab = ["War", "Disease", "Famine", "Upheaval", "Summoning", "Growth", "Cataclysm", "Desecration", "Slavery", "Tyranny", "Isolation", "Resolution"];

function inspoGen() {
    document.getElementById("inspoRes").innerHTML = "<b>Thing > Action > Thing > Fallout: </b>" + thingTab[Math.floor(Math.random()*12)] + " > " + actionTab[Math.floor(Math.random()*12)] + " > " + thingTab[Math.floor(Math.random()*12)] + " > " + falloutTab[Math.floor(Math.random()*12)];
}

const natureTab = ["Aberrant", "Infernal", "Cruel", "Predatory", "Corrupted", "Primordial", "Extraplanar", "Mercurial", "Dominating", "Selfish", "Selfless", "Liberating", "Axiomatic", "Natural", "Fledgling", "Purified", "Nurturing", "Kind", "Sacred", "Divine"];
const actionTab2 = ["Biting", "Stabbing", "Running", "Climbing", "Flying", "Marching", "Seeking", "Chanting", "Weaving", "Dancing", "Binding", "Collapsing", "Healing", "Lifting", "Burying", "Enrapturing", "Worshipping", "Loving", "Hating", "Fearing"];
const materialTab = ["Polished Stone", "Raging Fire", "Choking Smoke", "Jagged Obsidian", "Rusted Iron", "Lodestone", "Frozen Crystal", "Fractal Geode", "Warm Wood", "Fluffy Snow", "Gentle Breeze", "Ancient Antler", "Woven Silk", "Green Loam", "Wispy Veil", "Oiled Leather", "Cut Gemstone", "Glowing Bronze", "Rotten Flesh", "Creaking Bones"];
const emotionTab = ["Ecstasy", "Admiration", "Terror", "Amazement", "Grief", "Loathing", "Rage", "Vigilance", "Joy", "Trust", "Contempt", "Surprise", "Sadness", "Disgust", "Remorse", "Apathy", "Serenity", "Aggression", "Hope", "Love"];
const sensoryTab = ["Brilliant", "Prismatic", "Gloomy", "Void of Light", "Noxious Fumes", "Rotten Stench", "Wafting Rust", "Rain on Stone", "Rustling", "Shrieking", "Pounding", "Chiming", "Pulsing", "Aching", "Paralyzing", "Invigorating", "Intense Hunger", "Deathly Thirst", "Blinding", "Deafening"];

function descGen() {
    document.getElementById("natureDesc").innerHTML = natureTab[Math.floor(Math.random()*20)];
    document.getElementById("actionDesc").innerHTML = actionTab2[Math.floor(Math.random()*20)];
    document.getElementById("materDesc").innerHTML = materialTab[Math.floor(Math.random()*20)];
    document.getElementById("emoteDesc").innerHTML = emotionTab[Math.floor(Math.random()*20)];
    document.getElementById("senseDesc").innerHTML = sensoryTab[Math.floor(Math.random()*20)];
}

function clearDesc() {
    document.getElementById("natureDesc").innerHTML = "";
    document.getElementById("actionDesc").innerHTML = "";
    document.getElementById("materDesc").innerHTML = "";
    document.getElementById("emoteDesc").innerHTML = "";
    document.getElementById("senseDesc").innerHTML = "";
}