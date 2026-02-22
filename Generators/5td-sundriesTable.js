/*
This is based on the Five Torches Deep Book
*/

function rollSundries(howMany) {
    const sundriesTable = ["100' Rope", "10' Iron Chain", "Iron Manacles", "Hooded Lantern", "Sack of Marbles", "10' Oilskin Tarp", "Small Barrel", "Iron Crowbar", "Hammer, Chisel", "50' of Bandages", "30' Copper Wire", "Noisemaker, Auto", "Thread, Needle", "Folding Shovel", "Glass Lens", "Steel Mirror", "Fishing Net", "Treated Sinew", "Roll of Raw Wool", "Coarse Rasp"];
    const sundriesRolled = [];
    for (i=0; i<howMany; i++) {
        var randomSundry = sundriesTable[Math.floor(Math.random()*20)];
        sundriesRolled.push(randomSundry);
    }
    for (j=0; j<sundriesRolled.length; j++){
        document.getElementById("sundriesCreated").innerHTML += "<li>" + sundriesRolled[j] + "</li>";
    }
}