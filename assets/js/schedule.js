function scheduleFilter() {
    // if championship circuit is checked and unchecked
    if ((document.getElementById('cc-button').checked)) {
        var cc = document.getElementsByClassName("cc");
        var i;
        for (i = 0; i < cc.length; i++) {
            cc[i].style.display = 'block';
        }
    }
    if ((!document.getElementById('cc-button').checked)) {
        var cc = document.getElementsByClassName("cc");
        var i;
        for (i = 0; i < cc.length; i++) {
            cc[i].style.display = 'none';
        }
    }


    
    // if porsche cup is checked and unchecked
    if ((document.getElementById('pc-button').checked)) {
        var pc = document.getElementsByClassName("pc");
        var i;
        for (i = 0; i < pc.length; i++) {
            pc[i].style.display = 'block';
        }
    }
    if ((!document.getElementById('pc-button').checked)) {
        var pc = document.getElementsByClassName("pc");
        var i;
        for (i = 0; i < pc.length; i++) {
            pc[i].style.display = 'none';
        }
    }



    // if special event is checked and unchecked
    if ((document.getElementById('special-button').checked)) {
        var se = document.getElementsByClassName("specialEvent");
        var i;
        for (i = 0; i < se.length; i++) {
            se[i].style.display = 'block';
        }
    }
    if ((!document.getElementById('special-button').checked)) {
        var se = document.getElementsByClassName("specialEvent");
        var i;
        for (i = 0; i < se.length; i++) {
            se[i].style.display = 'none';
        }
    }



    // hide past events
    if ((document.getElementById('past-button').checked)) {
        var past = document.getElementsByClassName("past");
        var i;
        for (i = 0; i < past.length; i++) {
            past[i].style.display = 'none';
        }
    }
    


/*
    //https://codepen.io/aprilmp/pen/NapMQW
        
    // initially, should be false
    var checked_all = false;

    // cached them, so you can just reference them
    var check_all_button = document.querySelector('#all-button');
    var target_checkboxes = document.querySelectorAll('.checkboxes');


    //if the user clicked on one of the checkboxes,
    //either checked them or unchecked them,
    //reset checked_all to false

    target_checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var unchecked = Array.prototype.slice.call(target_checkboxes).filter(checkbox => !checkbox.checked);
            
            if (unchecked.length) {
                checked_all = false;
                check_all_button.checked = false;
            } else {
                checked_all = true;
                check_all_button.checked = true;
            }
        });
    });
    
    //when the user clicked on the check all button,
    //check all the target checkboxes

    check_all_button.addEventListener('click', function() {
        checked_all = !checked_all;
        target_checkboxes.forEach(function(checkbox) {
            checkbox.checked = checked_all;
        });
    });
    */
}



/*
function checkUncheck(main) {
    all = document.getElementsByName('lang');
    for (var a = 0; a < all.length; a++) {
        all[a].checked = main.checked;
    }
}
 name="lang"

*/