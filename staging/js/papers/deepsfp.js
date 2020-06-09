var context = {
    Title: "Deep Shape from Polarization",
    Authors: [
      {
        Name: "Yunhao Ba",
        Link: "https://scholar.google.com/citations?user=J35vv0cAAAAJ&hl=en",
        AssociationNumber: 1
      },
      {
        Name: "Alex Gilbert",
        Link: "",
        AssociationNumber: 1
      },
      {
        Name: "Franklin Wang",
        Link: "",
        AssociationNumber: 1
      },
      {
        Name: "Jinfa Yang",
        Link: "",
        AssociationNumber: 2
      },
      {
        Name: "Rui Chen",
        Link: "",
        AssociationNumber: 2
      },
      {
        Name: "Yiqin Wang",
        Link: "",
        AssociationNumber: 1
      },
      {
        Name: "Lei Yan",
        Link: "https://sess.pku.edu.cn/english/people/researcharea/remote/270025.htm",
        AssociationNumber: 2
      },
      {
        Name: "Boxin Shi",
        Link: "http://ci.idm.pku.edu.cn/",
        AssociationNumber: 2
      },
      {
        Name: "Achuta Kadambi",
        Link: "https://visual.ee.ucla.edu/",
        AssociationNumber: 1
      }
    ],
    Associations: [
      {
        Name: "University of California, Los Angeles",
        Link: "http://www.ucla.edu/"
      },
      {
        Name: "Peking University",
        Link: "https://www.pku.edu.cn/"
      }
    ],
    // PublishSource: {
    //   Name: "",
    //   Link: ""
    // },
    Abstract:
      "This paper makes a first attempt to re-examine the shape from polarization (SfP) problem using physics-based deep learning. The previous state-of-the-art for SfP have been purely physics-based. We see value in these principled models, and blend these physical models as priors into a neural network architecture. This proposed approach achieves results that exceed the previous state-of-the-art on a challenging dataset we introduce. This dataset consists of polarization images taken over a range of object textures, paints, and lighting conditions. We report that our proposed method achieves the lowest test error on each tested condition in our dataset, showing the value of blending data-driven and physics-driven approaches alike.",
    Bibtex: `@inproceedings{Arxiv_DeepSfP_Ba,<br>
          &nbsp;&nbsp;author = "Yunhao Ba and Alex Gilbert and Franklin Wang and Jinfa Yang and Rui Chen and Yiqin Wang and Lei Yan and Boxin Shi and Achuta Kadambi,<br>
          &nbsp;&nbsp;title = "Deep Shape from Polarization",<br>
          &nbsp;&nbsp;journal = "arXiv preprint arXiv:1607.08022",<br>
          &nbsp;&nbsp;year = "2020"<br>
        }`,
    Press: [
      {
        Name: "Southern California Machine Learning Symposium",
        Link:
          "https://sites.google.com/view/socalml2019"
      }
    ],
    Files: [
      {
        Name: "Paper and Supplement",
        Links: [
          {
            Label: "PDF",
            Link: "https://sites.google.com/view/franklin-wang-publications/home"
          }
        ]
      },
      {
        Name: "arXiv",
        Links: [
          {
            Label: "PDF",
            Link: "https://arxiv.org/pdf/1903.10210.pdf"
          }
        ]
      },
      {
        Name: "Data Set with train/test list",
        Links: [
          {
            Label: "Link",
            Link: "https://drive.google.com/file/d/1EtjfMTfpanJotH92GFz300X_ZEmGXuqr/view?usp=sharing"
          }
        ]
      },
      // {
      //   Name: "Additional Objects Under Varied Indoor Lighting",
      //   Links: [
      //     {
      //       Label: "Link",
      //       Link: "https://drive.google.com/file/d/1PjRB0J6m7A9-_4zI7wDsrHw83sZoZr3U/view?usp=sharing"
      //     }
      //   ]
      // }
    ],

    Contacts: `
      Achuta Kadambi<br>
      Assistant Professor<br>
      Electrical and Computer Engineering Department<br>
      achuta@ee.ucla.edu<br>
    `,

    Photos: [
      {
        Link: "./img/deepsfp/pol.png",
        Caption: "Figure 1: Inherent ambiguities in shape from polarization.",
      },
      {
        Link: "./img/deepsfp/setup_dataset.png",
        Caption: "Figure 3: Proposed dataset.",
      },
            {
        Link: "./img/deepsfp/F_PolarizationVsShading_small.png",
        Caption: "Figure 5: Our deep learning method learns from polarization cues, not just shading cues.",
      },
      {
        Link: "./img/deepsfp/Big_Result.jpg",
        Caption: "Figure 7: Comprehensive Results.",
      },
    ],

    Teaser: {
      imageURL: "./img/deepsfp/sfp.png",
      rawHTML: `
      <div class="caption">Using polarized images of an object, we calculate a rough estimate of surface normals using Fresnel's equations. We then use deep learning to combine the raw images and the physics-based estimates and reconstruct accurate 3D shape.</div>
      `,
    },
    FAQ: [
        {
            Question: "What is Shape from Polarization?",
            Answer: "Shape from Polarization (SfP) tries to reconstruct an object's 3D shape (surface normals and/or depth) from polarization images.",
        },
        {
            Question: "How does a polarized 2D camera obtain 3D geometry?",
            Answer: "For about two centuries, the Fresnel equations have linked surface normals with material and polarimetric properties. However, such equations alone cannot solve for full 3D geometry. We use a physics-based deep learning method to obtain state-of-the-art performance compared to previous purely physics-based methods.",
        },
        {
          Question: "How does Shape from Polarization compare to other 3D reconstruction methods?",
          Answer: "Shape from Polarization is just one of a number of techniques for reconstructing 3D shape from 2D images, such as photometric stereo, multi-view stereo, and Structure from Motion. However, SfP is unique in it's minimal requirement for known setup, strong priors, or active lighting. Our deep SfP technique can reconstruct surface normals in a single shot with a standard polarization camera, and we show that this holds for various unkown lighting conditions.",
        },
        {
          Question: "What is in the SfP dataset?",
          Answer: "The dataset consists of 338 items: 27 objects, in 4 orientations, and under 3 different lighting conditions (indoor lighting, sunlight, and overcast). Each item is stored as a matlab file with 4 polarization images (0°, 45°, 90°, and 135°), an object foreground mask, the ground truth surface normals, and the physical priors calculated from Fresnel's equation. We have also published an additional set of items which were not included in the paper. This set includes 9 objects, under different indoor lighting conditions, with 5 different lighting directions each.",
        },
        {
          Question: "What are some consumer applications of this work?",
          Answer: "Deep SfP could find use in any application requiring 3D sensing— such as virtual reality, autonomous navigation, and industrial inspection. Requiring only sigle-shot, passive capture it offers various advantages over current 3D reconstruction techniques.",
        },
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
