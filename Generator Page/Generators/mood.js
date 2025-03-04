function npcMood(relationshipNPC) {
	var roll = Math.floor(Math.random()*100)+1;
	var relationship = npcRelate();
	
	function npcRelate() {
		if (relationshipNPC=="loved") {
			return 3;
		}
		else if (relationshipNPC=="friendly") {
			return 2;
		}
		else if (relationshipNPC=="peaceful") {
			return 1;
		}
		else if (relationshipNPC=="neutral") {
			return 0;
		}
		else if (relationshipNPC=="distrustful") {
			return -1;
		}
		else if (relationshipNPC=="hostile") {
			return -2;
		}
		else if (relationshipNPC=="hated") {
			return -3;
		}
	}
	
	function mood() {
		if (relationship == 3) {
			if (roll == 1) {
				return "withdrawn";
			}
			else if (roll >= 2 && roll <=6) {
				return "guarded";
			}
			else if (roll >= 7 && roll <=16) {
				return "cautious";
			}
			else if (roll >= 17 && roll <=31) {
				return "neutral";
			}
			else if (roll >= 32 && roll <=70) {
				return "sociable";
			}
			else if (roll >= 71 && roll <=85) {
				return "helpful";
			}
			else if (roll >= 86 && roll <=100) {
				return "forthcoming";
				}
			}
			else if (relationship == 2) {
			if (roll >= 1 && roll <=2) {
				return "withdrawn";
			}
			else if (roll >= 3 && roll <=8) {
				return "guarded";
			}
			else if (roll >= 9 && roll <=20) {
				return "cautious";
			}
			else if (roll >= 21 && roll <=40) {
				return "neutral";
			}
			else if (roll >= 41 && roll <=76) {
				return "sociable";
			}
			else if (roll >= 77 && roll <=89) {
				return "helpful";
			}
			else if (roll >= 90 && roll <=100) {
				return "forthcoming";
			}
		}
		else if (relationship == 1) {
			if (roll >= 1 && roll <=3) {
				return "withdrawn";
			}
			else if (roll >= 4 && roll <=11) {
				return "guarded";
			}
			else if (roll >= 12 && roll <=25) {
				return "cautious";
			}
			else if (roll >= 26 && roll <=55) {
				return "neutral";
			}
			else if (roll >= 56 && roll <=82) {
				return "sociable";
			}
			else if (roll >= 83 && roll <=93) {
				return "helpful";
			}
			else if (roll >= 94 && roll <=100) {
				return "forthcoming";
			}
		}
		else if (relationship == 0) {
			if (roll >= 1 && roll <=5) {
				return "withdrawn";
			}
			else if (roll >= 6 && roll <=15) {
				return "guarded";
			}
			else if (roll >= 16 && roll <=30) {
				return "cautious";
			}
			else if (roll >= 31 && roll <=60) {
				return "neutral";
			}
			else if (roll >= 61 && roll <=85) {
				return "sociable";
			}
			else if (roll >= 86 && roll <=95) {
				return "helpful";
			}
			else if (roll >= 96 && roll <=100) {
				return "forthcoming";
			}
		}
		else if (relationship == -1) {
			if (roll >= 1 && roll <=7) {
				return "withdrawn";
			}
			else if (roll >= 8 && roll <=18) {
				return "guarded";
			}
			else if (roll >= 19 && roll <=46) {
				return "cautious";
			}
			else if (roll >= 47 && roll <=76) {
				return "neutral";
			}
			else if (roll >= 77 && roll <=90) {
				return "sociable";
			}
			else if (roll >= 91 && roll <=97) {
				return "helpful";
			}
			else if (roll >= 98 && roll <=100) {
				return "forthcoming";
			}
		}
		else if (relationship == -2) {
			if (roll >= 1 && roll <=11) {
				return "withdrawn";
			}
			else if (roll >= 12 && roll <=24) {
				return "guarded";
			}
			else if (roll >= 25 && roll <=61) {
				return "cautious";
			}
			else if (roll >= 62 && roll <=81) {
				return "neutral";
			}
			else if (roll >= 82 && roll <=93) {
				return "sociable";
			}
			else if (roll >= 94 && roll <=98) {
				return "helpful";
			}
			else if (roll >= 99 && roll <=100) {
				return "forthcoming";
			}
		}
		else if (relationship == -3) {
			if (roll >= 1 && roll <=15) {
				return "withdrawn";
			}
			else if (roll >= 16 && roll <=30) {
				return "guarded";
			}
			else if (roll >= 31 && roll <=69) {
				return "cautious";
			}
			else if (roll >= 70 && roll <=84) {
				return "neutral";
			}
			else if (roll >= 85 && roll <=94) {
				return "sociable";
			}
			else if (roll >= 95 && roll <=99) {
				return "helpful";
			}
			else if (roll == 100) {
				return "forthcoming";
			}
		}
	}
	
	function relations() {
		const texts = ["who hated the speaker", "who is hostile to the speaker", "who is distrustful of the speaker", "who is neutral to the speaker", "who is peaceful to the speaker", "who is friendly to the speaker", "who loved the speaker"];
		return texts[relationship+3];
	}

	var result = "The NPC, " + relations() + ", is " + mood() + ".";
	
	// return console.log(result);

	document.getElementById("moodresult").innerHTML = result;
}