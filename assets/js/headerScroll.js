var lastScrollTop = 0;
        header = document.getElementById("shrinker");
    window.addEventListener("scroll", function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            shrinker.style.top="-8vh";
        } else {
            lastScrollTop = scrollTop;
        }
    })