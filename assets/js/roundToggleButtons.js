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

    //CHAMPIONSHIP SEASON 1
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round1-button').checked)) {
        $("#ccs1r1").load("/standings/championshipcircuit/season1/round1.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round2-button').checked)) {
        $("#ccs1r2").load("/standings/championshipcircuit/season1/round2.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round3-button').checked)) {
        $("#ccs1r3").load("/standings/championshipcircuit/season1/round3.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round4-button').checked)) {
        $("#ccs1r4").load("/standings/championshipcircuit/season1/round4.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round5-button').checked)) {
        $("#ccs1r5").load("/standings/championshipcircuit/season1/round5.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round6-button').checked)) {
        $("#ccs1r6").load("/standings/championshipcircuit/season1/round6.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round7-button').checked)) {
        $("#ccs1r7").load("/standings/championshipcircuit/season1/round7.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round8-button').checked)) {
        $("#ccs1r8").load("/standings/championshipcircuit/season1/round8.html");
    }
    //CHAMPIONSHIP SEASON 2
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round1-button').checked)) {
        $("#ccs2r1").load("/standings/championshipcircuit/season2/round1.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round2-button').checked)) {
        $("#ccs2r2").load("/standings/championshipcircuit/season2/round2.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round3-button').checked)) {
        $("#ccs2r3").load("/standings/championshipcircuit/season2/round3.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round4-button').checked)) {
        $("#ccs2r4").load("/standings/championshipcircuit/season2/round4.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round5-button').checked)) {
        $("#ccs2r5").load("/standings/championshipcircuit/season2/round5.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round6-button').checked)) {
        $("#ccs2r6").load("/standings/championshipcircuit/season2/round6.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round7-button').checked)) {
        $("#ccs2r7").load("/standings/championshipcircuit/season2/round7.html");
    }
    if ((document.getElementById('championship-button').checked) && (document.getElementById('season2-button').checked) && (document.getElementById('round8-button').checked)) {
        $("#ccs2r8").load("/standings/championshipcircuit/season2/round8.html");
    }
    //PORSCHE SEASON 1
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round1-button').checked)) {
        $("#pcs1r1").load("/standings/porschecup/season1/round1.html");
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round2-button').checked)) {
        $("#pcs1r2").load("/standings/porschecup/season1/round2.html");
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round3-button').checked)) {
        $("#pcs1r3").load("/standings/porschecup/season1/round3.html");
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round4-button').checked)) {
        $("#pcs1r4").load("/standings/porschecup/season1/round4.html");
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round5-button').checked)) {
        $("#pcs1r5").load("/standings/porschecup/season1/round5.html");
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round6-button').checked)) {
        $("#pcs1r6").load("/standings/porschecup/season1/round6.html");
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round7-button').checked)) {
        $("#pcs1r7").load("/standings/porschecup/season1/round7.html");
    }
    if ((document.getElementById('porsche-button').checked) && (document.getElementById('season1-button').checked) && (document.getElementById('round8-button').checked)) {
        $("#pcs1r8").load("/standings/porschecup/season1/round8.html");
    }
    
}