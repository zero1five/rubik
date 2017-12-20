window.onload = function(){
    //抽屉导航
    var oDrawers = document.getElementById('drawers');
    var oLi = oDrawers.getElementsByTagName('li');
    var mask = document.getElementById('mask');
    var oSub = document.getElementById('submenu');
    var onoff = true;
    oDrawers.onclick = function(){
        if(onoff){
            for(var i=0; i<oLi.length; i++){
                oLi[i].style.cssText = 'transform: rotate('+ i * 20 + 'deg);transition: all 0.7s;';
            }
            oSub.style.cssText = 'transform: translate3d(0,0,0);transition: all 0.7s;';
            mask.style.cssText = 'display: block';
            onoff = false;
        }
        else {
            mask.style.cssText = 'display: none;';
            oSub.style.cssText = 'transform: translate3d(-16rem,0,0);transition: all 0.8s;';
            for(var i=0; i<oLi.length; i++){
                oLi[i].style.cssText = 'transform: rotate('+ 360 - i * 20 + 'deg);transition: all 0.7s;';
            }
            onoff = true;
        }
    }
    mask.onclick = function(){
        mask.style.cssText = 'display: none;';
        oSub.style.cssText = 'transform: translate3d(-16rem,0,0);transition: all 0.8s;';
        for(var i=0; i<oLi.length; i++){
            oLi[i].style.cssText = 'transform: rotate('+ 360 - i * 20 + 'deg);transition: all 0.7s;';
        }
        onoff = true;
    }
    //图片懒加载
    var num = document.getElementsByTagName('img').length;
    var img = document.getElementsByTagName("img");
    var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
    lazyload(); //页面载入完毕加载可视区域内的图片
    window.onscroll = lazyload;
    function lazyload() { //监听页面滚动事件
        var seeHeight = document.documentElement.clientHeight; //可见区域高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
        for (var i = n; i < num; i++) {
            if (img[i].offsetTop < seeHeight + scrollTop) {
                if (img[i].getAttribute("src") == "default.jpg") {
                    img[i].src = img[i].getAttribute("data-src");
                }
                n = i + 1;
            }
        }
    }


}