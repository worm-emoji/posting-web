var things = [
  "an app",
  "a process",
  "a feeling",
  "an experience",
  "like a dream",
  "a fun thing to show your parents",
  "a way of life",
  "hot",
  "a natural source of beauty",
  "your worst nightmare",
  "my dream house",
  "a cult",
  "a way to know yourself better"
];
var randomThing = things[Math.floor(Math.random() * things.length)];
document.getElementById("wtf").innerHTML = randomThing;
document.title = "posting is " + randomThing + ".";

var setDate = function() {
  var date = new Date();
  var el = document.getElementById("time");
  var formatted =
    "[" +
    date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) +
    "]";
  if (el.innerHTML !== formatted) {
    el.innerHTML = formatted;
  }
};
setDate();
setInterval(setDate, 1000);

window.counter = 'https://posting.goatcounter.com/count'
var script = document.createElement('script');
script.async = 1;
script.src = '//gc.zgo.at/count.js';
var ins = document.getElementsByTagName('script')[0];
ins.parentNode.insertBefore(script, ins);
