var things = [
  "an app",
  "a lifestyle",
  "a process",
  "a feeling",
  "an experience",
  "like a dream",
  "a fun thing to show your parents"
];
var randomThing = things[Math.floor(Math.random() * things.length)];
document.getElementById("wtf").innerHTML = randomThing;

var setDate = function() {
  var date = new Date();
  var el = document.getElementById("time");
  var formatted =
    "[" +
    date.toLocaleTimeString(
      window.navigator.browserLanguage || window.navigator.language || "en",
      { hour: "2-digit", minute: "2-digit" }
    ) +
    "]";
  if (el.innerHTML !== formatted) {
    el.innerHTML = formatted;
  }
};
setDate();
setInterval(setDate, 1000);
