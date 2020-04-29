var context = {
    Title: "Blending Physics with Artificial Intelligence",
    Authors: [
      {
        Name: "Achuta Kadambi",
        Link: "http://seas.ucla.edu/~achuta/",
        AssociationNumber: 1
      }
    ],
    Associations: [
      {
        Name: "University of California, Los Angeles",
        Link: "http://www.ucla.edu/"
      }
    ],
    Abstract:
      "For centuries, humans have discovered the physical laws that underpin our world. What if the next Einstein or Newton is not a human, but a machine? Machines that are physics-aware can transform a multitude of fields, poised to enable unexpected and meaningful feats in science and engineering. In this paper, we survey methods germane to the imaging sciences where we observe a very special convergence of a millennia of optical theories with decades of digital photos.",
    Bibtex: `@inproceedings{kadambi2020blending,<br>
          &nbsp;&nbsp;title={Blending physics with artificial intelligence},<br>
          &nbsp;&nbsp;author={Kadambi, Achuta},<br>
          &nbsp;&nbsp;booktitle={Computational Imaging V},<br>
          &nbsp;&nbsp;volume={11396},<br>
          &nbsp;&nbsp;pages={113960B},<br>
          &nbsp;&nbsp;year={2020},<br>
          &nbsp;&nbsp;organization={International Society for Optics and Photonics}<br>
        }`,
    Files: [
      {
        Name: "Paper",
        Links: [
          {
            Label: "PDF",
            Link: "spie_survey.pdf"
          }
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
      // {
      //   Link: "./img/visualphysics/fig_sim_results_v3.png",
      //   Caption: "Figure 2. Discovered physical equations from Visual Physics framework, on simulated videos. We show the observed embedding trends and the obtained equations, which are both accurate in fitting to the observations as well as in human interpretable form. Results are shown on three simulated datasets: ball toss, acceleration and circular motion.",
      // },
      // {
      //   Link: "./img/visualphysics/fig_sim_results_supplimentary.png",
      //   Caption: "Figure 3. Performance of Visual Physics framework on additional synthetic scenes. It is further emphasized that independent governing parameters can be discovered accurately from complex physical phenomena, and the corresponding equations are consistent with true physical expressions."
      // },
      // {
      //   Link: "./img/visualphysics/F_realfinal.png",
      //   Caption: "Figure 4. Evaluating performance on real ball toss data, in two conditions. (a) Testing on a set of real data, and training on real data. The videos of several basketball tosses are used as input to the pipeline. The accurate representations and the derived human interpretable equations, governing the real world phenomenon, are shown to emphasize the robustness of the pipeline. In (b), similar approach but the training set is synthetic data. Similar performance is observed, which underscores that the proposed results are not obtained from overfitting.",
      // },
      // {
      //   Link: "./img/visualphysics/fig_real_supplimentary_v2.png",
      //   Caption: "Figure 5. Performance of Visual Physics framework on real circular motion. The governing parameter is appropriately obtained and an interpretable governing equation reconciling with known equations is discovered. The interpretations from the discovered equations are validated to confirm their parametric correspondence with angular velocity in the ground-truth circular motion equations.",
      // },
      // {
      //   Link: "./img/visualphysics/fig_noise.png",
      //   Caption: "Figure 6. The proposed Visual Physics framework is found to be robust when considerable zero-mean additive Gaussian noise is added to the trajectory. The pipeline is tested on synthetically added noise with standard deviation ranging from 4 to 128 pixels (at a scale of 300pixels/meter). The representations are found to be robust for up to noise of standard deviation up to 32 pixels, with equations demonstrating analogous robustness. The method fails at a noise of standard deviation 128 pixels, which can be seen to completely bury the trajectory signal in noise.",
      // },
      // {
      //   Link: "./img/visualphysics/ParetoPlotWithGrid.png",
      //   Caption: "Figure 7. Trade-off between equation complexity and accuracy. We show multiple candidate equations for the synthetic free fall task. The equation with the correct parametric form occurs at the optimal trade-off point.",
      // },
      // {
      //   Link: "./img/visualphysics/PerformancePlotFat.png",
      //   Caption: "Figure 8. Visual Physics framework improves consistently with different numbers of training samples. We test the performance on the free-fall task under dataset sizes of 200, 300, 400, and 500respectively. (a) shows the correlation coefficients between the ground-truth physical parameters and the discovered physical parameters, and (b) shows the mean squared error of the estimated locations in centimeters.",
      // },
    ],
  
    Teaser: {
      imageURL: "./img/physics_ai/physics_ai.png",
      //imageBackgroundURL: "./img/physics_ai/physics_ai_teaser.png",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div class="caption">Figure 1. Blending physics and learning often depends on the quality of physics and data. The “goodness” of physics and data can be defined more precisely in context of training data or model mismatch.</div>
      `,
    },
    // FAQ: [
    //     {
    //         Question: "What is the philosophy behind Visual Physics?",
    //         Answer: "Through history, major physical discoveries have followed a principled sequence: visual observations, inference and conclusions. The apocryphal story of Newton and the falling apple, in relation to the discovery of gravity, perfectly epitomizes this notion. Through our work on 'Visual Physics', we look to make a first attempt at bringing this framework and notion of discovery to the domain of machines.",
    //     },
    //     {
    //         Question: "What are the technical contributions as part of Visual Physics?",
    //         Answer: "We propose an AI-driven pipeline capable of identifying governing physical parameters and equations, from videos of motion-dependent physics phenomena. We show promising results for both synthetic and real videos, where human interpretable equations are obtained as the end output.",   
    //     },
    //     {
    //       Question: "What is the significance of this work as part of the larger domain of AI for discovery and physics?",
    //       Answer: "We see this work as a precursor to sustained research towards discovery of increasingly complex, and eventually unknown, physical phenomena from videos. If successful, the use cases for such capabilities are wide ranging: from better understanding astronomical interactions to delving deeper into the behavior of cancers and physiological phenomena.",   
    //     },
    //     {
    //       Question: "How does Visual Physics compare with existing art?",
    //       Answer: "Most existing works address one part of the visual physics pipeline: [Iten18] addresses the discovery of governing physical parameters from measured physical data, while a large amount of prior work on genetic programming and symbolic regression addresses the notion of discovering governing equations from appropriate data. On the other hand, [Huang18] addresses the visual physics pipeline; however, the physics phenomena that may be addressed by them is limited since their proposed method is unable to discover governing parameters. To the best of our knowledge, our proposed method is the first to address the entire discovery pipeline without any prior information about the physics phenomenon under consideration.",
    //     }
    // ],
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
       
  
