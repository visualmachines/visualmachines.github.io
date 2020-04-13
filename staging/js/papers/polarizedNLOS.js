var context = {
    Title: "Polarized Non-Line-of-Sight Imaging",
    Authors: [
      {
        Name: "Kenichiro Tanaka",
        Link: "https://k-tanaka.me/",
        AssociationNumber: [1,2],
      },
      {
        Name: "Yasuhiro Mukaigawa",
        Link: "http://omilab.naist.jp/~mukaigawa/",
        AssociationNumber: 1
      },
      {
        Name: "Achuta Kadambi",
        Link: "http://web.media.mit.edu/~achoo/",
        AssociationNumber: 2
      },
    ],
    Associations: [
      {
        Name: "Nara Institute of Science and Technology (NAIST)",
        Link: "http://www.naist.jp/en/"
      },
      {
        Name: "Visual Machines Group, UCLA",
        Link: "https://visual.ee.ucla.edu/"
      },
    ],
    PublishSource: {
      Name: "CVPR 2020",
      Link: "http://cvpr2020.thecvf.com/"
    },
    Abstract:
      "This paper presents a method of passive non-line-of-sight (NLOS) imaging using polarization cues. A key observation is that the oblique light has a different polarimetric signal. It turns out this effect is due to the polarization axis rotation, a phenomena which can be used to better condition the light transport matrix for non-line-of-sight imaging. Our analysis and results show that the use of a polarization for NLOS is both a standalone technique, as well as an enhancement technique to boost the results of other forms of passive NLOS imaging. We make a surprising finding that, despite 50% light attenuation from polarization optics, the gains from polarized NLOS are overall superior to unpolarized NLOS.",
    Bibtex: `@inproceedings{CVPR2020_Tanaka,<br>
          &nbsp;&nbsp;author = "Kenichiro Tanaka and Yasuhiro Mukaigawa and Achuta Kadambi,<br>
          &nbsp;&nbsp;title = "Polarized Non-Line-of-Sight Imaging",<br>
          &nbsp;&nbsp;booktitle = "Conference on Computer Vision and Pattern Recognition (CVPR)",<br>
          &nbsp;&nbsp;year = "2020"<br>
        }`,
    Files: [
      {
        Name: "Paper",
        Links: [
          {
            Label: "arXiv preprint PDF",
            Link: "https://arxiv.org/abs/1911.12906"
          },
        ]
      }
    ],
  
    Contacts: `
      Achuta Kadambi<br>
      Assistant Professor<br>
      Electrical and Computer Engineering Department<br>
      achuta@ee.ucla.edu<br> 
    `,
  
    Photos: [
      {
        Link: "./img/polarizedNLOS/polarizer_oblique.png",
        Caption: "Figure 2: Polarizer from oblique view. While the LCD monitor is invisible from top view (a), it is slightly visible from certain oblique views depending on the zenith and azimuth angles (b). (c) The original angle of polarizer from top view. (d) The effective angle from oblique view. The polarizer axis is slightly declined. (e) Light leakage pattern of crossed polarizers from oblique view. These polarizers’ original angles are 45◦ and −45◦, respectively.",
      },
      {
        Link: "./img/polarizedNLOS/rotating_polarizer.png",
        Caption:
          "Figure 3: Comparison to rotating the polarizer. The upper row is the captured images of the same exposure time, and the lower images are normalized at each maximum value. The dark band, where the light is completely blocked by polarizer, is a key observation and only appears around 90 degrees."
      },
      {
        Link: "./img/polarizedNLOS/camera_position.png",
        Caption: "Figure 4: Camera position and reflection plane. (a) Using a single camera position, only one direction is encoded in the image. The intensity variance of horizontal direction is not so improved. (b) Using multiple camera positions, the scene can be encoded by multiple directions.",
      },
      {
        Link: "./img/polarizedNLOS/without_occluder.png",
        Caption: `Figure 5: Polarized NLOS results without occluder. A
        projector is used for numerical evaluation and to make the
        scene unpolarized. The scene is recovered with and without
        the polarizer in front of the camera. Using polarization, the
        recovered images are improved. Improvement is confirmed
        by comparing condition number and three image measures.`
      },
      {
        Link: "./img/polarizedNLOS/polarized_nlos_quality.png",
        Caption: `Figure 6: Polarized NLOS exceeds the quality of conventional NLOS with image processing. The results of polarized NLOS with partial occluders. The result of the baseline
        method [39], TV denoised [7], image enhancement by neural network [1], and the result of our method are compared.`
      }
    ],
  
    Teaser: {
      imageURL: "./img/polarizedNLOS/results.png",
      imageBackgroundURL: "",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div class="caption">Figure 1: Results for reflective objects. Top-left: the setting of the experiment. The scene is a reflective object (not self-
        luminous). 1st row: The photograph of target objects. 2nd row: The recovered images by the baseline method [39]. Bottom
        
        row: The recovered images by our method. High frequency details are recovered. Clear detail of resolution charts, sharp edge
        of apple, and the detailed shape of bears are clearly visualized. PSNR values are calculated with homography-transformed
        photograph for reference.</div>
      `,
    },
    FAQ: [
        {
            Question: "What is the effective angle of the polarizer?",
            Answer: "It is an angle-dependent effect of the polarizer. Light leakage occurs when the light ray is oblique to the polarizer. Figure 2 below in media and in the paper shows pictures of the same scene from top and oblique views. While the LCD monitor is invisible from top view (a), it is slightly visible from certain oblique views depending on the zenith and azimuth angles (b). (c) The original angle of polarizer from top view. (d) The effective angle from oblique view. The polarizer axis is slightly declined. (e) Light leakage pattern of crossed polarizers from oblique view. This effect is angle dependent, therefore it can be used for analyzing NLOS observations.",
        },
        {
            Question: "Is the reflected light polarized?",
            Answer: "Yes, all reflections are partially polarized. Especially, when the camera is at the special angle (so called Brewster angle), the reflected light is perfectly linear polarized.",   
        },
        {
          Question: "Is the the scene polarized?",
          Answer: "No, the scene is not polarized. Although the scene is unpolarized, the reflected light off the wall is pertially polarized.",   
        },
        {
          Question: "Is this superior than using specular wall?",
          Answer: "Our method always improves the performance for all reflection parameters of the wall. You can compbine our polarization technique to other techniques including putting a partial occluder and using specular wall material.",
        },
        {
          Question: "Isn't the observation dark?",
          Answer: "Despite the low light efficiency due to light cut off at the polarizer, the polarization cues can improve the conditioning. This is a suprising finding.",
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
       