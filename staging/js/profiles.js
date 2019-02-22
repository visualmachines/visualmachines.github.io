var context = {
  BakariHassan: {
    Name: "Bakari Hassan",
    Title: "Graduate Researcher",
    Education: `
      B.S. in Aerospace Engineering - UC Irvine<br>
      B.S. in Mechanical Engineering - UC Irvine<br>
      M.S. in Mechanical Engineering - UC Los Angeles
    `,
    Hometown: "San Francisco, CA, US",
    Research: `
      -Shock tube chemical kinetics<br>
      -Rocket propulsion<br>
      -Laser diagnostics
    `,
  }
};

var source = document.getElementById("profile-template").innerHTML;
var template = Handlebars.compile(source);
var html = template(context.BakariHassan);
// document.getElementById("BakariHassanProfile").appendChild(html);
$("#BakariHassanProfile").before(html);
