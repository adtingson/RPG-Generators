function rollCheck(pos, neg) {
    var actionRolls = [];

    // roll Action Dice
    for (let i=0; i<=pos; i++) {
        actionRolls.push(Math.floor(Math.random()*6)+1);
    }

    // subtract Danger Dice
    for (let j=0; j<neg && actionRolls.length > 0; j++) {
        var dangerRoll = Math.floor(Math.random()*6)+1;

        var index = actionRolls.indexOf(dangerRoll);

        if (index>-1) {
            actionRolls.splice(index,1);
        }
    }

    // check Botched Rolls
    if (actionRolls.length == 0) {
        var sortedRolls = [1];
    }
    else {
        var sortedRolls = actionRolls.sort(function(a,b){return b-a});
    }

    var finalRoll = sortedRolls[0];

    const oracleValue = ["No, and ... ", "No", "No, but ... ", "Yes, but ... ", "Yes", "Yes, and ... "];

    // check Boons
    var numberBoons = actionRolls.filter(x => x==6).length-1;

    var result;

    if (numberBoons<1) {
        if (finalRoll==2 || finalRoll==5) {
            result = oracleValue[finalRoll-1]+".";
        }
        else {
            result = oracleValue[finalRoll-1];
        }
    }
    else {
        if (finalRoll==2 || finalRoll==5) {
            result = oracleValue[finalRoll];
            for (let l=0; l<numberBoons-1; l++) {
                result+=", and ... ";
            }
        }
        else {
            result = oracleValue[finalRoll-1];
            for (let l=0; l<numberBoons; l++) {
                result+=", and ... ";
            }
        }
    }

    // console.log(pos + "-" + neg + ": " + result);

    document.getElementById("fu2result").innerHTML = result;
}