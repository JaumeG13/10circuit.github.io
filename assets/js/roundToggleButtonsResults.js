/*

Championship circuit
    - Season 1
        - Round 1-8
    - Season 2
        - Round 1-8
Porsche cup
    - Season 1
        - Round 1-7
Special events
    - F1 multiclass
    - Nordschleife 2.4
    - Sugo
    - Sepang
    - Indy 250

*/

function makeDefault() {
    document.getElementById('s1btn').style.display = 'block';
    document.getElementById('s2btn').style.display = 'block';
    document.getElementById('separator2').style.display = 'block'; //for special event
    document.getElementById('season-buttons-container').style.display = 'flex'; //for special event
    //add special event as they come
    document.getElementById('austriabtn').style.display = 'none';
    document.getElementById('n24btn').style.display = 'none';
    document.getElementById('sugobtn').style.display = 'none';
    document.getElementById('sepangbtn').style.display = 'none';
    document.getElementById('indybtn').style.display = 'none';
    document.getElementById('indy25btn').style.display = 'none';

    //removes round buttons
    // Get all elements with id that matches 'round<number>-button'
    let elements = document.querySelectorAll('[id^="r"][id$="-btn"]');
    // Loop through the elements and hide them
    elements.forEach(element => {
    let id = element.id;
        if (id.match(/^r\d+-btn$/)) {
            element.style.display = 'block';
        }
    });
}

function roundToggleResults() {
    if ((document.getElementById('championship-button').checked)) {  //if championship circuit is selected, show season 1 & 2, hide special event buttons
        makeDefault();
    }



    if (document.getElementById('porsche-button').checked) {    //if porsche cup is selected, show & check season 1, hide season 2 & special event buttons
        makeDefault();
        document.getElementById('s1btn').style.display = 'block';
        document.getElementById('s2btn').style.display = 'none';
        document.getElementById('season1-button').checked = true;
        document.getElementById('r8-btn').style.display = 'none';
        /*document.getElementById('round7-button').checked = true;    doesnt work???*/
    }



    if (document.getElementById('special-button').checked) {    //if special event is selected, hide season button container & round buttons, show special event buttons
        makeDefault();
        document.getElementById('s1btn').style.display = 'none';
        document.getElementById('s2btn').style.display = 'none';
        document.getElementById('separator2').style.display = 'none';
        document.getElementById('season-buttons-container').style.display = 'none';
        //add special event as they come
        document.getElementById('austriabtn').style.display = 'block';
        document.getElementById('n24btn').style.display = 'block';
        document.getElementById('sugobtn').style.display = 'block';
        document.getElementById('sepangbtn').style.display = 'block';
        document.getElementById('indybtn').style.display = 'block';    
        document.getElementById('indy25btn').style.display = 'block';    

        //removes round buttons
        // Get all elements with id that matches 'round<number>-button'
        let elements = document.querySelectorAll('[id^="r"][id$="-btn"]');
        // Loop through the elements and hide them
        elements.forEach(element => {
        let id = element.id;
            if (id.match(/^r\d+-btn$/)) {
                element.style.display = 'none';
            }
        });
    }



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
    //SPECIAL EVENTS
    if ((document.getElementById('special-button').checked) && (document.getElementById('austria-button').checked)) {
        roundHtml = "/results/special/fmulticlassaustria.html";
    }
    if ((document.getElementById('special-button').checked) && (document.getElementById('nords-button').checked)) {
        roundHtml = "/results/special/nords2.4.html";
    }
    if ((document.getElementById('special-button').checked) && (document.getElementById('sugo-button').checked)) {
        roundHtml = "/results/special/sugo.html";
    }
    if ((document.getElementById('special-button').checked) && (document.getElementById('sepang-button').checked)) {
        roundHtml = "/results/special/sepang.html";
    }
    if ((document.getElementById('special-button').checked) && (document.getElementById('indy-button').checked)) {
        roundHtml = "/results/special/indy.html";
    }
    if ((document.getElementById('special-button').checked) && (document.getElementById('indy25-button').checked)) {
        roundHtml = "/results/special/indy25.html";
    }



    if ($('#circuit') && roundHtml) {
        $('#circuit').load(roundHtml);
    }
}