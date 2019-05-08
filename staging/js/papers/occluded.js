var context = {
    Title: "Occluded Imaging with Time of Flight Sensors",
    Authors: [
      {
        Name: "Achuta Kadambi",
        Link: "http://web.media.mit.edu/~achoo/",
        AssociationNumber: 1
      },
      {
        Name: "Hang Zhao",
        Link: "http://www.mit.edu/~hangzhao/",
        AssociationNumber: 1
      },
      {
        Name: "Boxin Shi",
        Link: "http://alumni.media.mit.edu/~shiboxin/",
        AssociationNumber: 1//, 2
      },
      {
        Name: "Ramesh Raskar",
        Link: "http://web.media.mit.edu/~raskar/",
        AssociationNumber: 1
      }
    ],
    Associations: [
      {
        Name: "MIT Media Lab",
        Link: "http://web.mit.edu/"
      },
      /*{
        Name: "SUTD",
        Link: "http://www.sutd.edu.sg/",
      }*/
    ],
    PublishSource: {
      Name: "ACM Transactions on Graphics, Vol 35 Issue 2",
      Link: "https://dl.acm.org/citation.cfm?id=2882845"
    },
    Abstract:
      "We explore the question of whether phase based Time of Flight (ToF) range cameras can be used for looking around corners and through scattering diffusers. By connecting time of flight measurements with theory from array signal processing we conclude that performance depends on two primary factors: camera modulation frequency and the width of the specular lobe (“shininess”) of the wall. For purely Lambertian walls, commodity time of flight sensors achieve resolution on the order of meters between targets. For seemingly diffuse walls, such as posterboard, the resolution is drastically reduced, to the order of ten centimeters. In particular, we find that the re- lationship between reflectance and resolution is nonlinear—a slight amount of shininess can lead to a dramatic improvement in resolution. Since many realistic scenes exhibit a slight amount of shininess we believe that off-the- shelf ToF cameras can look around corners.",
    Bibtex: `@article{Kadambioccluded2016,
             <br>&nbsp;&nbsp;author = {Kadambi, Achuta and Zhao, Hang and Shi, Boxin and Raskar, Ramesh},
             <br>&nbsp;&nbsp;title = {Occluded Imaging with Time-of-Flight Sensors},
             <br>&nbsp;&nbsp;journal = {ACM Trans. Graph.},
             <br>&nbsp;&nbsp;issue_date = {May 2016},
             <br>&nbsp;&nbsp;volume = {35},
             <br>&nbsp;&nbsp;number = {2},
             <br>&nbsp;&nbsp;publisher = {ACM},
             <br>&nbsp;&nbsp;address = {New York, NY, USA},
             <br>&nbsp;&nbsp;keywords = {Time of flight, computational photography, scattering},<br>
    }`,
    
    Files: [
      {
        Name: "Paper",
        Links: [
          {
            Label: "PDF",
            Link: "http://web.media.mit.edu/~achoo/occluded/Kadambi_occluded.pdf"
          },
          {
            Label: "PDF Low Res",
            Link:
              "http://web.media.mit.edu/~achoo/occluded/Kadambi_occluded_LOW_RES.pdf"
          }
        ]
      },
      {
        Name: "Supplement",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/occluded/Kadambi_occluded_supp.pdf"
          }
        ]
      },
      {
        Name: "SIGGRAPH Slides",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/occluded/%3C/a%3Ehttp://web.media.mit.edu/~achoo/occluded/SIGGRAPH_SLIDES.pdf"
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/occluded/SIGGRAPH_SLIDES.pptx",
          }
        ]
      },
      {
        Name: "Poster",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/occluded/poster_acmToG_presICCP16.pdf"
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/occluded/poster_acmToG_presICCP16.pptx",
          }
        ]
      },
      {
        Name: "Video Demo",
        Links: [
          {
            Label: "MP4",
            Link:
              "http://web.media.mit.edu/~achoo/occluded/supplemental_video.mp4"
          },
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
        Link: "./img/occluded/occluded_img.png",
        Caption: "Figure 1: Localizing a moving target in real-time. (a) The ping pong ball is outside the line of sight of the camera and moves horizontally. The camera measures backscattered reflections from the wall. (b) A conventional video of the object in motion. Here, three frames of the video are shown at times 0, 1 and 2 seconds where the ball position is 30, 40, and 50 cm. (c) Our technique is able to find the location of the target in real time. Please see supplementary video.",
      },
      {
        Link: "./img/occluded/giphy.gif",
        Caption:
          "Figure 2: (a) The hardware prototype is low-cost---to reproduce, one needs a depth sensor, polarizer, and DSLR. (b) Following from Malus's Law, the DSLR intensity should vary sinusoidally with polarization angle."
      },
    ],
  
    Teaser: {
      //imageURL: "./img/occluded/giphy.gif",
      imageBackgroundURL: "./img/occluded/giphy.gif",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div>
        <iframe width="580" height="350" src="https://www.youtube.com/embed/Q9--7o7SdLA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="caption">Localizing a moving target in real-time. The ping pong ball is outside the line of sight of the camera and moves horizontally. The camera measures backscattered reflections from the wall.
      </div>

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
       
  
