var context = {
    Title: "Computational X-ray Imaging using Document Scanners",
    Authors: [
      {
        Name: "Achuta Kadambi",
        Link: "http://web.media.mit.edu/~achoo/",
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
        Name: "Massachusetts Institute of Technology, Cambridge, MA",
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
  title={Computational X-ray Imaging using Document Scanners},
  author={Kadambi, A and Cramer, A and Lanza, R and Raskar, R and Gupta, R},
  booktitle={Digital Holography and Three-Dimensional Imaging},
  pages={JM3E--5},
  year={2018},
  organization={Optical Society of America}
}`,
    Files: [
      {
        Name: "Paper",
        Links: [
          {
            Label: "PDF",
            Link: "http://web.media.mit.edu/~achoo/demux/Kadambi_demux.pdf"
          }
        ]
      },
      {
        Name: "Talk Slides",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/demux/talk/demux_iccp.pdf"
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/demux/talk/demux_iccp.pptx",
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
      imageBackgroundURL: "./img/comp_xray/xraybig.jpg",
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
       
  
