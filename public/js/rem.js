!(function(){
  let timeoutId;
      window.addEventListener('pageshow', function () {
        refreshRem()
      })
      window.addEventListener('resize', function () {

        if(timeoutId){
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(function () {
          refreshRem()
        }, 300)
      })

      function refreshRem() {
        // 获取屏幕的宽度
        let clientWidth = document.documentElement.clientWidth;
        // 将屏幕宽度10等分
        let fontValue = clientWidth / 10;
        // 获取屏幕的设备像素比dpr的值
        let dpr = window.devicePixelRatio;
        // 确定dpr的值
        if(dpr >= 3){
          dpr = 3;
        }else if(dpr < 3 && dpr >=2){
          dpr = 2;
        }else {
          dpr = 1;
        }
        // 设定单位rem值的大小
        let rem = fontValue;

        // px转换rem的基础, 
        let remUnit = fontValue * dpr;
        // 设定body标签字体大小
        document.body.style.fontSize = '12px';
        // 设定html上fontsize的大小
        document.documentElement.style.fontSize = rem + 'px';
      }
})();

document.addEventListener('touchstart',function(event){
  event.preventDefault();
})

var aNodes = document.querySelectorAll('a');
for(var i = 0; i < aNodes.length; i++){
  aNodes[i].addEventListener('touchstart',function(){
    window.location.href = this.href;
  });
}