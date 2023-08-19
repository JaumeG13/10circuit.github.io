/* SERIES */
var championshipCircuit = document.getElementsByClassName('championship-circuit');
var porscheCup = document.getElementsByClassName('porsche-cup');

var championshipButton = document.getElementsByClassName('championship-button');
var porscheButton = document.getElementsByClassName('porsche-button');


/* SEASONS */
var seasonOne = document.getElementsByClassName('season1');
var seasonTwo = document.getElementsByClassName('season2');

var seasonOneButton = document.getElementsByClassName('season1-button');
var seasonTwoButton = document.getElementsByClassName('season2-button');


/* ROUNDS */
/*championship circuit season 1*/
var ccSzn1R1 = document.getElementById('ccs1r1');
var ccSzn1R2 = document.getElementById('ccs1r2');
var ccSzn1R3 = document.getElementById('ccs1r3');
var ccSzn1R4 = document.getElementById('ccs1r4');
var ccSzn1R5 = document.getElementById('ccs1r5');
var ccSzn1R6 = document.getElementById('ccs1r6');
var ccSzn1R7 = document.getElementById('ccs1r7');
var ccSzn1R8 = document.getElementById('ccs1r8');
/*championship circuit season 2*/
var ccSzn2R1 = document.getElementById('ccs2r1');
var ccSzn2R2 = document.getElementById('ccs2r2');
var ccSzn2R3 = document.getElementById('ccs2r3');
var ccSzn2R4 = document.getElementById('ccs2r4');
var ccSzn2R5 = document.getElementById('ccs2r5');
var ccSzn2R6 = document.getElementById('ccs2r6');
var ccSzn2R7 = document.getElementById('ccs2r7');
var ccSzn2R8 = document.getElementById('ccs2r8');
/*porsche cup season 1*/
var ccSzn1R1 = document.getElementById('pcs1r1');
var ccSzn1R2 = document.getElementById('pcs1r2');
var ccSzn1R3 = document.getElementById('pcs1r3');
var ccSzn1R4 = document.getElementById('pcs1r4');
var ccSzn1R5 = document.getElementById('pcs1r5');
var ccSzn1R6 = document.getElementById('pcs1r6');
var ccSzn1R7 = document.getElementById('pcs1r7');
var ccSzn1R8 = document.getElementById('pcs1r8');

var round1Button = document.getElementById('round1-button');
var round2Button = document.getElementById('round2-button');
var round3Button = document.getElementById('round3-button');
var round4Button = document.getElementById('round4-button');
var round5Button = document.getElementById('round5-button');
var round6Button = document.getElementById('round6-button');
var round7Button = document.getElementById('round7-button');
var round8Button = document.getElementById('round8-button');
var round9Button = document.getElementById('round9-button');
var round10Button = document.getElementById('round10-button');

/* FUNCTIONS */
function makeDefault() {
    document.getElementById('ccs1r1').style.display = 'none';
    document.getElementById('ccs1r2').style.display = 'none';
    document.getElementById('ccs1r3').style.display = 'none';
    document.getElementById('ccs1r4').style.display = 'none';
    document.getElementById('ccs1r5').style.display = 'none';
    document.getElementById('ccs1r6').style.display = 'none';
    document.getElementById('ccs1r7').style.display = 'none';
    document.getElementById('ccs1r8').style.display = 'none';
    document.getElementById('ccs2r1').style.display = 'none';
    document.getElementById('ccs2r2').style.display = 'none';
    document.getElementById('ccs2r3').style.display = 'none';
    document.getElementById('ccs2r4').style.display = 'none';
    document.getElementById('ccs2r5').style.display = 'none';
    document.getElementById('ccs2r6').style.display = 'none';
    document.getElementById('ccs2r7').style.display = 'none';
    document.getElementById('ccs2r8').style.display = 'none';
    document.getElementById('ccs2r9').style.display = 'none';
    document.getElementById('ccs2r10').style.display = 'none';
    document.getElementById('pcs1r1').style.display = 'none';
    document.getElementById('pcs1r2').style.display = 'none';
    document.getElementById('pcs1r3').style.display = 'none';
    document.getElementById('pcs1r4').style.display = 'none';
    document.getElementById('pcs1r5').style.display = 'none';
    document.getElementById('pcs1r6').style.display = 'none';
    document.getElementById('pcs1r7').style.display = 'none';
    document.getElementById('pcs1r8').style.display = 'none';
}

function roundToggle() {
    if ((championshipButton.checked) && (seasonOneButton.checked) && (round1Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r1').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonOneButton.checked) && (round2Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r2').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonOneButton.checked) && (round3Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r3').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonOneButton.checked) && (round4Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r4').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonOneButton.checked) && (round5Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r5').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonOneButton.checked) && (round6Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r6').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonOneButton.checked) && (round7Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r7').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonOneButton.checked) && (round8Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r8').style.display = 'grid';
    }
    
    else if ((championshipButton.checked) && (seasonTwoButton.checked) && (round1Button.checked)) {
        makeDefault();
        document.getElementById('ccs2r1').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonTwoButton.checked) && (round2Button.checked)) {
        makeDefault();
        document.getElementById('ccs2r2').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonTwoButton.checked) && (round3Button.checked)) {
        makeDefault();
        document.getElementById('ccs2r3').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonTwoButton.checked) && (round4Button.checked)) {
        makeDefault();
        document.getElementById('ccs2r4').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonTwoButton.checked) && (round5Button.checked)) {
        makeDefault();
        document.getElementById('ccs2r5').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonTwoButton.checked) && (round6Button.checked)) {
        makeDefault();
        document.getElementById('ccs2r6').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonTwoButton.checked) && (round7Button.checked)) {
        makeDefault();
        document.getElementById('ccs2r7').style.display = 'grid';
    }
    else if ((championshipButton.checked) && (seasonTwoButton.checked) && (round8Button.checked)) {
        makeDefault();
        document.getElementById('ccs2r8').style.display = 'grid';
    }

    else if ((porscheButton.checked) && (seasonOneButton.checked) && (round1Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r1').style.display = 'grid';
    }
    else if ((porscheButton.checked) && (seasonOneButton.checked) && (round2Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r2').style.display = 'grid';
    }
    else if ((porscheButton.checked) && (seasonOneButton.checked) && (round3Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r3').style.display = 'grid';
    }
    else if ((porscheButton.checked) && (seasonOneButton.checked) && (round4Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r4').style.display = 'grid';
    }
    else if ((porscheButton.checked) && (seasonOneButton.checked) && (round5Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r5').style.display = 'grid';
    }
    else if ((porscheButton.checked) && (seasonOneButton.checked) && (round6Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r6').style.display = 'grid';
    }
    else if ((porscheButton.checked) && (seasonOneButton.checked) && (round7Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r7').style.display = 'grid';
    }
    else if ((porscheButton.checked) && (seasonOneButton.checked) && (round8Button.checked)) {
        makeDefault();
        document.getElementById('ccs1r8').style.display = 'grid';
    }
    else {
        console.log("Error")
    }
}