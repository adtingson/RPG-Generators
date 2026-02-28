/*
Based on Solo Dark supplement for ShadowDark RPG
*/

/*Dungeon Names*/
function DungeonName() {
    const name1 = ["Citadel", "Wreck", "Ruins", "Chapel", "Library", "Grave", "Fortress", "Laboratory", "Abbey", "Prison", "Tomb", "Forge", "Ravine", "Monastery", "Spire", "Hideout", "Castle", "Tunnels", "Halls", "Tower", "Steading", "Undercity", "Aerie", "Vaults", "Observatory", "Asylum", "Sepulcher", "Barrow", "Palace", "Keep", "Caverns", "Fane", "Garden", "Temple", "Maze", "Redoubt", "Pyramid", "Sanctum", "Mines", "Lair", "Den", "Pits", "Grotto", "Depths", "Stronghold", "Manse", "Warrens", "Monolith", "Crypts", "Dungeon", "Wreck", "Ruins", "Chapel", "Library", "Grave", "Fortress", "Laboratory", "Abbey", "Prison", "Tomb", "Forge", "Ravine", "Monastery", "Spire", "Hideout", "Castle", "Tunnels", "Halls", "Tower", "Steading", "Undercity", "Aerie", "Vaults", "Observatory", "Asylum", "Sepulcher", "Barrow", "Palace", "Keep", "Caverns", "Fane", "Garden", "Temple", "Maze", "Redoubt", "Pyramid", "Sanctum", "Mines", "Lair", "Den", "Pits", "Grotto", "Depths", "Stronghold", "Manse", "Warrens", "Monolith", "Crypts", "Asylum", "Asylum"];
    const name2 = ["of the Haunted", "of the Forgotten", "of the Disgraced", "of the Barbaric", "of the Monstrous", "of the Fallen", "of the Cursed", "of the Bound", "of the Poisonous", "of the Cyclopean", "of the Sky", "of the Frozen", "of the Burning", "of the Thieving", "of the Crystalline", "of the Otherworldly", "of the Blighted", "of the Celestial", "of the Draconic", "of the Ethereal", "of the Desecrated", "of the Reptilian", "of the Metallic", "of the Insectoid", "of the Elemental", "of the Arachnid", "of the Demonic", "of the Fungal", "of the Golden", "of the Fey", "of the Lightning", "of the Piscine", "of the Corrupt", "of the Righteous", "of the Mud", "of the Night", "of the Hidden", "of the Forbidden", "of the Shimmering", "of the Glass", "of the Radiant", "of the Mad", "of the Wild", "of the Lost", "of the Majestic", "of the Antediluvian", "of the Prophesied", "of the Shrouded", "of the Cosmic", "of the Legendary", "of the Forgotten", "of the Disgraced", "of the Barbaric", "of the Monstrous", "of the Fallen", "of the Cursed", "of the Bound", "of the Poisonous", "of the Cyclopean", "of the Sky", "of the Frozen", "of the Burning", "of the Thieving", "of the Crystalline", "of the Otherworldly", "of the Blighted", "of the Celestial", "of the Draconic", "of the Ethereal", "of the Desecrated", "of the Reptilian", "of the Metallic", "of the Insectoid", "of the Elemental", "of the Arachnid", "of the Demonic", "of the Fungal", "of the Golden", "of the Fey", "of the Lightning", "of the Piscine", "of the Corrupt", "of the Righteous", "of the Mud", "of the Night", "of the Hidden", "of the Forbidden", "of the Shimmering", "of the Glass", "of the Radiant", "of the Mad", "of the Wild", "of the Lost", "of the Majestic", "of the Antediluvian", "of the Prophesied", "of the Shrouded", "of the Cosmic", "of the Arachnid", "of the Arachnid"];
    const name3 = ["Idol", "Betrayer", "King", "Elephant", "God", "Cult", "Knight", "Hero", "Pirates", "Spirit", "Sisters", "Sword", "Beast", "Ancients", "Lost", "Outcasts", "Sailor", "Undead", "Mage", "Hoard", "Mummy", "Usurper", "Saint", "Mechanism", "Brothers", "Lord", "Descendant", "Abomination", "Hermit", "Warlord", "Hunter", "Guild", "Vampire", "Philosopher", "Warriors", "Queen", "Gem", "Secret", "Emperor", "Weapon", "Sorcerer", "Crown", "Ancestor", "Runes", "Tree", "Assassin", "Relic", "Blessing", "Ritual", "Overlord", "Betrayer", "King", "Elephant", "God", "Cult", "Knight", "Hero", "Pirates", "Spirit", "Sisters", "Sword", "Beast", "Ancients", "Lost", "Outcasts", "Sailor", "Undead", "Mage", "Hoard", "Mummy", "Usurper", "Saint", "Mechanism", "Brothers", "Lord", "Descendant", "Abomination", "Hermit", "Warlord", "Hunter", "Guild", "Vampire", "Philosopher", "Warriors", "Queen", "Gem", "Secret", "Emperor", "Weapon", "Sorcerer", "Crown", "Ancestor", "Runes", "Tree", "Assassin", "Relic", "Blessing", "Ritual", "Lord", "Lord"];
    document.getElementById("dungeonName").innerHTML = name1[Math.floor(Math.random()*100)] + " " + name2[Math.floor(Math.random()*100)] + " " + name3[Math.floor(Math.random()*100)];
}

/*Oracle*/
function OracleAnswer(odds) {
    var roll1 = Math.floor(Math.random()*20)+1;
    var roll2 = Math.floor(Math.random()*20)+1;
    var disAdv = (roll1>=roll2) ? roll2:roll1;
    var Advantage = (roll1>=roll2) ? roll1:roll2;
    var special1 = (roll1%2!==0 && roll1!==1) ? ", but...":".";
    var special2 = (disAdv%2!==0 && disAdv!==1) ? ", but...":".";
    var special3 = (Advantage%2!==0 && Advantage!==1) ? ", but...":".";
    const promptV = ["Stop", "Tell", "Trust", "Prevent", "Deliver", "Dismantle", "Create", "Resist", "Imbue", "Befriend", "Sneak", "Disagree", "Illuminate", "Assemble", "Free", "Combine", "Disrupt", "Demand", "Obstruct", "Push", "Arrive", "Slow", "Overcome", "Block", "Consume", "Pursue", "Reward", "Expand", "Waste", "Capture", "Weaken", "Reveal", "Investigate", "Forbid", "Start", "Surprise", "Endure", "Pull", "Unleash", "Avoid", "Advance", "Agree", "Deliver", "Link", "Hinder", "Withhold", "Lose", "Evolve", "Fortify", "Punish", "Ignite", "Awaken", "Defy", "Conceal", "Invite", "Break", "Allow", "Open", "Repel", "Activate", "Gather", "Give", "Reverse", "Warn", "Confront", "Betray", "Secure", "Darken", "Flee", "Win", "Scatter", "Contain", "Assist", "Take", "Question", "Drop", "Accept", "Sacrifice", "Drain", "Hint", "Fumble", "Fall", "Ascend", "Protect", "Escape", "Defeat", "Mend", "Acquire", "Guide", "Mislead", "Banish", "Uphold", "Build", "Change", "Revoke", "Seek", "Destroy", "Uncover", "Rest", "Release"];
    const promptN = ["Fault", "Life", "Battle", "Lie", "Vice", "Memory", "Burden", "Treachery", "Trial", "Risk", "Prosperity", "Time", "Conflict", "Light", "Unnatural", "Information", "Hope", "Journey", "Mundane", "Hazard", "Family", "Obstacle", "Doubt", "Freedom", "Weakness", "Unknown", "Glory", "Friend", "Discovery", "Lead", "Storm", "Enemy", "Integrity", "Science", "Asset", "Crime", "Wisdom", "Justice", "Strife", "Disgust", "Danger", "Balance", "Nature", "Chaos", "Ambush", "Wealth", "Thought", "Dark", "Connection", "Door", "Fear", "Sorcery", "Honor", "Spirit", "Trust", "Loss", "Failure", "Peril", "Plan", "Trick", "Mind", "Pain", "Victory", "Death", "Control", "Knowledge", "Secret", "Kindness", "Exploration", "Surprise", "Magic", "Animal", "Way", "Essence", "Dream", "Anger", "Vision", "Safety", "Result", "Place", "Path", "Nourishment", "Theft", "Decay", "Truth", "People", "Help", "Gear", "Idea", "Order", "Success", "Barrier", "Goal", "Luck", "Identity", "Harm", "Wilderness", "Motive", "Shelter", "Power"];
    var twist = promptV[Math.floor(Math.random()*100)] + " " + promptN[Math.floor(Math.random()*100)];
    if (odds==2) {
        if (roll1<=9 && roll1>=2) {
            document.getElementById("oracleAnswer").innerHTML = "No" + special1;
        }
        else if (roll1==10) {
            document.getElementById("oracleAnswer").innerHTML = "Twist: " + twist;
        }
        else if (roll1>=11 && roll1<=19) {
            document.getElementById("oracleAnswer").innerHTML = "Yes" + special1;
        }
        else if (roll1 == 1) {
            document.getElementById("oracleAnswer").innerHTML = "No. (Extreme Version)";
        }
        else if (roll1 == 20) {
            document.getElementById("oracleAnswer").innerHTML = "Yes. (Extreme Version)";
        }
    }
    else if (odds==1) {
        if (disAdv<=9 && disAdv>=2) {
            document.getElementById("oracleAnswer").innerHTML = "No" + special2;
        }
        else if (disAdv==10) {
            document.getElementById("oracleAnswer").innerHTML = "Twist: " + twist;
        }
        else if (disAdv>=11 && disAdv<=19) {
            document.getElementById("oracleAnswer").innerHTML = "Yes" + special2;
        }
        else if (disAdv == 1) {
            document.getElementById("oracleAnswer").innerHTML = "No. (Extreme Version)";
        }
        else if (disAdv == 20) {
            document.getElementById("oracleAnswer").innerHTML = "Yes. (Extreme Version)";
        }
    }
    else if (odds==3) {
        if (Advantage<=9 && Advantage>=2) {
            document.getElementById("oracleAnswer").innerHTML = "No" + special3;
        }
        else if (Advantage==10) {
            document.getElementById("oracleAnswer").innerHTML = "Twist: " + twist;
        }
        else if (Advantage>=11 && Advantage<=19) {
            document.getElementById("oracleAnswer").innerHTML = "Yes" + special3;
        }
        else if (Advantage == 1) {
            document.getElementById("oracleAnswer").innerHTML = "No. (Extreme Version)";
        }
        else if (Advantage == 20) {
            document.getElementById("oracleAnswer").innerHTML = "Yes. (Extreme Version)";
        }
    }
}

function promptGen() {
    const promptV = ["Stop", "Tell", "Trust", "Prevent", "Deliver", "Dismantle", "Create", "Resist", "Imbue", "Befriend", "Sneak", "Disagree", "Illuminate", "Assemble", "Free", "Combine", "Disrupt", "Demand", "Obstruct", "Push", "Arrive", "Slow", "Overcome", "Block", "Consume", "Pursue", "Reward", "Expand", "Waste", "Capture", "Weaken", "Reveal", "Investigate", "Forbid", "Start", "Surprise", "Endure", "Pull", "Unleash", "Avoid", "Advance", "Agree", "Deliver", "Link", "Hinder", "Withhold", "Lose", "Evolve", "Fortify", "Punish", "Ignite", "Awaken", "Defy", "Conceal", "Invite", "Break", "Allow", "Open", "Repel", "Activate", "Gather", "Give", "Reverse", "Warn", "Confront", "Betray", "Secure", "Darken", "Flee", "Win", "Scatter", "Contain", "Assist", "Take", "Question", "Drop", "Accept", "Sacrifice", "Drain", "Hint", "Fumble", "Fall", "Ascend", "Protect", "Escape", "Defeat", "Mend", "Acquire", "Guide", "Mislead", "Banish", "Uphold", "Build", "Change", "Revoke", "Seek", "Destroy", "Uncover", "Rest", "Release"];
    const promptN = ["Fault", "Life", "Battle", "Lie", "Vice", "Memory", "Burden", "Treachery", "Trial", "Risk", "Prosperity", "Time", "Conflict", "Light", "Unnatural", "Information", "Hope", "Journey", "Mundane", "Hazard", "Family", "Obstacle", "Doubt", "Freedom", "Weakness", "Unknown", "Glory", "Friend", "Discovery", "Lead", "Storm", "Enemy", "Integrity", "Science", "Asset", "Crime", "Wisdom", "Justice", "Strife", "Disgust", "Danger", "Balance", "Nature", "Chaos", "Ambush", "Wealth", "Thought", "Dark", "Connection", "Door", "Fear", "Sorcery", "Honor", "Spirit", "Trust", "Loss", "Failure", "Peril", "Plan", "Trick", "Mind", "Pain", "Victory", "Death", "Control", "Knowledge", "Secret", "Kindness", "Exploration", "Surprise", "Magic", "Animal", "Way", "Essence", "Dream", "Anger", "Vision", "Safety", "Result", "Place", "Path", "Nourishment", "Theft", "Decay", "Truth", "People", "Help", "Gear", "Idea", "Order", "Success", "Barrier", "Goal", "Luck", "Identity", "Harm", "Wilderness", "Motive", "Shelter", "Power"];
    document.getElementById("promptText").innerHTML = promptV[Math.floor(Math.random()*100)] + " " + promptN[Math.floor(Math.random()*100)];
}