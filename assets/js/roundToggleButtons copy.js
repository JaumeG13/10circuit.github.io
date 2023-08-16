var championshipCircuit = document.getElementById('championship-circuit');
var porscheCup = document.getElementById('porsche-cup');

var s1 = document.getElementById('season1');
var s2 = document.getElementById('season2');

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

function makeDefault() {    /* reset the styles when selecting another button */
    for (let i = 1; i < 11; i++) {      /*round buttons*/
        document.getElementById(`round${i}`).style.display = 'none';
        document.getElementById(`button${i}`).style.fontWeight = 'normal';
        document.getElementById(`button${i}`).style.textDecoration = 'none';
    }
}
function makeDefaultSeries() {
    for (let i = 1; i < 3; i++) {      /*series buttons*/
        document.getElementById('championship-circuit').style.display = 'none';
        document.getElementById('porsche-cup').style.display = 'none';

        document.getElementById('champ').style.fontWeight = 'normal';
        document.getElementById('champ').style.textDecoration = 'none';
        document.getElementById('porsche').style.fontWeight = 'normal';
        document.getElementById('porsche').style.textDecoration = 'none';
    }
}
function makeDefaultSzn() {
    for (let i = 1; i < 3; i++) {      /*szn buttons*/
        document.getElementById(`season${i}`).style.display = 'none';
        document.getElementById(`szn${i}`).style.fontWeight = 'normal';
        document.getElementById(`szn${i}`).style.textDecoration = 'none';
    }
}

/*series*/
function showChampionshipCircuit() {
    makeDefaultSeries();
    document.getElementById('championship-circuit').style.display = 'grid';
    document.getElementById('champ').style.fontWeight = 'bold';
    document.getElementById('champ').style.textDecoration = 'underline';
}
function showPorscheCup() {
    makeDefaultSeries();
    document.getElementById('porsche-cup').style.display = 'grid';
    document.getElementById('porsche').style.fontWeight = 'bold';
    document.getElementById('porsche').style.textDecoration = 'underline';
}

/*season*/
function showSeason1() {
    makeDefaultSzn();
    document.getElementById('season1').style.display = 'grid';
    document.getElementById('szn1').style.fontWeight = 'bold';
    document.getElementById('szn1').style.textDecoration = 'underline';
}
function showSeason2() {
    makeDefaultSzn();
    document.getElementById('season2').style.display = 'grid';
    document.getElementById('szn2').style.fontWeight = 'bold';
    document.getElementById('szn2').style.textDecoration = 'underline';
}

/*round*/
function showRound1() {
    makeDefault();
    document.getElementById('round1').style.display = 'grid';
    document.getElementById('button1').style.fontWeight = 'bold';
    document.getElementById('button1').style.textDecoration = 'underline';
}
function showRound2() {
    makeDefault();
    document.getElementById('round2').style.display = 'grid';
    document.getElementById('button2').style.fontWeight = 'bold';
    document.getElementById('button2').style.textDecoration = 'underline';
}
function showRound3() {
    makeDefault();
    document.getElementById('round3').style.display = 'grid';
    document.getElementById('button3').style.fontWeight = 'bold';
    document.getElementById('button3').style.textDecoration = 'underline';
}
function showRound4() {
    makeDefault();
    document.getElementById('round4').style.display = 'grid';
    document.getElementById('button4').style.fontWeight = 'bold';
    document.getElementById('button4').style.textDecoration = 'underline';
}
function showRound5() {
    makeDefault();
    document.getElementById('round5').style.display = 'grid';
    document.getElementById('button5').style.fontWeight = 'bold';
    document.getElementById('button5').style.textDecoration = 'underline';
}
function showRound6() {
    makeDefault();
    document.getElementById('round6').style.display = 'grid';
    document.getElementById('button6').style.fontWeight = 'bold';
    document.getElementById('button6').style.textDecoration = 'underline';
}
function showRound7() {
    makeDefault();
    document.getElementById('round7').style.display = 'grid';
    document.getElementById('button7').style.fontWeight = 'bold';
    document.getElementById('button7').style.textDecoration = 'underline';
}
function showRound8() {
    makeDefault();
    document.getElementById('round8').style.display = 'grid';
    document.getElementById('button8').style.fontWeight = 'bold';
    document.getElementById('button8').style.textDecoration = 'underline';
}
function showRound9() {
    makeDefault();
    document.getElementById('round9').style.display = 'grid';
    document.getElementById('button9').style.fontWeight = 'bold';
    document.getElementById('button9').style.textDecoration = 'underline';
}
function showRound10() {
    makeDefault();
    document.getElementById('round10').style.display = 'grid';
    document.getElementById('button10').style.fontWeight = 'bold';
    document.getElementById('button10').style.textDecoration = 'underline';
}