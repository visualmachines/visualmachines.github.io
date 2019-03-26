var context = {
  Title: "Polarized 3D: Depth Sensing with Polarization Cues",
  Authors: [
    {
      Name: "Achuta Kadambi",
      Link: "http://web.media.mit.edu/~achoo/",
      AssociationNumber: 1
    },
    {
      Name: "Vage Taamazyan",
      Link: "http://web.media.mit.edu/~achoo/",
      AssociationNumber: 2
    }
  ],
  Associations: [
    {
      Name: "MIT Media Lab",
      Link: "http://web.mit.edu/"
    },
    {
      Name: "Skoltech",
      Link: "http://www.skoltech.ru/en"
    }
  ],
  PublishSource: {
    Name: "ICCV 2015, Santiago Chile",
    Link: "http://pamitc.org/iccv15/"
  },
  Abstract:
    "Coarse depth maps can be enhanced by using the shape information from polarization cues. We propose a framework to combine surface normals from polarization (hereafter polarization normals) with an aligned depth map. Polarization normals have not been used for depth enhancement before. This is because polarization normals suffer from physics-based artifacts, such as azimuthal ambiguity, refractive distortion and fronto-parallel signal degradation. We propose a framework to overcome these key challenges, allowing the benefits of polarization to be used to enhance depth maps. Our results demonstrate improvement with respect to state-of-the-art 3D reconstruction techniques.",
  Bibtex: `@inproceedings{ICCV15_Kadambi,
        author = "Achuta Kadambi and Vage Taamazyan and Boxin Shi and Ramesh Raskar,
        title = "Polarized 3D: High-Quality Depth Sensing with Polarization Cues",
        booktitle = "International Conference on Computer Vision (ICCV)",
        year = "2015"
      }`,
  Press: [
    {
      Name: "MIT News",
      Link:
        "http://news.mit.edu/2015/algorithms-boost-3-d-imaging-resolution-1000-times-1201"
    },
    {
      Name: "Times of India",
      Link:
        "http://timesofindia.indiatimes.com/tech/tech-news/MIT-tech-to-make-low-cost-3D-scanners-1000-times-better/articleshow/50015203.cms"
    }
  ],
  Files: [
    {
      Name: "Paper",
      Links: [
        {
          Label: "PDF",
          Link: "http://web.media.mit.edu/~achoo/polar3D/Kadambi_polar3D.pdf"
        },
        {
          Label: "PDF Low Res",
          Link:
            "http://web.media.mit.edu/~achoo/polar3D/Kadambi_polar3D_LOW_RESOLUTION.pdf"
        }
      ]
    },
    {
      Name: "Supplement and Impl. Details",
      Links: [
        {
          Label: "PDF",
          Link:
            "http://web.media.mit.edu/~achoo/polar3D/camready/supplement_iccv.pdf"
        }
      ]
    },
    {
      Name: "ICCV Slides",
      Links: [
        {
          Label: "PDF",
          Link:
            "http://web.media.mit.edu/~achoo/polar3D/talk/polarized3D_presiccv15_public.pdf"
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
      Link: "./img/paper/diana.png",
      Caption: `Figure 5: Complex objects, with mixed materials like this shiny face can be scanned. See Figure 9 of the paper for the polarization result.`
    },
    {
      Link: "./img/paper/datacube.png",
      Caption:
        "Figure 3: (a) The hardware prototype is low-cost---to reproduce, one needs a depth sensor, polarizer, and DSLR. (b) Following from Malus's Law, the DSLR intensity should vary sinusoidally with polarization angle."
    }
  ],

  Teaser: `
        <div class="heading">
            Stanford Researchers Devlop Tech to Reveal Objects Hidden Around Corners
        </div>
        <iframe width="466" height="291" src="https://www.youtube.com/embed/KnGQEzB9u_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `,
  FAQ: [
      {
          Question: "What is Polarized 3D?",
          Answer: "Today, photographers use polarizing filters on 2D cameras to create stunning photos. Polarized 3D probes the question: what if a polarizing filter is used on a 3D camera? The answer: commodity depth sensors operating at millimeter quality, can be enhanced to micron quality, improving resolution to 3 orders of magnitude.",
      },
      {
          Question: "How does a polarized 2D camera obtain 3D geometry?",
          Answer: "For about two centuries, the Fresnel equations have linked surface normals with material and polarimetric properties. However, such equations alone cannot solve for full 3D geometry. Our work is inspired by previous approaches in inverse rendering [Miyazaki03] and shape recovery [Atkinson06], but has a different goal: to recover full 3D shape. A sketch of our hardware is shown in Figure 3 of this website. ",   
      }

  ],
};

var source = document.getElementById("single-paper-template").innerHTML;
var template = Handlebars.compile(source);
// document.getElementById("BakariHassanProfile").appendChild(html);

// Handlebars.registerHelper('AuthorsList', function(items, options) {
//     var out = "";

//     for(var i=0, l=items.length; i<l; i++) {
//       out = out + options.fn(items[i]) ;
//     }
//     return out;
// });
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
var html = template(context);
$("#SinglePaper").before(html);
