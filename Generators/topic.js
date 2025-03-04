function topic(demean) {
	var rollDemeanor = demdem();
	var rollBearing = Math.floor(Math.random()*10)+1;
	var rollFocus = Math.floor(Math.random()*100)+1;
	
	function demdem() {
		if (demean == undefined || demean == 0) {
			return Math.floor(Math.random()*8)+1;
		}
		else {
			return demean;
		}
	}
	
	function demeanor() {
		const dem = ["scheming", "insane", "friendly", "hostile", "inquisitive", "knowing", "mysterious", "prejudiced"];
		return dem[rollDemeanor-1];
	}
	
	function bearing() {
		if (rollDemeanor == 1) {
			const choices1 = ["intent", "bargain", "means", "proposition", "plan", "compromise", "agenda", "arrangement", "negotiation", "plot"];
			return choices1[rollBearing-1];
		}
		else if (rollDemeanor == 2) {
			const choices2 = ["madness", "fear", "accident", "chaos", "idiocy", "illusion", "turmoil", "confusion", "façade", "bewilderment"];
			return choices2[rollBearing-1];
		}
		else if (rollDemeanor == 3) {
			const choices3 = ["alliance", "comfort", "gratitude", "shelter", "happiness", "support", "promise", "delight", "aid", "celebration"];
			return choices3[rollBearing-1];
		}
		else if (rollDemeanor == 4) {
			const choices4 = ["death", "capture", "judgment", "combat", "surrender", "rage", "resentment", "submission", "injury", "destruction"];
			return choices4[rollBearing-1];
		}
		else if (rollDemeanor == 5) {
			const choices5 = ["questions", "investigation", "interest", "demand", "suspicion", "request", "curiosity", "skepticism", "command", "petition"];
			return choices5[rollBearing-1];
		}
		else if (rollDemeanor == 6) {
			const choices6 = ["report", "effects", "examination", "records", "account", "news", "history", "telling", "discourse", "speech"];
			return choices6[rollBearing-1];
		}
		else if (rollDemeanor == 7) {
			const choices7 = ["rumor", "uncertainty", "secrets", "misdirection", "whispers", "lies", "shadows", "enigma", "obscurity", "conundrum"];
			return choices7[rollBearing-1];
		}
		else if (rollDemeanor == 8) {
			const choices8 = ["reputation", "doubt", "bias", "dislike", "partiality", "belief", "view", "discrimination", "assessment", "difference"];
			return choices8[rollBearing-1];
		}
	}
	
	function npcFocus() {
		const foc = ["current scene", "last story", "equipment", "parents", "history", "retainers", "wealth", "relics", "last action", "skills", "superiors", "fame", "campaign", "future action", "friends", "allies", "last scene", "contacts", "flaws", "antagonist", "rewards", "experience", "knowledge", "recent scene", "community", "treasure", "the character", "current story", "family", "power", "weapons", "previous scene", "enemy"];
		if (rollFocus == 100) {
			return "enemy";
		}
		else {
			return foc[Math.ceil(rollFocus/3)-1];
		}
	}
		
	var result = "The " + demeanor() + " NPC discusses " + bearing() + " about " + npcFocus() + "."
	// return console.log(result);
	document.getElementById("topic").innerHTML = result;
}