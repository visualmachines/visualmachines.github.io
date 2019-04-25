var context = {
    Title: "Thermal Non-Line-of-Sight Imaging",
    Authors: [
      {
        Name: "Tomohiro Maeda*",
        Link: "",
        AssociationNumber: 1
      },
      {
        Name: "Yiqin Wang*",
        Link: "https://www.linkedin.com/in/yiqin-wang-91765a139/",
        AssociationNumber: 2
      },
      {
        Name: "Ramesh Raskar",
        Link: "http://web.media.mit.edu/~raskar/",
        AssociationNumber: 1
      },
      {
        Name: "Achuta Kadambi",
        Link: "https://scholar.google.com/citations?user=UMzWJikAAAAJ&hl=en&oi=ao",
        AssociationNumber: 2
      }
    ],
    Associations: [
      {
        Name: "MIT Media Lab",
        Link: "http://web.mit.edu/"
      },
      {
        Name: "Visual Machines Group, UCLA",
        Link: "https://visual.ee.ucla.edu/staging"
      }
    ],
    PublishSource: {
      Name: "ICCP 2019",
      Link: "http://iccp2019.naist.jp/"
    },
    Abstract:
      "We propose a novel non-line-of-sight (NLOS) imaging framework with long-wave infrared (IR). At long-wave IR wavelengths, certain physical parameters are more favorable for high-fidelity reconstruction. In contrast to prior work in visible light NLOS, at long-wave IR wavelengths, the hidden heat source acts as a light source. This simplifies the problem to a single bounce problem. In addition, surface reflectance has a much stronger specular reflection in the long-wave IR spectrum than in the visible light spectrum. We reformulate a light transport model that leverages these favorable physical properties of long-wave IR. Specifically, we demonstrate 2D shape recovery and 3D localization of a hidden object. Furthermore, we demonstrate near real-time and robust NLOS pose estimation of a human figure, the first such demonstration, to our knowledge.",
    Bibtex: `TBA`,
    Press: [

    ],
    Files: [
      {
        Name: "Paper",
        Links: [

        ]
      },
      {
        Name: "Supplement and Impl. Details",
        Links: [

        ]
      },
      {
        Name: "ICCP Slides",
        Links: [
        ]
      },
      {
        Name: "Poster",
        Links: [

        ]
      },
      {
        Name: "One Slide Summary",
        Links: [

        ]
      },
      {
        Name: "Reproduce Fig. 9a Dataset/Executable Code",
        Links: [

        ]
      }
    ],
  
    Contacts: `
      Tomohiro Maeda<br>
      MIT Media Lab<br>
      tomotomo@mit.edu<br> 
    `,
  
    Photos: [
      {
        Link: "./img/TNLOS_ICCP19/pic1.PNG",
        Caption: "We show that processing raw frames of thermal images can improve the pose estimation algorithm. (a) shows NLOS imaging setup. (b) is an example of raw output from the camera. (c), (d), (e) Appropriate processing of raw thermal video frames results in better posture estimation. (f) (g) TV regularization could correct pose estimation on median filtering, while in (h), it could introduce artifacts that result in pose estimation error. (g) and (h) include human detection through score thresholding. Raw frames did not get high enough score for body detection.",
      }
    ],
  
    Teaser: {
      imageURL: "",
      imageBackgroundURL: "",
      imageHeight: 128, //in pixels
      rawHTML: `
      `,
    },
    FAQ: [
       
    ],
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
       
  
