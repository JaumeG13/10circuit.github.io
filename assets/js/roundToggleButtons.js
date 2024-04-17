function makeDefault() {
    document.getElementById('s2btn').style.display = 'block';
}

function roundToggleStandings() {
    if ((document.getElementById('championship-button').checked)) {  //if championship circuit is selected, show season 2
        makeDefault();
    }
    
    if (document.getElementById('porsche-button').checked) {    //if porsche cup is selected, hide season 2 and check season 1
        makeDefault();
        document.getElementById('s2btn').style.display = 'none';
        document.getElementById('season1-button').checked = true;
    }  

    let roundHtml;

    //CHAMPIONSHIP SEASON 1
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round1-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season1/round1.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round2-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season1/round2.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round3-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season1/round3.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round4-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season1/round4.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round5-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season1/round5.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round6-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season1/round6.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round7-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season1/round7.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round8-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season1/round8.html";
    }
    //CHAMPIONSHIP SEASON 2
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round1-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season2/round1.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round2-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season2/round2.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round3-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season2/round3.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round4-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season2/round4.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round5-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season2/round5.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round6-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season2/round6.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round7-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season2/round7.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round8-button').checked)) {
        roundHtml = "/standings/championshipcircuit/season2/round8.html";
    }
    //PORSCHE SEASON 1
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round1-button').checked)) {
        roundHtml = "/standings/porschecup/season1/round1.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round2-button').checked)) {
        roundHtml = "/standings/porschecup/season1/round2.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round3-button').checked)) {
        roundHtml = "/standings/porschecup/season1/round3.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round4-button').checked)) {
        roundHtml = "/standings/porschecup/season1/round4.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round5-button').checked)) {
        roundHtml = "/standings/porschecup/season1/round5.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round6-button').checked)) {
        roundHtml = "/standings/porschecup/season1/round6.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round7-button').checked)) {
        roundHtml = "/standings/porschecup/season1/round7.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round8-button').checked)) {
        roundHtml = "/standings/porschecup/season1/round8.html";
    }

    if ($('#circuit') && roundHtml) {
        $('#circuit').load(roundHtml);
    }

    if ((document.getElementById('round1-button').checked)) {   //this hides 2 span tags from the legend under standings if round 1 button is selected
        document.getElementById('difference').style.display = 'none';
        document.getElementById('ptsGain').style.display = 'none';
    } else {
        document.getElementById('difference').style.display = 'block';
        document.getElementById('ptsGain').style.display = 'block';
    }
}




function roundToggleResults() {
    if ((document.getElementById('championship-button').checked)) {  //if championship circuit is selected, show season 2
        makeDefault();
    }
    
    if (document.getElementById('porsche-button').checked) {    //if porsche cup is selected, hide season 2 and check season 1
        makeDefault();
        document.getElementById('s2btn').style.display = 'none';
        document.getElementById('season1-button').checked = true;
    }
    

    let roundHtml;

    //CHAMPIONSHIP SEASON 1
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round1-button').checked)) {
        roundHtml = "/results/championshipcircuit/season1/round1.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round2-button').checked)) {
        roundHtml = "/results/championshipcircuit/season1/round2.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round3-button').checked)) {
        roundHtml = "/results/championshipcircuit/season1/round3.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round4-button').checked)) {
        roundHtml = "/results/championshipcircuit/season1/round4.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round5-button').checked)) {
        roundHtml = "/results/championshipcircuit/season1/round5.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round6-button').checked)) {
        roundHtml = "/results/championshipcircuit/season1/round6.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round7-button').checked)) {
        roundHtml = "/results/championshipcircuit/season1/round7.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round8-button').checked)) {
        roundHtml = "/results/championshipcircuit/season1/round8.html";
    }
    //CHAMPIONSHIP SEASON 2
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round1-button').checked)) {
        roundHtml = "/results/championshipcircuit/season2/round1.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round2-button').checked)) {
        roundHtml = "/results/championshipcircuit/season2/round2.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round3-button').checked)) {
        roundHtml = "/results/championshipcircuit/season2/round3.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round4-button').checked)) {
        roundHtml = "/results/championshipcircuit/season2/round4.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round5-button').checked)) {
        roundHtml = "/results/championshipcircuit/season2/round5.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round6-button').checked)) {
        roundHtml = "/results/championshipcircuit/season2/round6.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round7-button').checked)) {
        roundHtml = "/results/championshipcircuit/season2/round7.html";
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round8-button').checked)) {
        roundHtml = "/results/championshipcircuit/season2/round8.html";
    }
    //PORSCHE SEASON 1
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round1-button').checked)) {
        roundHtml = "/results/porschecup/season1/round1.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round2-button').checked)) {
        roundHtml = "/results/porschecup/season1/round2.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round3-button').checked)) {
        roundHtml = "/results/porschecup/season1/round3.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round4-button').checked)) {
        roundHtml = "/results/porschecup/season1/round4.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round5-button').checked)) {
        roundHtml = "/results/porschecup/season1/round5.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round6-button').checked)) {
        roundHtml = "/results/porschecup/season1/round6.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round7-button').checked)) {
        roundHtml = "/results/porschecup/season1/round7.html";
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round8-button').checked)) {
        roundHtml = "/results/porschecup/season1/round8.html";
    }
    //SPECIAL EVENTS
    if ((document.getElementById('special-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round1-button').checked)) {
        roundHtml = "/results/special/fmulticlassaustria.html";
    }

    if ($('#circuit') && roundHtml) {
        $('#circuit').load(roundHtml);
    }
}




/* leaving this here for possible future use (round 9 and round 10 buttons)

function makeDefault() {
    document.getElementById('s2btn').style.display = 'block';

    document.getElementById('rnd9').style.display = 'block';
    document.getElementById('rnd10').style.display = 'block';
}

function roundToggleStandings() {
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked)) {  //if championship circuit and season 1 is selected, hide round 9 and 10/
        makeDefault();
        document.getElementById('rnd9').style.display = 'none';
        document.getElementById('rnd10').style.display = 'none';
    }
    
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked)) {  //if championship circuit and season 2 is selected, show round 9 and 10
        makeDefault();
        document.getElementById('rnd9').style.display = 'block';
        document.getElementById('rnd10').style.display = 'block';
    }
    
    if (document.getElementById('porsche-button').checked) {    //if porsche cup is selected, hide season 2, round 9, round 10 and check season 1
        makeDefault();
        document.getElementById('s2btn').style.display = 'none';
        document.getElementById('season1-button').checked = true;
        document.getElementById('rnd9').style.display = 'none';
        document.getElementById('rnd10').style.display = 'none';
    }
    

    //if championship circuit, season 1 and round 9 or round 10 are selected, and you switch to championship circuit season 1 or porsche cup it will default to round 1
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && ((document.getElementById('round9-button').checked) || (document.getElementById('round10-button').checked))) {
        document.getElementById('round1-button').checked = true;
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && ((document.getElementById('round9-button').checked) || (document.getElementById('round10-button').checked))) {
        document.getElementById('round1-button').checked = true;
    }
*/