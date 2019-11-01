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
  "a cult"
];
var randomThing = things[Math.floor(Math.random() * things.length)];
document.getElementById("wtf").innerHTML = randomThing;

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
