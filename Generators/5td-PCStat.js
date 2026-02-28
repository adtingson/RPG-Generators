/*
This is based on the Five Torches Deep Book
*/

function RaceStats(race) {
    /*
    "race" values
    1 - human
    2 - dwarf
    3 - elf
    4 - halfling
    */
    const statArray = [];
    const bonusPoints = ["-4", "-4", "-4", "-3", "-3", "-2", "-2", "-1", "-1", "+0", "+0", "+1", "+1", "+2", "+2", "+3", "+3", "+4"]
    if (race==1) {
        for (i=0; i<6; i++) {
            var roll1=Math.floor(Math.random()*6)+1;
            var roll2=Math.floor(Math.random()*6)+1;
            var roll3=Math.floor(Math.random()*6)+1;
            var rollTotal=roll1+roll2+roll3;
            var resultPush = "<b>" + rollTotal.toString() + "[" + bonusPoints[rollTotal-1] + "]</b>";
            statArray.push(resultPush);
        }
        document.getElementById("strScore").innerHTML = statArray[0];
        document.getElementById("dexScore").innerHTML = statArray[1];
        document.getElementById("conScore").innerHTML = statArray[2];
        document.getElementById("intScore").innerHTML = statArray[3];
        document.getElementById("wisScore").innerHTML = statArray[4];
        document.getElementById("chaScore").innerHTML = statArray[5];
        document.getElementById("additionalRule").innerHTML = "You may swap one pair.";
    }
    if (race==2) {
        for (i=0; i<4; i++) {
            var roll1=Math.floor(Math.random()*6)+1;
            var roll2=Math.floor(Math.random()*6)+1;
            var rollTotal=roll1+roll2+3;
            var resultPush = "<b>" + rollTotal.toString() + "[" + bonusPoints[rollTotal-1] + "]</b>";
            statArray.push(resultPush);
        }
        document.getElementById("strScore").innerHTML = "<b>13 [" + bonusPoints[12] + "]</b>";
        document.getElementById("dexScore").innerHTML = statArray[0];
        document.getElementById("conScore").innerHTML = "<b>13 [" + bonusPoints[12] + "]</b>";
        document.getElementById("intScore").innerHTML = statArray[1];
        document.getElementById("wisScore").innerHTML = statArray[2];
        document.getElementById("chaScore").innerHTML = statArray[3];
        document.getElementById("additionalRule").innerHTML = "Class Restrictions: Thief 13+ DEX; Mage 13+ INT";
    }
    if (race==3) {
        for (i=0; i<4; i++) {
            var roll1=Math.floor(Math.random()*6)+1;
            var roll2=Math.floor(Math.random()*6)+1;
            var rollTotal=roll1+roll2+3;
            var resultPush = "<b>" + rollTotal.toString() + "[" + bonusPoints[rollTotal-1] + "]</b>";
            statArray.push(resultPush);
        }
        document.getElementById("strScore").innerHTML = statArray[0];
        document.getElementById("dexScore").innerHTML = "<b>13 [" + bonusPoints[12] + "]</b>";
        document.getElementById("conScore").innerHTML = statArray[1];
        document.getElementById("intScore").innerHTML = "<b>13 [" + bonusPoints[12] + "]</b>";
        document.getElementById("wisScore").innerHTML = statArray[2];
        document.getElementById("chaScore").innerHTML = statArray[3];
        document.getElementById("additionalRule").innerHTML = "Class Restrictions: Warrior 13+ STR; Zealot 13+ WIS";
    }
    if (race==4) {
        for (i=0; i<4; i++) {
            var roll1=Math.floor(Math.random()*6)+1;
            var roll2=Math.floor(Math.random()*6)+1;
            var rollTotal=roll1+roll2+3;
            var resultPush = "<b>" + rollTotal.toString() + "[" + bonusPoints[rollTotal-1] + "]</b>";
            statArray.push(resultPush);
        }
        document.getElementById("strScore").innerHTML = statArray[0];
        document.getElementById("dexScore").innerHTML = statArray[1];
        document.getElementById("conScore").innerHTML = statArray[2];
        document.getElementById("intScore").innerHTML = statArray[3];
        document.getElementById("wisScore").innerHTML = "<b>13 [" + bonusPoints[12] + "]</b>";
        document.getElementById("chaScore").innerHTML = "<b>13 [" + bonusPoints[12] + "]</b>";
        document.getElementById("additionalRule").innerHTML = "Class Restrictions: Warrior 13+ STR; Mage 13+ INT";
    }
}
