(function () {
    function randomColor() {
        var r = Math.random()*255+80;
        var g = Math.random()*255+80;
        var b = Math.random()*255+80;
        return `rgb(${r},${g},${b})`;
    }
    var cloud = $(".cloud .biaoqian span");

    [...cloud].forEach((ele,index)=>{
        ele.style.backgroundColor = randomColor();
    })

})();