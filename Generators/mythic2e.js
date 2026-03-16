/*Based on Mythic GME 2e*/

function eventFocus() {
    const eventFocusTable = ["Remote Event", "Ambiguous Event", "New NPC", "New NPC", "NPC Action", "NPC Action", "NPC Action", "NPC Action", "NPC Negative", "NPC Positive", "Move Toward A Thread", "Move Away From A Thread", "Move Away From A Thread", "Close A Thread", "PC Negative", "PC Negative", "PC Positive", "Current Context", "Current Context", "Current Context"];
    let roll1 = Math.floor(Math.random()*20);
    return eventFocusTable[+roll1];
}

function FateCheck(ChaosFactor,Odds,focusRoll) {
    const answers = ["Exceptional No", "Exceptional No", "Exceptional No", "No", "No", "No", "No", "No", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Exceptional Yes", "Exceptional Yes", "Exceptional Yes"];
    const ModLookup = [-5, -4, -2, -1, 0, +1, +2, +4, +5];
    let roll1 = Math.floor(Math.random()*10);
    let roll2 = Math.floor(Math.random()*10);
    let rollTotal = +roll1 + +roll2;
    let moddedRoll = +rollTotal + +ModLookup[+ChaosFactor] + +ModLookup[+Odds];
    let finalRoll = (+moddedRoll>=18) ? 18:(+moddedRoll<=0) ? 0:+moddedRoll;
    let eventMeaning = +focusRoll==0 ? eventMeaningAction():eventMeaningDescription();
    let randomEvent = ((+roll1 == +roll2) ||  (finalRoll<(8 && (+ChaosFactor -1)))) ? "; Random Event: " + eventFocus() + ", " + eventMeaning:"";
    document.getElementById("resultRoll").innerHTML = answers[+finalRoll] + randomEvent;
}

function eventMeaningAction() {
    const action1 = ["Abandon", "Accompany", "Activate", "Agree", "Ambush", "Arrive", "Assist", "Attack", "Attain", "Bargain", "Befriend", "Bestow", "Betray", "Block", "Break", "Carry", "Celebrate", "Change", "Close", "Combine", "Communicate", "Conceal", "Continue", "Control", "Create", "Deceive", "Decrease", "Defend", "Delay", "Deny", "Depart", "Deposit", "Destroy", "Dispute", "Disrupt", "Distrust", "Divide", "Drop", "Easy", "Energize", "Escape", "Expose", "Fail", "Fight", "Flee", "Free", "Guide", "Harm", "Heal", "Hinder", "Imitate", "Imprison", "Increase", "Indulge", "Inform", "Inquire", "Inspect", "Invade", "Leave", "Lure", "Misuse", "Move", "Neglect", "Observe", "Open", "Oppose", "Overthrow", "Praise", "Proceed", "Protect", "Punish", "Pursue", "Recruit", "Refuse", "Release", "Relinquish", "Repair", "Repulse", "Return", "Reward", "Ruin", "Separate", "Start", "Stop", "Strange", "Struggle", "Succeed", "Support", "Suppress", "Take", "Threaten", "Transform", "Trap", "Travel", "Triumph", "Truce", "Trust", "Use", "Usurp", "Waste"];
    const action2 = ["Advantage", "Adversity", "Agreement", "Animal", "Attention", "Balance", "Battle", "Benefits", "Building", "Burden", "Bureaucracy", "Business", "Chaos", "Comfort", "Completion", "Conflict", "Cooperation", "Danger", "Defense", "Depletion", "Disadvantage", "Distraction", "Elements", "Emotion", "Enemy", "Energy", "Environment", "Expectation", "Exterior", "Extravagance", "Failure", "Fame", "Fear", "Freedom", "Friend", "Goal", "Group", "Health", "Hindrance", "Home", "Hope", "Idea", "Illness", "Illusion", "Individual", "Information", "Innocent", "Intellect", "Interior", "Investment", "Leadership", "Legal", "Location", "Military", "Misfortune", "Mundane", "Nature", "Needs", "News", "Normal", "Object", "Obscurity", "Official", "Opposition", "Outside", "Pain", "Path", "Peace", "People", "Personal", "Physical", "Plot", "Portal", "Possessions", "Poverty", "Power", "Prison", "Project", "Protection", "Reassurance", "Representative", "Riches", "Safety", "Strength", "Success", "Suffering", "Surprise", "Tactic", "Technology", "Tension", "Time", "Trial", "Value", "Vehicle", "Victory", "Vulnerability", "Weapon", "Weather", "Work", "Wound"];
    let result = action1[Math.floor(Math.random()*100)] + " " + action2[Math.floor(Math.random()*100)];
    return result;
}

function eventMeaningDescription() {
    const descriptor1 = ["Adventurously", "Aggressively", "Anxiously", "Awkwardly", "Beautifully", "Bleakly", "Boldly", "Bravely", "Busily", "Calmly", "Carefully", "Carelessly", "Cautiously", "Ceaselessly", "Cheerfully", "Combatively", "Coolly", "Crazily", "Curiously", "Dangerously", "Defiantly", "Deliberately", "Delicately", "Delightfully", "Dimly", "Efficiently", "Emotionally", "Energetically", "Enormously", "Enthusiastically", "Excitedly", "Fearfully", "Ferociously", "Fiercely", "Foolishly", "Fortunately", "Frantically", "Freely", "Frighteningly", "Fully", "Generously", "Gently", "Gladly", "Gracefully", "Gratefully", "Happily", "Hastily", "Healthily", "Helpfully", "Helplessly", "Hopelessly", "Innocently", "Intensely", "Interestingly", "Irritatingly", "Joyfully", "Kindly", "Lazily", "Lightly", "Loosely", "Loudly", "Lovingly", "Loyally", "Majestically", "Meaningfully", "Mechanically", "Mildly", "Miserably", "Mockingly", "Mysteriously", "Naturally", "Neatly", "Nicely", "Oddly", "Offensively", "Officially", "Partially", "Passively", "Peacefully", "Perfectly", "Playfully", "Politely", "Positively", "Powerfully", "Quaintly", "Quarrelsomely", "Quietly", "Roughly", "Rudely", "Ruthlessly", "Slowly", "Softly", "Strangely", "Swiftly", "Threateningly", "Timidly", "Very", "Violently", "Wildly", "Yieldingly"];
    const descriptor2 = ["Abnormal", "Amusing", "Artificial", "Average", "Beautiful", "Bizarre", "Boring", "Bright", "Broken", "Clean", "Cold", "Colorful", "Colorless", "Comforting", "Creepy", "Cute", "Damaged", "Dark", "Defeated", "Dirty", "Disagreeable", "Dry", "Dull", "Empty", "Enormous", "Extraordinary", "Extravagant", "Faded", "Familiar", "Fancy", "Feeble", "Festive", "Flawless", "Forlorn", "Fragile", "Fragrant", "Fresh", "Full", "Glorious", "Graceful", "Hard", "Harsh", "Healthy", "Heavy", "Historical", "Horrible", "Important", "Interesting", "Juvenile", "Lacking", "Large", "Lavish", "Lean", "Less", "Lethal", "Lively", "Lonely", "Lovely", "Magnificent", "Mature", "Messy", "Mighty", "Military", "Modern", "Mundane", "Mysterious", "Natural", "Normal", "Odd", "Old", "Pale", "Peaceful", "Petite", "Plain", "Poor", "Powerful", "Protective", "Quaint", "Rare", "Reassuring", "Remarkable", "Rotten", "Rough", "Ruined", "Rustic", "Scary", "Shocking", "Simple", "Small", "Smooth", "Soft", "Strong", "Stylish", "Unpleasant", "Valuable", "Vibrant", "Warm", "Watery", "Weak", "Young"];
    let result = descriptor1[Math.floor(Math.random()*100)] + " " + descriptor2[Math.floor(Math.random()*100)];
    return result;
}

function justTheRandomEvent(focus) {
    let focusSelect = +focus==0 ? eventMeaningAction():eventMeaningDescription();
    let result = "Random Event: " + eventFocus() + ", " + focusSelect;
    document.getElementById("resultRoll2").innerHTML = result;
}

function expectedSceneCheck(chaosNumber) {
    let roll = Math.floor(Math.random()*10) + 1;
    let result = roll > chaosNumber ? "Expected Scene":(roll<=chaosNumber && roll%2!==0) ? "Altered Scene":(roll<=chaosNumber && roll%2==0) ? "Interrupt Scene":"Error";
    document.getElementById("testExpected").innerHTML = result;
}