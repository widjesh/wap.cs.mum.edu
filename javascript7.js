var timer = null;
var interval = null;

window.onload = function() {
  document.getElementById("text-area").value = BLANK;
  document.getElementById("start").onclick = start;
  document.getElementById("stop").onclick = stop;
  document.getElementById("fontsize").onchange = changeSize;
  document.getElementById('turbo').onchange = turbo;
};

function start() {
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  onChangeAnimations();
}

function stop() {
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  clearInterval(interval);
  document.getElementById("text-area").value = BLANK;
}

function turbo(){
    let speed = document.getElementById('turbo').checked;
    if(speed){
        return 50;
    }else{
        return 250;
    }
}

function onChangeAnimations() {
  let anim = document.getElementById("animation").value;
  var options = getOptions(anim).split("=====");
  loopAnimation(options);
}

function loopAnimation(param) {
  let test = document.getElementById("text-area");
  interval = setInterval(() => {
    param.forEach(function(text, i) {
      test.value = text;
      timer = setTimeout(function() {
        test.value = text;
      }, i * turbo());
    });
  }, 100 + 250 * param.length);
}

function changeSize() {
  let size = document.getElementById("fontsize").value;
  let fonts = document.getElementById("text-area");
  switch (size) {
    case "Tiny":
      fonts.className = "tiny";
      break;
    case "Medium":
      fonts.className = "medium";
      break;
    case "Large":
      fonts.className = "large";
      break;
    case "Extra Large":
      fonts.className = "extra_large";
      break;
    case "XXL":
      fonts.className = "xxl";
      break;
    default:
      fonts.className = "medium";
  }
}

function getOptions(param) {
  switch (param) {
    case "Bike":
      return BIKE;
    case "Juggler":
      return JUGGLER;
    case "Exercise":
      return EXERCISE;
    case "Dive":
      return DIVE;
    default:
      return BLANK;
  }
}
