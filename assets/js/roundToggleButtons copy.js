/* SERIES */
var championshipCircuit = document.getElementById('championship-circuit');
var porscheCup = document.getElementById('porsche-cup');

function makeDefaultSeries() {   /*increase "i < 3" if new series is added*/
    for (let i = 1; i < 3; i++) {      /*series buttons*/
        document.getElementById('championship-circuit').style.display = 'none';
        document.getElementById('porsche-cup').style.display = 'none';

        document.getElementById('champ').style.fontWeight = 'normal';
        document.getElementById('champ').style.textDecoration = 'none';
        document.getElementById('porsche').style.fontWeight = 'normal';
        document.getElementById('porsche').style.textDecoration = 'none';

        document.getElementById('szn2').style.display = 'grid';
    }
}

function showChampionshipCircuit() {
    makeDefaultSeries();
    document.getElementById('championship-circuit').style.display = 'grid';
    document.getElementById('champ').style.fontWeight = 'bold';
    document.getElementById('champ').style.textDecoration = 'underline';
}
function showPorscheCup() {
    makeDefaultSeries();
    showSeason1()
    document.getElementById('porsche-cup').style.display = 'grid';
    document.getElementById('porsche').style.fontWeight = 'bold';
    document.getElementById('porsche').style.textDecoration = 'underline';
    
    document.getElementById('szn2').style.display = 'none';
}





/* SEASONS */
var Season1 = document.getElementById('season1');
var Season2 = document.getElementById('season2');

function makeDefaultSeason() {
    for (let i = 1; i < 3; i++) {   /*increase "i < 3" when new season is added*/
        document.getElementById(`season${i}`).style.display = 'none';
        document.getElementById(`szn${i}`).style.fontWeight = 'normal';
        document.getElementById(`szn${i}`).style.textDecoration = 'none';
    }
}

function showSeason1() {
    makeDefaultSeason();
    document.getElementById('season1').style.display = 'grid';
    document.getElementById('szn1').style.fontWeight = 'bold';
    document.getElementById('szn1').style.textDecoration = 'underline';
}
function showSeason2() {
    makeDefaultSeason();
    document.getElementById('season2').style.display = 'grid';
    document.getElementById('szn2').style.fontWeight = 'bold';
    document.getElementById('szn2').style.textDecoration = 'underline';
}





/* ROUNDS */
var r1 = document.getElementById('round1');
var r2 = document.getElementById('round2');
var r3 = document.getElementById('round3');
var r4 = document.getElementById('round4');
var r5 = document.getElementById('round5');
var r6 = document.getElementById('round6');
var r7 = document.getElementById('round7');
var r8 = document.getElementById('round8');
var r9 = document.getElementById('round9');
var r10 = document.getElementById('round10');

function makeDefaultRound() {   
    for (let i = 1; i < 9; i++) {  /*increase "i < 9" if theres more than 8 rounds*/
        document.getElementById(`round${i}`).style.display = 'none';
        document.getElementById(`button${i}`).style.fontWeight = 'normal';
        document.getElementById(`button${i}`).style.textDecoration = 'none';
    }
}

function showRound1() {
    makeDefaultRound();
    document.getElementById('round1').style.display = 'grid';
    document.getElementById('button1').style.fontWeight = 'bold';
    document.getElementById('button1').style.textDecoration = 'underline';
}
function showRound2() {
    makeDefaultRound();
    document.getElementById('round2').style.display = 'grid';
    document.getElementById('button2').style.fontWeight = 'bold';
    document.getElementById('button2').style.textDecoration = 'underline';
}
function showRound3() {
    makeDefaultRound();
    document.getElementById('round3').style.display = 'grid';
    document.getElementById('button3').style.fontWeight = 'bold';
    document.getElementById('button3').style.textDecoration = 'underline';
}
function showRound4() {
    makeDefaultRound();
    document.getElementById('round4').style.display = 'grid';
    document.getElementById('button4').style.fontWeight = 'bold';
    document.getElementById('button4').style.textDecoration = 'underline';
}
function showRound5() {
    makeDefaultRound();
    document.getElementById('round5').style.display = 'grid';
    document.getElementById('button5').style.fontWeight = 'bold';
    document.getElementById('button5').style.textDecoration = 'underline';
}
function showRound6() {
    makeDefaultRound();
    document.getElementById('round6').style.display = 'grid';
    document.getElementById('button6').style.fontWeight = 'bold';
    document.getElementById('button6').style.textDecoration = 'underline';
}
function showRound7() {
    makeDefaultRound();
    document.getElementById('round7').style.display = 'grid';
    document.getElementById('button7').style.fontWeight = 'bold';
    document.getElementById('button7').style.textDecoration = 'underline';
}
function showRound8() {
    makeDefaultRound();
    document.getElementById('round8').style.display = 'grid';
    document.getElementById('button8').style.fontWeight = 'bold';
    document.getElementById('button8').style.textDecoration = 'underline';
}
function showRound9() {
    document.getElementById('round9').style.display = 'grid';
    document.getElementById('button9').style.fontWeight = 'bold';
    document.getElementById('button9').style.textDecoration = 'underline';
}
function showRound10() {
    document.getElementById('round10').style.display = 'grid';
    document.getElementById('button10').style.fontWeight = 'bold';
    document.getElementById('button10').style.textDecoration = 'underline';
}



/* RANDOM 
if ((document.getElementById('championship-circuit').style.display == 'grid') && (document.getElementById('season1').style.display == 'grid')) {
    document.getElementById('button9').style.display = 'none';
    document.getElementById('button10').style.display = 'none';
}*/












/* SERIES */
var championshipCircuit = document.getElementsByClassName('championship-circuit');
var porscheCup = document.getElementsByClassName('porsche-cup');

function makeDefaultSeries() {
    for (let i = 1; i < 3; i++) {      /*series buttons*/
        document.getElementsByClassName('championship-circuit').style.display = 'none';
        document.getElementsByClassName('porsche-cup').style.display = 'none';

        document.getElementsByClassName('championship-circuit').style.fontWeight = 'normal';
        document.getElementsByClassName('championship-circuit').textDecoration = 'none';
        document.getElementsByClassName('porsche-cup').fontWeight = 'normal';
        document.getElementsByClassName('porsche-cup').textDecoration = 'none';
    }
}

function showChampionshipCircuit() {
    makeDefaultSeries();
    
    document.getElementsByClassName('championship-circuit').style.display = 'grid';
    document.getElementsByClassName('championship-button').style.fontWeight = 'bold';
    document.getElementsByClassName('championship-button').style.textDecoration = 'underline';
}
function showPorscheCup() {
    makeDefaultSeries();
    
    document.getElementsByClassName('porsche-cup').style.display = 'grid';
    document.getElementsByClassName('porsche-button').style.fontWeight = 'bold';
    document.getElementsByClassName('porsche-button').style.textDecoration = 'underline';
}