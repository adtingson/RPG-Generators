/*
Based on UNE.
Create an NPC.
R-level: 0 to 5. 0-Undefined, 5-Chaos.
*/

function createNPC(rlevel) {
	var modRoll = Math.floor(Math.random()*100)+1;
	var nounRoll = Math.floor(Math.random()*100)+1;
	
	var verbRoll1 = Math.floor(Math.random()*100)+1;
	var motRoll1 = Math.floor(Math.random()*100)+1;
	
	var verbRoll2 = Math.floor(Math.random()*100)+1;
	var motRoll2 = motRolls2();
	
	var verbRoll3 = Math.floor(Math.random()*100)+1;
	var motRoll3 = motRolls3();
	
	function motRolls2() {
		var mroll2 = motRoll1;
		while ( Math.ceil(mroll2/20) == Math.ceil(motRoll1/20) ) {
			mroll2 = Math.floor(Math.random()*100+1);
		}
		return mroll2;
	}
	
	function motRolls3() {
		var mroll3 = motRoll2;
		while (Math.ceil(mroll3/20) ==  Math.ceil(motRoll2/20)) {
			mroll3 = Math.floor(Math.random()*100+1);
		}
		return mroll3;
	}
	
	
	var identity = npcMod() + " " + npcNoun();
	
	function npcMod() {
		const Mod = ["superfluous", "addicted", "conformist", "nefarious", "sensible", "untrained", "romantic", "unreasonable", "skilled", "neglectful", "lively", "forthright", "idealistic", "unsupportive", "rational", "coarse", "foolish", "cunning", "delightful", "miserly", "inept", "banal", "logical", "subtle", "reputable", "wicked", "lazy", "pessimistic", "solemn", "habitual", "meek", "helpful", "unconcerned", "generous", "docile", "cheery", "pragmatic", "serene", "thoughtful", "hopeless", "pleasant", "insensitive", "titled", "inexperienced", "prying", "oblivious", "refined", "indispensable", "scholarly", "conservative", "uncouth", "willful", "indifferent", "fickle", "elderly", "sinful", "naive", "privileged", "glum", "likable", "lethargic", "defiant", "obnoxious", "insightful", "tactless", "fanatic", "plebeian", "childish", "pious", "uneducated", "inconsiderate", "cultured", "revolting", "curious", "touchy", "needy", "dignified", "pushy", "kind", "corrupt", "jovial", "shrewd", "liberal", "compliant", "destitute", "conniving", "careful", "alluring", "defective", "optimistic", "affluent", "despondent", "mindless", "passionate", "devoted", "established", "unseemly", "dependable", "righteous", "confident"];
		return Mod[modRoll-1];
	}
	
	function npcNoun() {
		const Noun = ["gypsy", "witch", "merchant", "expert", "commoner", "judge", "ranger", "occultist", "reverend", "thug", "drifter", "journeyman", "statesman", "astrologer", "duelist", "jack-of-all-trades", "aristocrat", "preacher", "artisan", "rogue", "missionary", "outcast", "mercenary", "caretaker", "hermit", "orator", "chieftain", "pioneer", "burglar", "vicar", "officer", "explorer", "warden", "outlaw", "adept", "bum", "sorcerer", "laborer", "master", "ascendant", "villager", "magus", "conscript", "worker", "actor", "herald", "highwayman", "fortune-hunter", "governor", "scrapper", "monk", "homemaker", "recluse", "steward", "polymath", "magician", "traveler", "vagrant", "apprentice", "politician", "mediator", "crook", "civilian", "activist", "hero", "champion", "cleric", "slave", "gunman", "clairvoyant", "patriarch", "shopkeeper", "crone", "adventurer", "soldier", "entertainer", "craftsman", "scientist", "ascetic", "superior", "performer", "magister", "serf", "brute", "inquisitor", "lord", "villain", "professor", "servant", "charmer", "globetrotter", "sniper", "courtier", "priest", "tradesman", "hitman", "wizard", "beggar", "tradesman", "warrior"];
		return Noun[nounRoll-1];
	}
	
	var motive1 = motVerb1() + " " + motNoun1();
	
	function motVerb1() {
		const Verb = ["advises", "obtains", "attempts", "spoils", "oppresses", "interacts", "creates", "abducts", "promotes", "conceives", "blights", "progresses", "distresses", "possesses", "records", "embraces", "contacts", "pursues", "associates", "prepares", "shepherds", "abuses", "indulges", "chronicles", "fulfills", "drives", "reviews", "aids", "follows", "advances", "guards", "conquers", "hinders", "plunders", "constructs", "encourages", "agonizes", "comprehends", "administers", "relates", "takes", "discovers", "deters", "acquires", "damages", "publicizes", "burdens", "advocates", "implements", "understands", "collaborates", "strives", "completes", "compels", "joins", "assists", "defiles", "produces", "institutes", "accounts", "works", "accompanys", "offends", "guides", "learns", "persecutes", "communicates", "processes", "reports", "develops", "steals", "suggests", "weakens", "achieves", "secures", "informs", "patronizes", "depresses", "determines", "seeks", "manages", "suppresses", "proclaims", "operates", "accesses", "refines", "composes", "undermines", "explains", "discourages", "attends", "detects", "executes", "maintains", "realizes", "conveys", "robs", "establishes", "overthrows", "support"];
		return Verb[verbRoll1-1];
	}
	
	function motNoun1() {
		const motive = ["wealth", "hardship", "affluence", "resources", "prosperity", "poverty", "opulence", "deprivation", "success", "distress", "contraband", "music", "literature", "technology", "alcohol", "medicines", "beauty", "strength", "intelligence", "force", "the wealthy", "the populous", "enemies", "the public", "religion", "the poor", "family", "the elite", "academia", "the forsaken", "the law", "the government", "the oppressed", "friends", "criminals", "allies", "secret societies", "the world", "military", "the church", "dreams", "discretion", "love", "freedom", "pain", "faith", "slavery", "enlightenment", "racism", "sensuality", "dissonance", "peace", "discrimination", "disbelief", "pleasure", "hate", "happiness", "servitude", "harmony", "justice", "gluttony", "lust", "envy", "greed", "laziness", "wrath", "pride", "purity", "moderation", "vigilance", "zeal", "composure", "charity", "modesty", "atrocities", "cowardice", "narcissism", "compassion", "valor", "patience", "advice", "propaganda", "science", "knowledge", "communications", "lies", "myths", "riddles", "stories", "legends", "industry", "new religions", "progress", "animals", "ghosts", "magic", "nature", "old religions", "expertise", "spirits"];
		return motive[motRoll1-1];
	}
	
	var motive2 = motVerb2() + " " + motNoun2();
	
	function motVerb2() {
		const Verb = ["advises", "obtains", "attempts", "spoils", "oppresses", "interacts", "creates", "abducts", "promotes", "conceives", "blights", "progresses", "distresses", "possesses", "records", "embraces", "contacts", "pursues", "associates", "prepares", "shepherds", "abuses", "indulges", "chronicles", "fulfills", "drives", "reviews", "aids", "follows", "advances", "guards", "conquers", "hinders", "plunders", "constructs", "encourages", "agonizes", "comprehends", "administers", "relates", "takes", "discovers", "deters", "acquires", "damages", "publicizes", "burdens", "advocates", "implements", "understands", "collaborates", "strives", "completes", "compels", "joins", "assists", "defiles", "produces", "institutes", "accounts", "works", "accompanys", "offends", "guides", "learns", "persecutes", "communicates", "processes", "reports", "develops", "steals", "suggests", "weakens", "achieves", "secures", "informs", "patronizes", "depresses", "determines", "seeks", "manages", "suppresses", "proclaims", "operates", "accesses", "refines", "composes", "undermines", "explains", "discourages", "attends", "detects", "executes", "maintains", "realizes", "conveys", "robs", "establishes", "overthrows", "support"];
		return Verb[verbRoll2-1];
	}
	
	function motNoun2() {
		const motive = ["wealth", "hardship", "affluence", "resources", "prosperity", "poverty", "opulence", "deprivation", "success", "distress", "contraband", "music", "literature", "technology", "alcohol", "medicines", "beauty", "strength", "intelligence", "force", "the wealthy", "the populous", "enemies", "the public", "religion", "the poor", "family", "the elite", "academia", "the forsaken", "the law", "the government", "the oppressed", "friends", "criminals", "allies", "secret societies", "the world", "military", "the church", "dreams", "discretion", "love", "freedom", "pain", "faith", "slavery", "enlightenment", "racism", "sensuality", "dissonance", "peace", "discrimination", "disbelief", "pleasure", "hate", "happiness", "servitude", "harmony", "justice", "gluttony", "lust", "envy", "greed", "laziness", "wrath", "pride", "purity", "moderation", "vigilance", "zeal", "composure", "charity", "modesty", "atrocities", "cowardice", "narcissism", "compassion", "valor", "patience", "advice", "propaganda", "science", "knowledge", "communications", "lies", "myths", "riddles", "stories", "legends", "industry", "new religions", "progress", "animals", "ghosts", "magic", "nature", "old religions", "expertise", "spirits"];
		return motive[motRoll2-1];
	}
	
	var motive3 = motVerb3() + " " + motNoun3();
	
	function motVerb3() {
		const Verb = ["advises", "obtains", "attempts", "spoils", "oppresses", "interacts", "creates", "abducts", "promotes", "conceives", "blights", "progresses", "distresses", "possesses", "records", "embraces", "contacts", "pursues", "associates", "prepares", "shepherds", "abuses", "indulges", "chronicles", "fulfills", "drives", "reviews", "aids", "follows", "advances", "guards", "conquers", "hinders", "plunders", "constructs", "encourages", "agonizes", "comprehends", "administers", "relates", "takes", "discovers", "deters", "acquires", "damages", "publicizes", "burdens", "advocates", "implements", "understands", "collaborates", "strives", "completes", "compels", "joins", "assists", "defiles", "produces", "institutes", "accounts", "works", "accompanys", "offends", "guides", "learns", "persecutes", "communicates", "processes", "reports", "develops", "steals", "suggests", "weakens", "achieves", "secures", "informs", "patronizes", "depresses", "determines", "seeks", "manages", "suppresses", "proclaims", "operates", "accesses", "refines", "composes", "undermines", "explains", "discourages", "attends", "detects", "executes", "maintains", "realizes", "conveys", "robs", "establishes", "overthrows", "support"];
		return Verb[verbRoll3-1];
	}
	
	function motNoun3() {
		const motive = ["wealth", "hardship", "affluence", "resources", "prosperity", "poverty", "opulence", "deprivation", "success", "distress", "contraband", "music", "literature", "technology", "alcohol", "medicines", "beauty", "strength", "intelligence", "force", "the wealthy", "the populous", "enemies", "the public", "religion", "the poor", "family", "the elite", "academia", "the forsaken", "the law", "the government", "the oppressed", "friends", "criminals", "allies", "secret societies", "the world", "military", "the church", "dreams", "discretion", "love", "freedom", "pain", "faith", "slavery", "enlightenment", "racism", "sensuality", "dissonance", "peace", "discrimination", "disbelief", "pleasure", "hate", "happiness", "servitude", "harmony", "justice", "gluttony", "lust", "envy", "greed", "laziness", "wrath", "pride", "purity", "moderation", "vigilance", "zeal", "composure", "charity", "modesty", "atrocities", "cowardice", "narcissism", "compassion", "valor", "patience", "advice", "propaganda", "science", "knowledge", "communications", "lies", "myths", "riddles", "stories", "legends", "industry", "new religions", "progress", "animals", "ghosts", "magic", "nature", "old religions", "expertise", "spirits"];
		return motive[motRoll3-1];
	}
	
	var npcPow = npcPower();
	
	function npcPower() {
		var powRoll = Math.floor(Math.random()*100)+1;
		var rlev = rlevel;
		
		if (rlev == 0) {
			return "";
		}
		else if (rlev == 1) {
			if (powRoll >= 1 && powRoll <= 2) {
				return "much weaker than the party, ";
			}
			else if (powRoll >= 3 && powRoll <= 10) {
				return "slightly weaker than the party, ";
			}
			else if (powRoll >= 11 && powRoll <= 90) {
				return "with comparable strength to the party, ";
			}
			else if (powRoll >= 91 && powRoll <= 98) {
				return "slightly stronger than the party, ";
			}
			else if (powRoll >= 99 && powRoll <= 100) {
				return "much stronger than the party, ";
			}
		}
		else if (rlev == 2) {
			if (powRoll >= 1 && powRoll <= 4) {
				return "much weaker than the party, ";
			}
			else if (powRoll >= 5 && powRoll <= 15) {
				return "slightly weaker than the party, ";
			}
			else if (powRoll >= 16 && powRoll <= 85) {
				return "with comparable strength to the party, ";
			}
			else if (powRoll >= 86 && powRoll <= 96) {
				return "slightly stronger than the party, ";
			}
			else if (powRoll >= 97 && powRoll <= 100) {
				return "much stronger than the party, ";
			}
		}
		else if (rlev == 3) {
			if (powRoll >= 1 && powRoll <= 5) {
				return "much weaker than the party, ";
			}
			else if (powRoll >= 6 && powRoll <= 20) {
				return "slightly weaker than the party, ";
			}
			else if (powRoll >= 21 && powRoll <= 80) {
				return "with comparable strength to the party, ";
			}
			else if (powRoll >= 81 && powRoll <= 95) {
				return "slightly stronger than the party, ";
			}
			else if (powRoll >= 96 && powRoll <= 100) {
				return "much stronger than the party, ";
			}
		}
		else if (rlev == 4) {
			if (powRoll >= 1 && powRoll <= 8) {
				return "much weaker than the party, ";
			}
			else if (powRoll >= 9 && powRoll <= 25) {
				return "slightly weaker than the party, ";
			}
			else if (powRoll >= 26 && powRoll <= 75) {
				return "with comparable strength to the party, ";
			}
			else if (powRoll >= 76 && powRoll <= 92) {
				return "slightly stronger than the party, ";
			}
			else if (powRoll >= 93 && powRoll <= 100) {
				return "much stronger than the party, ";
			}
		}
		else if (rlev == 5) {
			if (powRoll >= 1 && powRoll <= 12) {
				return "much weaker than the party, ";
			}
			else if (powRoll >= 13 && powRoll <= 30) {
				return "slightly weaker than the party, ";
			}
			else if (powRoll >= 31 && powRoll <= 70) {
				return "with comparable strength to the party, ";
			}
			else if (powRoll >= 71 && powRoll <= 88) {
				return "slightly stronger than the party, ";
			}
			else if (powRoll >= 89 && powRoll <= 100) {
				return "much stronger than the party, ";
			}
		}
	}
	
	var result = "A " + identity + ", " + npcPow + "who " + motive1 + ", " + motive2 + ", and " + motive3 + "."
	
	// return console.log(result);
	document.getElementById("uneresult").innerHTML = result;
}