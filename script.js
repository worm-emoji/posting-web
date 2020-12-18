var setDate = function () {
  var date = new Date();
  var el = document.getElementById("time");
  var formatted =
    "[" +
    date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    }) +
    "]";

  if (el.innerHTML !== formatted) {
    el.innerHTML = formatted;
  }
};
setDate();
setInterval(setDate, 1000);
window.counter = "https://posting.goatcounter.com/count";
var script = document.createElement("script");
script.async = 1;
script.src = "//gc.zgo.at/count.js";
var ins = document.getElementsByTagName("script")[0];
ins.parentNode.insertBefore(script, ins);
