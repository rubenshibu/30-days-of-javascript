var click = document.getElementById("click");
var textarea = document.getElementById("textarea");
var clicks = document.getElementById("count");
var dcCount = document.getElementById("dcCount");
var reset = document.getElementById("reset");
reset.onclick = function () {
  clicks.value = 0;
  dcCount.value = 0;
  textarea.value = "";
  click.style.background = "orange";
};

var prevClickMicrotime = microtime(true);

function microtime(get_as_float) {

  var now = new Date().getTime() / 1000;
  var s = parseInt(now, 10);

  return get_as_float ? now : Math.round((now - s) * 1000) / 1000 + " " + s;
}

var prevClickMicrotime = microtime(true);

function clickEvent() {
  clickTime = microtime(true);
  diff = clickTime - prevClickMicrotime;
  if (diff <= 0.08) {
    click.style.background = "red";
    dcCount.value++;
  }
  textarea.value = diff + "\n" + textarea.value;
  prevClickMicrotime = clickTime;
  clicks.value++;
}

function mouseClick() {
  var e = window.event;
  console.log(e);
  clickEvent();
  return false;
}
