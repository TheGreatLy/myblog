


(function () {
    let bannerli = document.querySelectorAll(".banner>li") ;

    let rightbtn = document.querySelector(".lrbtn>li:last-child"),
        leftbtn = document.querySelector(".lrbtn>li:first-child"),
        current = 0,
        w = bannerli[0].offsetWidth,
        next = 0;


    rightbtn.onclick = function () {
        next++;
        if (next === bannerli.length){
            next = 0;
        }
        bannerli[next].style.left = w+"px";
        animate(bannerli[current],{left:-w},500);
        animate(bannerli[next],{left:0},500,);
        current = next;
    }
    leftbtn.onclick = function () {
        next--;
        if (next === -1){
            next = bannerli.length-1;
        }
        bannerli[next].style.left = -1 * w +"px";
        animate(bannerli[current],{left:w},500);
        animate(bannerli[next],{left:0},500,);
        current = next;
    }

})()