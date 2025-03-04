/*
Based on BOLD.
Creates challenges for RPG.
*/

function waylays() {
    var roll1 = Math.floor(Math.random()*10)+1;
    var roll2 = Math.floor(Math.random()*5)+1;
    var roll3 = Math.floor(Math.random()*100)+1;

    const modList = ["futile", "impassioned", "hesitant", "benign", "revered", "pedantic", "grim", "common", "bitter", "impassioned", "perceiving", "selfish", "prohibited", "brusque", "prosperous", "depraved", "comforting", "hopeless", "waning", "regimental", "harsh", "leeching", "tranquil", "inclusive", "righteous", "attentive", "inexplicable", "corrupt", "roaring", "unmistakable", "sudden", "impending", "fragile", "painless", "haphazard", "foreign", "ravenous", "adept", "barbaric", "disputable", "binding", "noble", "copious", "retired", "provoking", "ordinary", "prolonged", "deceiving", "savage", "drowsy", "mundane", "abrupt", "unforeseen", "peaceful", "steady", "abetting", "stale", "regular", "dubious", "exclusive", "unreliable", "altruistic", "storied", "tapped", "tedious", "quiet", "exotic", "impervious", "fledgling", "fixated", "illuminating", "exhausting", "honorable", "exclusive", "apparent", "valuable", "haunting", "migrant", "pleasant", "incompetent", "abnormal", "abstract", "irritating", "hidden", "hallowed", "illusory", "legendary", "prolonged", "meek", "proficient", "forbidden", "fantastic", "accidental", "malevolent", "unlikely", "problematic", "eccentric", "lethargic", "amusing", "afflicting"];
    var modifier = modList[roll3-1];

    function noun() {
        if (roll1 == 1) {
            if (roll2 == 1) {
                return "animals [Easy Foes]";
            }
            else if (roll2 == 2) {
                return "mooks [Easy Foes]";
            }
            else if (roll2 == 3) {
                return "mob [Easy Foes]";
            }
            else if (roll2 == 4) {
                return "bandits [Easy Foes]"
            }
            else if (roll2 == 5) {
                return "deputies [Easy Foes]"
            }
        }
        else if (roll1 == 2) {
            if (roll2 == 1) {
                return "bounty hunter [Hard Foes]";
            }
            else if (roll2 == 2) {
                return "soldiers [Hard Foes]";
            }
            else if (roll2 == 3) {
                return "monster [Hard Foes]";
            }
            else if (roll2 == 4) {
                return "villain [Hard Foes]"
            }
            else if (roll2 == 5) {
                return "horror [Hard Foes]"
            }
        }
        else if (roll1 == 3) {
            if (roll2 == 1) {
                return "ascetic [Knowledge]";
            }
            else if (roll2 == 2) {
                return "research [Knowledge]";
            }
            else if (roll2 == 3) {
                return "occult [Knowledge]";
            }
            else if (roll2 == 4) {
                return "enigma [Knowledge]"
            }
            else if (roll2 == 5) {
                return "science [Knowledge]"
            }
        }
        else if (roll1 == 4) {
            if (roll2 == 1) {
                return "pursuit [Physical]";
            }
            else if (roll2 == 2) {
                return "trap [Physical]";
            }
            else if (roll2 == 3) {
                return "struggle [Physical]";
            }
            else if (roll2 == 4) {
                return "illness [Physical]"
            }
            else if (roll2 == 5) {
                return "labor [Physical]"
            }
        }
        else if (roll1 == 5) {
            if (roll2 == 1) {
                return "army [Factional]";
            }
            else if (roll2 == 2) {
                return "invader [Factional]";
            }
            else if (roll2 == 3) {
                return "holdings [Factional]";
            }
            else if (roll2 == 4) {
                return "authority [Factional]"
            }
            else if (roll2 == 5) {
                return "rebels [Factional]"
            }
        }
        else if (roll1 == 6) {
            if (roll2 == 1) {
                return "festival [Haven]";
            }
            else if (roll2 == 2) {
                return "hermit [Haven]";
            }
            else if (roll2 == 3) {
                return "tavern [Haven]";
            }
            else if (roll2 == 4) {
                return "hamlet [Haven]"
            }
            else if (roll2 == 5) {
                return "conclave [Haven]"
            }
        }
        else if (roll1 == 7) {
            if (roll2 == 1) {
                return "misunderstanding [Party]";
            }
            else if (roll2 == 2) {
                return "accusations [Party]";
            }
            else if (roll2 == 3) {
                return "power play [Party]";
            }
            else if (roll2 == 4) {
                return "friend-in-need [Party]"
            }
            else if (roll2 == 5) {
                return "disappearance [Party]"
            }
        }
        else if (roll1 == 8) {
            if (roll2 == 1) {
                return "traitor [Personal]";
            }
            else if (roll2 == 2) {
                return "lover [Personal]";
            }
            else if (roll2 == 3) {
                return "death [Personal]";
            }
            else if (roll2 == 4) {
                return "relative [Personal]"
            }
            else if (roll2 == 5) {
                return "rival [Personal]"
            }
        }
        else if (roll1 == 9) {
            if (roll2 == 1) {
                return "heaven/hell [Epic]";
            }
            else if (roll2 == 2) {
                return "afterlife [Epic]";
            }
            else if (roll2 == 3) {
                return "myth [Epic]";
            }
            else if (roll2 == 4) {
                return "otherworldly [Epic]"
            }
            else if (roll2 == 5) {
                return "the strange [Epic]"
            }
        }
        else if (roll1 == 10) {
            if (roll2 == 1) {
                return "weather [Natural]";
            }
            else if (roll2 == 2) {
                return "straying/lost [Natural]";
            }
            else if (roll2 == 3) {
                return "social environment [Natural]";
            }
            else if (roll2 == 4) {
                return "deprivation [Natural]"
            }
            else if (roll2 == 5) {
                return "the wild [Natural]"
            }
        }
    }

    var result = modifier + " " + noun();

    // console.log(result);

    document.getElementById("waylays").innerHTML = result;
}