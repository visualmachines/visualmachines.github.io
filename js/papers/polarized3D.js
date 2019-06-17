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
        Link: "http://vaheta.me/",
        AssociationNumber: 2
      },
      {
        Name: "Boxin Shi",
        Link: "http://alumni.media.mit.edu/~shiboxin/",
        AssociationNumber: 3
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
      {
        Name: "Skoltech",
        Link: "http://www.skoltech.ru/en"
      },
      {
        Name: "SUTD",
        Link: "http://www.sutd.edu.sg/",
      }
    ],
    PublishSource: {
      Name: "ICCV 2015, Santiago Chile",
      Link: "http://pamitc.org/iccv15/"
    },
    Abstract:
      "Coarse depth maps can be enhanced by using the shape information from polarization cues. We propose a framework to combine surface normals from polarization (hereafter polarization normals) with an aligned depth map. Polarization normals have not been used for depth enhancement before. This is because polarization normals suffer from physics-based artifacts, such as azimuthal ambiguity, refractive distortion and fronto-parallel signal degradation. We propose a framework to overcome these key challenges, allowing the benefits of polarization to be used to enhance depth maps. Our results demonstrate improvement with respect to state-of-the-art 3D reconstruction techniques.",
    Bibtex: `@inproceedings{ICCV15_Kadambi,<br>
          &nbsp;&nbsp;author = "Achuta Kadambi and Vage Taamazyan and Boxin Shi and Ramesh Raskar,<br>
          &nbsp;&nbsp;title = "Polarized 3D: High-Quality Depth Sensing with Polarization Cues",<br>
          &nbsp;&nbsp;booktitle = "International Conference on Computer Vision (ICCV)",<br>
          &nbsp;&nbsp;year = "2015"<br>
        }`,
    Press: [
      {
        Name: "MIT News",
        Link:
          "http://news.mit.edu/2015/algorithms-boost-3-d-imaging-resolution-1000-times-1201"
      },
      {
        Name: "Gizmodo",
        Link: "https://gizmodo.com/mit-figured-out-how-to-make-cheap-3d-scanners-1-000-tim-1745454853?trending_test_two_b&utm_expid=66866090-68.hhyw_lmCRuCTCg0I2RHHtw.2&utm_referrer=https%3A%2F%2Fwww.google.com%2F",
      },
      {
        Name: "Photonics News",
        Link: "http://www.photonics.com/Article.aspx?AID=58018",
      },
      {
        Name: "Times of India",
        Link:
        "http://timesofindia.indiatimes.com/tech/tech-news/MIT-tech-to-make-low-cost-3D-scanners-1000-times-better/articleshow/50015203.cms"
      },
      {
        Name: "Engadget",
        Link: "https://www.engadget.com/2015/12/02/polarized-3d-imaging/",
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
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/polar3D/talk/polarized3D_presiccv15_public.pptx",
          }
        ]
      },
      {
        Name: "Poster",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/polar3D/polarized3D_poster.pdf"
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/polar3D/polarized3D_poster.pptx",
          }
        ]
      },
      {
        Name: "One Slide Summary",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/polar3D/kadambi_new_england_vision2015.pdf"
          },
        ]
      },
      {
        Name: "Reproduce Fig. 9a Dataset/Executable Code",
        Links: [
          {
            Label: "Link",
            Link:
              "http://web.media.mit.edu/~achoo/polar3D/polar_code_release.zip"
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
        Link: "./img/polarized3D/groove.png",
        Caption: "Figure 2. Polarization-enhanced depth is, in some cases, a better option to industrial solutions, like this raster-based multistripe laser scanner (NextEngine 3D). As shown in the figure, features down to 300 microns can be captured with Polarized 3D.",
      },
      {
        Link: "./img/polarized3D/datacube.png",
        Caption:
          "Figure 3: (a) The hardware prototype is low-cost---to reproduce, one needs a depth sensor, polarizer, and DSLR. (b) Following from Malus's Law, the DSLR intensity should vary sinusoidally with polarization angle."
      },
      {
        Link: "./img/polarized3D/achutalarge.png",
        Caption: "Figure 4: For complex materials and lighting, shading and photometric approaches require many more images.",
      },
      {
        Link: "./img/polarized3D/diana.png",
        Caption: `Figure 5: Complex objects, with mixed materials like this shiny face can be scanned. See Figure 9 of the paper for the polarization result.`
      },
    ],
  
    Teaser: {
      imageURL: "./img/polarized3D/teasercrop.png",
      imageBackgroundURL: "./img/polarized3D/teasercrop-background.png",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div class="caption">Figure 1: Starting from a coarse depth map, is it possible to achieve laser scan quality? By combining the information from the Kinect depth frame in (a) with information in 3 polarized photographs (b) , we reconstruct the 3D surface shown in (c). The subtle change between polarization images provides additional information about surface orientation. See Figure 2 of this website for a laser scan comparison.</div>
      `,
    },
    FAQ: [
        {
            Question: "What is Polarized 3D?",
            Answer: "Today, photographers use polarizing filters on 2D cameras to create stunning photos. Polarized 3D probes the question: what if a polarizing filter is used on a 3D camera? The answer: commodity depth sensors operating at millimeter quality, can be enhanced to micron quality, improving resolution to 3 orders of magnitude.",
        },
        {
            Question: "How does a polarized 2D camera obtain 3D geometry?",
            Answer: "For about two centuries, the Fresnel equations have linked surface normals with material and polarimetric properties. However, such equations alone cannot solve for full 3D geometry. Our work is inspired by previous approaches in inverse rendering [Miyazaki03] and shape recovery [Atkinson06], but has a different goal: to recover full 3D shape. A sketch of our hardware is shown in Figure 3 of this website. ",   
        },
        {
          Question: "How does our technique compare with existing 3D scanning systems?",
          Answer: "Polarized 3D achieves increased depth precision wrt. other modalities of similar optical complexity (e.g. Kinect/Realsense/Mesa/PMD/etc). It compares favorably with even multithousand dollar, industrial-grade laser scanners (Figure 2 of this website). ",   
        },
        {
          Question: "How does polarization compare to shape-from-shading or photometric-stereo?",
          Answer: "Shape-from-shading and photometric-stereo employ restrictive assumptions, like Lambertian surfaces or distant or controlled lighting. As shown in Figure 4 of the webpage, for complex scenes (like Figure 5 of the webpage), the polarization information may generalize better. ",
        },
        {
          Question: "Does Polarized 3D operate in real-time?",
          Answer: "Although the acquisition can be made real-time (with a polarization mosaic), the computation is not yet real-time, requiring minutes to render 1 depth frame. We are exploring faster algorithms and GPU implementations to eventually arrive at 30 Hz framerates.",
        },
        {
          Question: "When will the software be available?",
          Answer: "We provide any form of software and hardware support as a courtesy to the research community, as the method is patent pending. However, on this project page, you can find a dataset as well as executable MATLAB code. The supplementary PDF has some instructions and MATLAB source snippets for your own implementations. We can provide additional datasets on request, but these have large filesizes. In rare cases, we may be able to scan an object that you are willing to mail us.",
        },
        {
          Question: "What are some consumer applications of this work?",
          Answer: "This is a new tool for 3D sensing and finds use in virtual reality, autonomous navigation, and industrial inspection. In particular, the proposed technique is suited in areas that require precise 3D depth (e.g. 3D scanning).",
        }
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
       
  
