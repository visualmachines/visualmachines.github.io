var context = {
  Title: "Macroscopic Interferometry: Rethinking Depth Estimation with Frequency-Domain Time-of-Flight",
    Authors: [
      {
        Name: "Achuta Kadambi",
        Link: "http://web.media.mit.edu/~achoo/",
        AssociationNumber: 1
      },
      {
        Name: "Jamie Schiel",
        Link: "http://web.media.mit.edu/~schiel/",
        AssociationNumber: 2
      },
      {
        Name: "Ramesh Raskar",
        Link: "http://web.media.mit.edu/~raskar/",
        AssociationNumber: 3
      }
    ],
    Associations: [
      {
        Name: "MIT Media Lab",
        Link: "http://web.mit.edu/"
      }
    ],
    PublishSource: {
      Name: "IEEE CVPR 2016, Las Vegas",
      Link: "http://cvpr2016.thecvf.com"
    },
    Abstract:
      "A form of meter-scale, macroscopic interferometry is proposed using conventional time-of-flight (ToF) sensors. Today, ToF sensors use phase-based sampling, where the phase delay between emitted and received, high-frequency signals encodes distance. This paper examines an alternative ToF architecture, inspired by micron-scale, microscopic interferometry, that relies only on frequency sampling: we refer to our proposed macroscopic technique as Frequency- Domain Time of Flight (FD-ToF). The proposed architecture offers several benefits over existing phase ToF systems, such as robustness to phase wrapping and implicit resolution of multi-path interference, all while capturing the same number of subframes. A prototype camera is constructed to demonstrate macroscopic interferometry at meter scale.",
    Bibtex: `@inproceedings{CVPR16_Kadambi,
  	<br>&nbsp;&nbsp;author = "Achuta Kadambi and Jamie Schiel and Ramesh Raskar,
  	<br>&nbsp;&nbsp;title = "Macroscopic Interferometry: Rethinking Depth Estimation with Frequency-Domain Time-of-Flight",
  	<br>&nbsp;&nbsp;booktitle = "Conference on Computer Vision and Pattern Recognition (CVPR)",
  	<br>&nbsp;&nbsp;year = "2016"<br>
	}`,
    Files: [
      {
        Name: "Paper",
        Links: [
          {
            Label: "PDF",
            Link: "http://web.media.mit.edu/~achoo/macro/Kadambi_macro.pdf"
          },
          {
            Label: "PDF Low Res",
            Link:
              "http://web.media.mit.edu/~achoo/macro/Kadambi_macro_LOW_RES.pdf"
          }
        ]
      },
      {
        Name: "Supplement and Impl. Details",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/macro/Kadambi_macro_supp.pdf"
          }
        ]
      },
      {
        Name: "CVPR Talk",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/macro/Macro_CVPR_SLIDES.pdf"
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/macro/Macro_CVPR_SLIDES.pptx",
          }
        ]
      },
      {
        Name: "CVPR Poster",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/macro/poster_cvpr16_presCVPR16.pdf"
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/macro/poster_cvpr16_presCVPR16.pptx",
          }
        ]
      },
    ],
  
    Contacts: `
      Achuta Kadambi<br>
      UCLA Electrical and Computer Engineering Department<br>
      achuta@ee.ucla.edu<br> 
    `,
  
    Photos: [
      {
        Link: "./img/MacroInter/F_schematic.JPG",
      },
      {
	Link: "./img/MacroInter/F_hw.jpeg",
        Caption: "A computational camera is constructed to validate macroscopic interferometry (see the architecture in the top figure). Courtesy of Jamie Schiel, a DIY guide is available. It is not trivial to rebuild this camera, but Jamie has put all the source code and hardware design files up online. Please email schiel@mit.edu for hardware fabrication questions.",
      },
    ],
  
    Teaser: {
      imageURL: "./img/MacroInter/macroteaser.jpg",
      imageBackgroundURL: "./img/MacroInter/macroteaser.jpg",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div class="caption">This paper repurposes the microscopic technique of Frequency-Domain OCT to a macroscopic technique, Frequency ToF. Both techniques encode optical time of flight in the frequency of the received waveform. For short optical paths (top row), the received signal in the primal-domain is lower in frequency than that of longer optical paths (bottom row).</div>
      `,
    },
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
