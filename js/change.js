(function () {
    var tag = $(".tag>li a");
    var main = $("#main-con"),
        person = $("#personal");
    var m = $("#main div");
    //console.log(tag);
    [...tag].forEach((ele,index)=>{
        ele.onclick = function () {
            tag.removeClass("active");
            ele.classList.add("active");
            console.log(index);
            switch (index) {
                case 0:
                    $("#main>div").eq(0).siblings().css({"display":"none"});
                    $("#main>div").eq(0).css({"display":"block"});break;
                case 1:
                    $("#main>div").eq(1).siblings().css({"display":"none"});
                    $("#main>div").eq(1).css({"display":"block"});break;
                case 5:
                    $("#main>div").eq(2).siblings().css({"display":"none"});
                    $("#main>div").eq(2).css({"display":"block"});break;
                case 7:
                    $("#main>div").eq(3).siblings().css({"display":"none"});
                    $("#main>div").eq(3).css({"display":"block"});break;
                case 4:
                    $("#main>div").eq(4).siblings().css({"display":"none"});
                    $("#main>div").eq(4).css({"display":"block"});break;
                case 3:
                    $("#main>div").eq(1).siblings().css({"display":"none"});
                    $("#main>div").eq(1).css({"display":"block"});break;
            }
        }
    })


})();