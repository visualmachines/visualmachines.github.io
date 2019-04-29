var context = {
  TNLOS_ICCP19: {
    imgURL: "img/TNLOS_ICCP19/setup.svg",
    pubURL: "TNLOS_ICCP19.htm",
    Title: "Thermal Non-Line of Sight Imaging | ICCP 2019",
    Description: "A novel non-line of sight imaging framework with long-wave infared."
  }
}

var source = document.getElementById("publication-template").innerHTML;
var template = Handlebars.compile(source);

for (var publication in context) {
  var html = template(context[publication]);
  $("#" + publication + "Publication").before(html);
}
