var borderSize;
var borderRed;
var borderGreen;
var borderBlue;
var backRed;
var backGreen;
var backBlue;


function changeParagraph(){
  var paragraph = document.getElementById('changeMe');
  borderSize = document.getElementById('bSize').value;
  borderRed = document.getElementById('brColor').value;
  borderGreen = document.getElementById('bgColor').value;
  borderBlue = document.getElementById('bbColor').value;
  backRed = document.getElementById('trColor').value;
  backGreen = document.getElementById('tgColor').value;
  backBlue = document.getElementById('tbColor').value;
  paragraph.style.borderWidth =  borderSize+"px";
  paragraph.style.borderColor = "rgb("+borderRed+","+borderGreen+","+borderBlue+")";
  paragraph.style.backgroundColor = "rgb("+backRed+","+backGreen+","+backBlue+")";
}
