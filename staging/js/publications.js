var context = {
  TNLOS_ICCP19: {
    imgURL: "img/TNLOS_ICCP19/setup.svg",
    pubURL: "TNLOS_ICCP19.htm",
    Title: "Thermal Non-Line of Sight Imaging | ICCP 2019",
    Description: "A novel non-line of sight imaging framework with long-wave infared."
  },
  polarized3D: {
    imgURL:"img/polarized3D/teasercrop.png", 
    pubURL: "polarized3D.htm",
    Title: "Polarized 3D: Depth Sensing with Polarization Cues",
    Description: "Coarse depth maps can be enhanced by using the shape information from polarization cues. We propose a framework to combine surface normals from polarization (hereafter polarization normals) with an aligned depth map."
  },
  MacroInter: {
    imgURL: "img/MacroInter/macroteaser.jpg",
    pubURL: "MacroInter.htm",
    Title: "Macroscopic Interferometry: Rethinking Depth Estimation with Frequency-Domain Time-of-Flight",
    Description: "This paper examines an alternative ToF architecture, inspired by micron-scale, microscopic interferometry, that relies only on frequency sampling: we refer to our proposed macroscopic technique as Frequency- Domain Time of Flight (FD-ToF)."
  },
}

var source = document.getElementById("publication-template").innerHTML;
var template = Handlebars.compile(source);

for (var publication in context) {
  var html = template(context[publication]);
  $("#" + publication + "Publication").before(html);
}
