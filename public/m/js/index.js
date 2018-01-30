window.addEventListener('load',function(){
    //创建主页对象  
  var letaoIndex = new letaoIndex();

})

// 构造函数
var letaoIndex = function(){

}

letaoIndex.prototype = {
  // 定义主页轮播图初始化方法
  sliderInit: function() {
    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
    });
},

}




//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});