var context = {
    Title: "Artificial Physics: Inexact Physical Priors meet Neural Networks",
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
      "The emerging data-driven methods offer an alternative solution to the conventional physical reasoning by learning from high-fidelity training data. However, these methods usually lack interpretiability and require massive amounts of data in general. Hence, different approaches to incorporating prior knowledge within data-driven frameworks have been proposed to make use of both data and physics. While these approaches are successful, we demonstrate that their network architecture matters: most of the physics-based learning architectures are task specific, and can not adapt to diverse physical circumstances easily. As such, we propose the physics-based neural architecture search (PhysicsNAS) that is generalizable to all physical environments. PhysicsNAS learns both the network architectures and the associated weights with physics-inspired candidate modules, and opens the new avenue for physics-based learning. It is an important step towards flexible formulations of physics-based learning architectures for specific goals.",
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
      }
    ],
  
    Contacts: `
      Achuta Kadambi<br>
      MIT Media Lab<br>
      achoo@mit.edu<br> 
    `,
  
    Photos: [
      {
        Link: "./img/blendingphysics/Fig2.jpg",
        Caption: "Figure 2: An overview of proposed NAS-based blending approach. Our PhysicsNAS takes advantage of all the existing methods on blending physical prior, and is capable of generating new hybrid architectures for tasks under diversified physical environments. With the augmented search space and knowledge from prior information, it is possible for the proposed PhysicsNAS to generalize its performance with limited number of training samples",
      },
      {
        Link: "./img/blendingphysics/Fig3.jpg",
        Caption:
          "Figure 3: Search space of our PhysicsNAS - In the proposed PhysicsNAS, all the nodes are densely connected by mixed operators from predefined candidate operation sets. The hidden nodes can obtain information from the original inputs or from previous hidden nodes within this search setup. The whole training process is supervised by the ground truth and physical constraints."
      },
    ],
  
    Teaser: {
      imageURL: "./img/blendingphysics/Fig2.jpg",
      imageBackgroundURL: "./img/blendingphysics/Fig3.jpg",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div class="caption">Figure 2: An overview of proposed NAS-based blending approach. Our PhysicsNAS takes advantage of all the existing methods on blending physical prior, and is capable of generating new hybrid architectures for tasks under diversified physical environments. With the augmented search space and knowledge from prior information, it is possible for the proposed PhysicsNAS to generalize its performance with limited number of training samples</div>
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
