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

function makeDefault() {
    for (let i = 1; i < 11; i++) {
        document.getElementById(`round${i}`).style.display = 'none';
        document.getElementById(`button${i}`).style.backgroundColor = '#975e6a';
    }
}

function showRound1() {
    makeDefault();
    document.getElementById('round1').style.display = 'grid';
    document.getElementById('button1').style.backgroundColor = '#c18794';
}

function showRound2() {
    makeDefault();
    document.getElementById('round2').style.display = 'grid';
    document.getElementById('button2').style.backgroundColor = '#c18794';
}

function showRound3() {
    makeDefault();
    document.getElementById('round3').style.display = 'grid';
    document.getElementById('button3').style.backgroundColor = '#c18794';
}

function showRound4() {
    makeDefault();
    document.getElementById('round4').style.display = 'grid';
    document.getElementById('button4').style.backgroundColor = '#c18794';
}

function showRound5() {
    makeDefault();
    document.getElementById('round5').style.display = 'grid';
    document.getElementById('button5').style.backgroundColor = '#c18794';
}

function showRound6() {
    makeDefault();
    document.getElementById('round6').style.display = 'grid';
    document.getElementById('button6').style.backgroundColor = '#c18794';
}

function showRound7() {
    makeDefault();
    document.getElementById('round7').style.display = 'grid';
    document.getElementById('button7').style.backgroundColor = '#c18794';
}

function showRound8() {
    makeDefault();
    document.getElementById('round8').style.display = 'grid';
    document.getElementById('button8').style.backgroundColor = '#c18794';
}

function showRound9() {
    makeDefault();
    document.getElementById('round9').style.display = 'grid';
    document.getElementById('button9').style.backgroundColor = '#c18794';
}

function showRound10() {
    makeDefault();
    document.getElementById('round10').style.display = 'grid';
    document.getElementById('button10').style.backgroundColor = '#c18794';
}