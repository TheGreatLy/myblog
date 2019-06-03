(function() {
    var ul = $(".diary>.nav>li");
    var con = $(".diary .diary-con .diary-one");
    var mood = $(".diary-one.active .mood li");
    var i = 0;
    var l = 0;

    console.log(ul,con);

    [...ul].forEach((ele,index)=>{
        ele.onclick = function () {
            ul[i].classList.remove("active");
            con[i].classList.remove("active");
            con[index].classList.add("active");
            ul[index].classList.add("active");
            i = index;

            mood = $(".diary-one.active .mood li");
            l = 0;
            //console.log(mood);

            mouse();
        }
    });

    mouse();

    //鼠标移入事件
    function mouse() {
        [...mood].forEach((e,indexs)=>{
            e.onmouseenter = function () {
                //mouse(indexs,l);
                mood[l].classList.remove("active");
                mood[indexs].classList.add("active")
                l = indexs;
            }
        })

    }


    //轮播
    var banner = $(".banner");
    var lr = $(".lrbtn li");
    var btns = $(".btn li");
    var swiper = $(".swiper");
    var s = 0;
    var time = 0;
    var timer = null;
    function anim() {
        timer = setInterval(function () {
            times();
        },2000);
    }

    //定时器轮播
    function times() {
        if (time===3){
            time = 0;
        }else{
            time++;
        }
        btns[time].classList.add("active");
        btns[s].classList.remove("active");
        s = time;
        banner[0].style.marginLeft = `${-100*time}%`;
    }

    anim();

    //鼠标移入暂停轮播
    swiper.on('mouseenter',()=>{
        //console.log(timer);
        clearInterval(timer);
        //console.log(timer);
    });

    //鼠标移出开启轮播
    swiper.on("mouseleave",()=>{
        anim();
    });

    //右按钮
    lr[1].onclick = function () {
        times();
    };

    //左按钮
    lr[0].onclick = function () {
        if (time===0){
            time = 3;
        }else{
            time--;
        }
        btns[time].classList.add("active");
        btns[s].classList.remove("active");
        s = time;
        banner[0].style.marginLeft = `${-100*time}%`;
    };

    //小按钮切换动画
    function change(index) {
        btns[index].classList.add("active");
        btns[time].classList.remove("active");
        s = index;
        time = index;
        banner[0].style.marginLeft = `${-100*index}%`;
    }

    //监听小按钮点击事件
    [...btns].forEach((ele,index)=>{
        ele.onclick = function(){
            change(index);
        }
    })

})();


(function () {
    // 加载
    let viewH=window.innerHeight;
    let imgs=document.querySelectorAll('.lazyload');
    console.log(imgs);
    let positionArr=[];
    imgs.forEach(function (ele) {
        let t = ele.offsetTop;
        let parent=ele.offsetParent;
        t += parent.offsetTop;

        while (parent.nodeName.toLowerCase()!=="body") {
            parent = parent.offsetParent;
            t+=parent.offsetTop;
        }
        positionArr.push(t);
    });
    console.log(positionArr);
    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        for (let i=0;i<positionArr.length;i++){
            if (scrolltop + viewH >= positionArr[i]+50){
                if (!imgs[i].src){
                    imgs[i].src=imgs[i].getAttribute('aa');
                }

            }
        }

    };

})()