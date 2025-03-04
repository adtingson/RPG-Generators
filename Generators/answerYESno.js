/*
Based on CRGE.
Answers YES or NO questions and adds twists.
Stages: 1-To Knowledge, 2-To Conflict, 3-To Endings.
Surge: System defined modifier for randomness. Starts at 0.
*/

function loomFate(stage,surge) {
	var loomRoll = Math.floor(Math.random()*100)+1;
	var roll1 = loomRoll1();
	var roll2 = Math.floor(Math.random()*17)+1;
	
	function loomRoll1() {
		if (loomRoll>50) {
			return +loomRoll + +surge;
		}
		else if (loomRoll<=50) {
			return +loomRoll - +surge;
		}
	}
	
	function table1() {
		if (stage==1) {
			if (roll1>=96) {
				return "Yes, and unexpectedly... " + table2();
			}
			else if (roll1>=86 && roll1<=95) {
				return "Yes, but... ";
			}
			else if (roll1>=81 && roll1<=85) {
				return "Yes, and... ";
			}
			else if (roll1>=51 && roll1<=80) {
				return "Yes.";
			}
			else if (roll1>=21 && roll1<=50) {
				return "No.";
			}
			else if (roll1>=16 && roll1<=20) {
				return "No, and... ";
			}
			else if (roll1>=6 && roll1<=15) {
				return "No, but... ";
			}
			else if (roll1<=5) {
				return "No, and unexpectedly... " + table2();
			}
		}
		else if (stage==2) {
			if (roll1>=99) {
				return "Yes, and unexpectedly... " + table2();
			}
			else if (roll1>=95 && roll1<=98) {
				return "Yes, but... ";
			}
			else if (roll1>=85 && roll1<=94) {
				return "Yes, and... ";
			}
			else if (roll1>=51 && roll1<=84) {
				return "Yes.";
			}
			else if (roll1>=17 && roll1<=50) {
				return "No.";
			}
			else if (roll1>=7 && roll1<=16) {
				return "No, and... ";
			}
			else if (roll1>=3 && roll1<=6) {
				return "No, but... ";
			}
			else if (roll1<=2) {
				return "No, and unexpectedly... " + table2();
			}
		}
		else if (stage==3) {
			if (roll1>=100) {
				return "Yes, and unexpectedly... " + table2();
			}
			else if (roll1==99) {
				return "Yes, but... ";
			}
			else if (roll1>=81 && roll1<=98) {
				return "Yes, and... ";
			}
			else if (roll1>=51 && roll1<=80) {
				return "Yes.";
			}
			else if (roll1>=21 && roll1<=50) {
				return "No.";
			}
			else if (roll1>=3 && roll1<=20) {
				return "No, and... ";
			}
			else if (roll1==2) {
				return "No, but... ";
			}
			else if (roll1<=1) {
				return "No, and unexpectedly... " + table2();
			}
		}
		else if (stage==0) {
			return "<b>SET STAGE</b>, then roll for value!";
		}
	}
	
	function table2() {
		const tab2Vals = ["Foreshadowing - set a thread to be the main thread for the next scene. The current scene should then start wrapping up and heading towards the next scene.", "Tying Off - the main thread resolves or substantially moves forward in this scene by narrative decree. This does not mean that the main thread cannot create follow-up threads.", "To Conflict - the next scene centers on a conflict of your choosing. Set the main elements of the next scene, and start heading toward them in this scene.", "Costume Change - an NPC drastically changes their mind, motivations, alliances, etc. for better or worse. This could be a big story reveal or a simple change of heart.", "Key Grip - set the location or general elements for the next scene. The current scene should then start wrapping up and heading towards the next scene.", "To Knowledge - the next scene centers on lore or investigation of your choosing. Set the main elements of the next scene, and start heading toward them in this scene.", "Framing - an NPC (new or pre-existing) or object becomes critical to the main thread.", "Set Change - scene continues in another location. The current thread remains as much as makes sense.", "Upstaged - an NPC makes a big move. If the NPC has any motivations, plot vectors, or goals they go into overdrive.", "Pattern Change - the main thread gets modified, drastically. Whatever direction the main thread was heading, make a hard left.", "Limelit - the rest of the scene goes great for the PC’s. Assume that the majority of the questions pertaining to the main thread with regard to the scene are answered in a way that benefits the PC’s.", "Entering the Red - threat of danger or combat arrives. The premise of the scene gets more dangerous in a way that forces the PC’s to respond by leaving, fighting, or taking their chances.", "To Endings - the next scene resolves or substantially moves forward a thread of your choosing. Set the main elements of the next scene, and start heading toward them in this scene.", "Montage - the timeframe of the scene changes to a montage of actions set across various scenes to move forward.", "Enter Stage Left - a PC or NPC (new or pre-existing) arrives fresh in the scene.", "Cross-stitch - choose another thread to be the main thread for the rest of the scene.", "Six Degrees - a meaningful, but not always positive, connection forms between two PC’s and/or NPC’s."];
		return tab2Vals[roll2-1];
	}
	
	var result = table1();

	if(result=="Yes."){
		document.getElementById("crgeresult").innerHTML = result;
		document.getElementById("surgeCount").value = +document.getElementById("surgeCount").value + 2;
	}
	else if(result=="No."){
		document.getElementById("crgeresult").innerHTML = result;
		document.getElementById("surgeCount").value = +document.getElementById("surgeCount").value + 2;
	}
	else {
		document.getElementById("crgeresult").innerHTML = result;
		document.getElementById("surgeCount").value = 0;
	}
}