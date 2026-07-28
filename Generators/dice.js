const dice = document.getElementById("dice");

let rolling = false;

function d(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function roll(sides, display) {
    if (rolling) {
        return;
    }

    rolling = true;

    let result = d(sides);

    let delay = 10;
    let frame = 0;

    function animate() {
        frame += 1;

        if (frame < 12) {
            display.innerHTML = `${d(sides)}`;
            delay += 18;
            setTimeout(animate, delay);
        }
        else {
            display.innerHTML = `${result}`;
            rolling = false;
        }
    }

    animate();
}