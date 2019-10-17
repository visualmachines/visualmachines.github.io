var context = {
    Title: "Blending Diverse Physical Priors with Neural Networks",
    Authors: [
      {
        Name: "Anonymous authors",
      },
    ],
    Associations: [
      {
        Name: "Paper under double-blind review",
      },
    ],
    Abstract:
      "Rethinking physics in the era of deep learning is an increasingly important topic. This topic is special because, in addition to data, one can leverage a vast library of physical prior models (e.g. kinematics, fluid flow, etc) to perform more robust inference. The nascent sub-field of physics-based learning (PBL) studies this problem of blending neural networks with physical priors. While previous PBL algorithms have been applied successfully to specific tasks, it is hard to generalize existing PBL methods to a wide range of physics-based problems. Such generalization would require an architecture that can adapt to variations in the correctness of the physics, or in the quality of training data. No such architecture exists. In this paper, we aim to generalize PBL, by making a first attempt to bring neural architecture search (NAS) to the realm of PBL. We introduce a new method known as physics-based neural architecture search (PhysicsNAS) that is a top-performer across a diverse range of quality in the physical model and the dataset.",
    Files: [
      {
        Name: "Paper",
        Links: [
          {
            Label: "PDF",
            Link: "https://arxiv.org/pdf/1910.00201.pdf"
          },
        ]
      },
      {
        Name: "Code",
        Links: [
          {
            Label: "GitHub",
            Link:
              "https://github.com/physicslearning/PhysicsNAS"
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
      {
        Link: "./img/blendingphysics/Fig3.png",
        Caption:
          "Search space of our PhysicsNAS. In the proposed PhysicsNAS, all the nodes are densely connected by mixed operators from predefined candidate operation sets. The hidden nodes can obtain information from the original inputs or from previous hidden nodes within this search setup. The training process is supervised by both ground truth and physical constraints.",
      },
      {
        Link: "./img/blendingphysics/Fig4.jpg",
        Caption:
          "We evaluate our method on a simulator of classical tasks. The first task (Left) is predicting the trajectory of a ball being tossed, and the second task (Right) is estimating the velocities of two objects after collision.",
      },
      {
        Link: "./img/blendingphysics/Fig6.png",
        Caption:
          "Utilization of physical operations in PhysicsNAS. The selection of physics-inspired operation depends on its accuracy. PhysicsNAS tends to utilize the physical operations when they are more accurate (like the elastic collision model), and prefers a residual connection when they are inaccurate (like the parabola equation).",
      },
      {
        Link: "./img/blendingphysics/Fig7.png",
        Caption:
          "Failure case. In rare situations, a single-stream network could be preferred. PhysicsNAS is unable to converge to single-stream architectures due to the edge selection mechanism.",
      },
    ],
  
    Teaser: {
      imageURL: "./img/blendingphysics/Fig2.jpg",
      imageBackgroundURL: "./img/blendingphysics/Fig3.jpg",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div class="caption"><strong style="margin: auto; width: 100%; display: inline-block; text-align: center;">An overview of proposed NAS-based blending approach.</strong> </br> Our PhysicsNAS takes advantage of all the existing methods on blending physical prior, and is capable of generating new hybrid architectures for tasks under diversified physical environments. With the augmented search space and knowledge from prior information, it is possible for the proposed PhysicsNAS to generalize its performance with limited number of training samples.</div>
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
getTemplateAjax("js/templates/publication_template.html", function(template) {
    //do something with compiled template
    $("#SinglePaper").html(template(context));
});
