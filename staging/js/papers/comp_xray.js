var context = {
    Title: "Computational X-ray Imaging using Document Scanners",
    Authors: [
      {
        Name: "Achuta Kadambi",
        Link: "https://visual.ee.ucla.edu/",
        AssociationNumber: 1
      },
      {
        Name: "Avilash Cramer",
        Link: "https://avilashcramer.wordpress.com/about/",
        AssociationNumber: "1, 3"
      },
      {
        Name: "Richard Lanza",
        Link: "https://web.mit.edu/nse/people/research/lanza.html",
        AssociationNumber: 1
      },
      {
        Name: "Ramesh Raskar",
        Link: "http://web.media.mit.edu/~raskar/",
        AssociationNumber: 1
      },
	  {
        Name: "Rajiv Gupta",
        Link: "https://www.massgeneral.org/doctors/doctor.aspx?id=17730",
        AssociationNumber: "2, 3"
      }
    ],
    Associations: [
      {
        Name: "MIT, Cambridge, MA",
        Link: "http://web.mit.edu/"
      },
      {
        Name: "Massachusetts General Hospital, Boston, MA",
        Link: "https://www.massgeneral.org/"
      },
	  {
        Name: "Harvard Medical School, Boston, MA",
        Link: "https://hms.harvard.edu/"
      }
    ],
    PublishSource: {
      Name: "Imaging and Applied Optics 2018",
      Link: "https://www.osapublishing.org/abstract.cfm?uri=DH-2018-JM3E.5"
    },
	

    Abstract:
      "We propose a computational imaging approach enabling document scanners to be used as frugal, high-resolution X-ray imagers. We modify the document scanner optics for X-ray sensitivity and design a post-processing algorithm to denoise images.",
    Bibtex: `@inproceedings{kadambi2018computational,
          <br>&nbsp;&nbsp;author = "Kadambi, A and Cramer, A and Lanza, R and Raskar, R and Gupta, R",
          <br>&nbsp;&nbsp;title = "Computational X-ray Imaging using Document Scanners",
          <br>&nbsp;&nbsp;booktitle = "Digital Holography and Three-Dimensional Imaging",
		  <br>&nbsp;&nbsp;pages = "JM3E--5",
          <br>&nbsp;&nbsp;year = "2018"
		  <br>&nbsp;&nbsp;organization = "Optical Society of America"<br>
        }`,
    Files: [
      {
        Name: "Paper",
        Links: [
          {
            Label: "PDF",
            Link: "./img/comp_xray/comp_xray.pdf"
          }
        ]
      },
      {
        Name: "Talk Slides",
        Links: [
          {
            Label: "PPT",
            Link: "https://drive.google.com/open?id=15FGMPDtbUBD7a7q32pGC235CmU-R_4l2",
          }
        ]
      }
    ],
  
    Contacts: `
      Achuta Kadambi<br>
      MIT Media Lab<br>
      achoo@mit.edu<br> 
    `,
  
    Photos: [
      {
        Link: "./img/comp_xray/F_hand.jpg",

        Caption: "Figure 2. X-ray image of a cadaver hand using a Canon®LIDE 220 document scanner. The proposedapproach is (d). Inset image: proximal inter-phalangeal joint.",
      }
    ],
  
    Teaser: {
      imageURL: "./img/comp_xray/xraybig.jpg",
      imageBackgroundURL: "./img/comp_xray/F_hand_2.jpg",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div class="caption">Figure 1: Optical schematic shown on the left, with (a-f) being X-ray source, imaged object, scintillator, lead-doped glass, GRIN lens, and CMOS. (middle) photo of setup; (right) MTF curves.</div>
      `,
    }
  };

function getTemplateAjax(path, callback) {
    var source;
    var template;
    $.ajax({
        url: path,
        success: function(data) {
            source    = data;
            template  = Handlebars.compile(source);

            //execute the callback if passed
            if (callback) callback(template);
        }
    });
}
Handlebars.registerHelper("AssociationsList", function(items, options) {
    var out = "";
  
    for (var i = 0, l = items.length; i < l; i++) {
      items[i].Number = i + 1;
      console.log(items[i].Number);
      out = out + options.fn(items[i]);
    }
    return out;
  });
  Handlebars.registerHelper("FileLinksList", function(items, options) {
    return options.fn(items);
  });
  Handlebars.registerHelper("RenderTeaser", function(Teaser) {
    return Teaser;
});

//run our template loader with callback
getTemplateAjax("js/templates/paper_template.html", function(template) {
    //do something with compiled template
    $("#SinglePaper").html(template(context));
});
       
  
