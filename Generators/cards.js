const deck = ["A♦️", "2♦️", "3♦️", "4♦️", "5♦️", "6♦️", "7♦️", "8♦️", "9♦️", "10♦️", "J♦️", "Q♦️", "K♦️", "A♥️", "2♥️", "3♥️", "4♥️", "5♥️", "6♥️", "7♥️", "8♥️", "9♥️", "10♥️", "J♥️", "Q♥️", "K♥️", "A♣️", "2♣️", "3♣️", "4♣️", "5♣️", "6♣️", "7♣️", "8♣️", "9♣️", "10♣️", "J♣️", "Q♣️", "K♣️", "A♠️", "2♠️", "3♠️", "4♠️", "5♠️", "6♠️", "7♠️", "8♠️", "9♠️", "10♠️", "J♠️", "Q♠️", "K♠️", "🤡", "🤡"];

let shuffled = [...deck];

document.getElementById("left").innerHTML = `${shuffled.length}`;

function random(array) {
    if (!array?.length) {
        return;
    }

    let index = Math.floor(Math.random() * array.length);

    return array[index];
}

function draw(cards) {
    if (cards > shuffled?.length) {
        return `<i>Not enough cards!</i>`;
    }

    let hand = [];

    for (let i = 0; i < cards; i++) {
        let card = random(shuffled);
        hand.push(card);
        shuffled.splice(shuffled.indexOf(card), 1);
    }

    return hand.join(", ");
}

function shuffle() {
    shuffled = [...deck];
    document.getElementById("left").innerHTML = `${shuffled.length}`;
    document.getElementById("drawn").innerHTML = `<i>Shuffled</i>`;
}

function log(cards) {
    document.getElementById("drawn").innerHTML = `${draw(cards)}`;
    document.getElementById("left").innerHTML = `${shuffled.length}`;
}