/*
var championshipButton = document.getElementById('championship-button');
var porscheButton = document.getElementById('porsche-button');

var seasonOneButton = document.getElementById('season1-button');
var seasonOneButton = document.getElementById('season1-button');

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


    if (championshipButton.checked == true && seasonOneButton.checked == true) {
        document.getElementById('rnd9').style.display = 'none';
        document.getElementById('rnd10').style.display = 'none';
    }

*/

function roundToggle() {
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked)) {  //if championship circuit and season 1 are selected, hide round 9 and 10
        document.getElementById('rnd9').style.display = 'none';
        document.getElementById('rnd10').style.display = 'none';
    }
    if ((document.getElementById('porsche-button').checked)) {  //if porsche cup is selected, hide season 2 and hide round 9 and 10
        document.getElementById('s2btn').style.display = 'none';
        document.getElementById('rnd9').style.display = 'none';
        document.getElementById('rnd10').style.display = 'none';
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
}
