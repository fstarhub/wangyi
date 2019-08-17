!(function(){
  var width = document.documentElement.clientWidth;
  var styleNode = document.createElement('style');
  styleNode.innerHTML = 'html{font-size: '+ width/16 +'px !important;}';
  document.head.appendChild(styleNode);
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