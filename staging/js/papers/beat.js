var context = {
    Title: "Cascaded LIDAR using Beat Notes",
    Authors: [
      {
        Name: "Achuta Kadambi",
        Link: "http://web.media.mit.edu/~achoo/",
        AssociationNumber: 1
      },
      {
        Name: "Ramesh Raskar",
        Link: "http://web.media.mit.edu/~raskar/",
        AssociationNumber: 1
      }
    ],
    Associations: {
        Name: "MIT Media Lab",
        Link: "http://web.mit.edu/",
    },
    PublishSource: {
      Name: "IEEE Access 2017",
      Link: "https://ieeeaccess.ieee.org/",
    },
    Abstract:
      "Many ranging systems work by amplitude modulating the power of an integrated laser at MegaHertz (MHz) frequencies and demodulating it using a specialized imaging sensor to obtain sub-cm range precision. To extend a similar architecture to micron range precision, this paper incorporates beat notes. We study a form of cascaded light ranging which uses a Hertz-scale intermediate frequency to encode high-frequency pathlength information. We show synthetically and experimentally that a bulk implementation of opto-electronic mixers offers: (a) robustness to environmental vibrations; (b) programmability; and (c) stability in frequency tones. A fiberoptic prototype is constructed, which demonstrates 3 micron range precision over a range of 2 meters. We study and evaluate the cascaded architecture for use in machine vision, where vibrations and sampling rate are constraints.",
    Bibtex: `@article{Kadambioccluded2016,
 			<br>&nbsp;&nbsp;author = {Kadambi, Achuta and Raskar, Ramesh},
 			<br>&nbsp;&nbsp;title = {Rethinking Machine Vision Time of Flight with GHz Heterodyning, IEEE Access 2017},
 			<br>&nbsp;&nbsp;journal = {IEEE Access},
 			<br>&nbsp;&nbsp;year = {2017}<br>
		}`,

    Files: [
      {
        Name: "Paper",
        Links: [
          {
            Label: "PDF",
            Link: "http://web.media.mit.edu/~achoo/beat/Kadambi_beat_lowres.pdf", //both are low-res. Copied the links from the MIT website. Is this okay?
          },
          {
            Label: "PDF Low Res",
            Link:
              "http://web.media.mit.edu/~achoo/beat/Kadambi_beat_lowres.pdf",
          }
        ]
      }
    ],

    /*Related Work: [
      {
      	Name: "Two wavelength laser interferometry using superheterodyne R. Dandliker et al. Optics Letters 1988",
      	Links: {
      	  Label: "Two wavelength laser interferometry using superheterodyne", 
      	  Link:
      	  	"https://www.osapublishing.org/ol/abstract.cfm?uri=ol-13-5-339",
      	}
      },
      {
      	Name: "Femtophotography A. Velten et al. ACM Transactions on Graphics, 2013",
      	Links: {
      	  Label: "Femtophotography", 
      	  Link:
      	  	"http://web.media.mit.edu/~raskar/trillionfps/",
      	}
      },
      {
      	Name: "Phasor Imaging M. Gupta et al. ACM Transactions on Graphics, 2015",
      	Links: {
      	  Label: "Phasor Imaging",
      	  Link:
      	  	"http://www.cs.columbia.edu/CAVE/projects/phasor_imaging/",
      	}
      },
      {
      	Name: "Polarized 3D A. Kadambi et al. ICCV 2015",
      	Links: {
      	  Label: "Polarized 3D",
      	  Link:
      	  	"http://web.media.mit.edu/~achoo/polar3D/",
      	}
      },
      {
      	Name: "Cubic meter volume optical coherence tomography Z. Wang et al. Optica 2016", 
      	Links: {
      	  Label: "Cubic meter volume optical coherence tomography", 
      	  Link:
      	  	"https://www.osapublishing.org/optica/abstract.cfm?uri=optica-3-12-1496",
      	}
      },
      {
      	Name: "Superheterodyne interferometry using 1550-nm lasers F. Li et al. Applied Optics 2017", 
      	Links: {
      	  Label: "Superheterodyne interferometry", 
      	  Link:
      	  	"http://compphotolab.northwestern.edu/wordpress/wp-content/uploads/2017/09/ao-56-31-H51.pdf",
      	}
      }
    ],*/
  
    Contacts: `
      Achuta Kadambi<br>
      MIT Media Lab<br>
      achoo@mit.edu<br> 
    `,
  
    Photos: [
      {
        Link: "./img/beat/F_comp.jpg",
        Caption: "Figure 2. A high-level comparison of the proposed technique with heterodyne alternatives (other techniques like FROG or macro OCT are rather distinct). We do refer the reader to the broader literature, noting here, that the primary purpose of stacking is to shunt vibrations and non-linearities that are inherent to EO. Stacking also enables non-quadrature modulation schemes, which we explore in the paper.",
      },
      {
        Link: "./img/beat/F_tests.jpg",
        Caption: "Figure 3. Characterizing range precision in challenging conditions (physical experiment). (left) Optical filters are placed in the path of the transmitted laser radiation. The range precision remains stable until the optical power is reduced by about 45 dB. The expected free space coupling loss is 30 dB. (middle) The range precision does not change with increasing vibrations. The vibration measurements are in context of the ISO 2372 standard. (right) The beat note is reduced to 1 Hertz for a base frequency of 3 GHz. }",
      },
      {
        Link: "./img/beat/F_proto.jpg",
        Caption: "Figure 4: A micrometer resolution stage was used to evaluate the technique (physical experiment). The fiberoptic circuit is shown in the figure. Purple lines denote fiberoptic cable paths, and black lines denote electronic paths. The micrometer delay line is 5 centimeters long and has an adjustment screw to vary the distance between the transmit and receive fiber collimators. The upper-right inset shows the bulk optical setup.",
      },
      {
        Link: "./img/beat/F_einstein.jpg",
        Caption: "Figure 5: A GHz ToF imager can enable detailed human scans (simulated result). A bust of Albert Einstein scaled to human proportions is scanned using the cascaded approach at (a) 1 GHz and (b) 500 MHz. A Kinect simulating engine was used to scan the bust again at (c) 120 MHz.",
      }
    ],
  
    Teaser:{
      //imageURL: "",
      imageBackgroundURL: "./img/beat/bckgnd.JPG",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div>
        <iframe width="580" height="350" src="https://www.youtube.com/embed/3i7zSCrHZwU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="caption">Video 1: This is a presentation prior to acceptance of the paper in October 2017. We study LIDAR using filtering elements as a potential way to extend the reach of existing pathlength imaging systems. Our goals are similar to interferometric and coherent methods, but we aim to study a fusion of electronic and optical coherence. Please refer to the FAQ regarding comparisons to existing work.
      </div>

      `,
    },

    FAQ: [
        {
            Question: "What is this project about?",
            Answer: "This is a form of LIDAR technology that studies how to bridge the gap between pathlength ranging systems that are optically incoherent (e.g. ToF cameras in vision and graphics) with those that are optically coherent (e.g. OCT). What's interesting about the proposed method is that: (a) coherent methods typically require a matching of a reference and sample optical path; while (b) electronic systems are limited to just a few 100's of MHz. In this project, we use a stack of carefully chosen filtering elements in order to demonstrate micron range precision with robustness to vibrations.",
        },
        {
            Question: "Why is micron-resolution important for LIDAR and time of flight systems?",
            Answer: "Micron-resolution LIDAR is something we see as a sweet spot. It is not so precise as to be a laboratory technique (that can be influenced by air turbulence). On the other hand, the extra precision wrt. commodity LIDAR systems (which operate at cm or mm resolution) enables new applications. For example, subsurface scattering in materials can be teased out using the micron-scale pathlength changes. For 3D fabrication the resulting 3D scans would appear nearly photorealistic. Finally, for autonomous systems, the extra headroom in resolution could be used to compensate for adverse conditions (e.g. at long ranges, where precision decreases).",
        },
        {
          Question: "What is new in the approach?",
          Answer: "The novelty of our approach is to introduce a general formulation of having a cascaded stack of elements to perform ranging with. These filtering elements are analyzed in context of vibration cancellation, large frequencies, non-linearities in modulation, stability in the beat note, and sampling rate of the detector. Stacking is also a path toward limiting the non-quadrature bias that is inherent to EO schemes, a topic we analyze theoretically. Finally, we demonstrate a prototype that achieves < 5 micron range precision and suggest a path toward wide-field implementation.",
        },
        {
          Question: "How does our technique compare with existing pathlength ranging systems?",
          Answer: "A very similar and prevalent architecture to our technique are so-called \"time of flight\" cameras used in computer vision, computer graphics and robotics. The inclusion of beat notes in our formulation extends the frequency bandwidth of time of flight cameras to the GHz regime. The resolution we obtain is close to what macroscopic OCT methods can achieve (e.g. Wang et al. 2016), but without the need for sampling of a coherence envelope. Our goals are similar as compared to superheterodyne interferometry (Dandliker et al. 1988, and Li et al. 2017), but not reliant on optical frequency synchronization between multiple lasers. For a more complete picture, we direct the reader to these other papers in the field.", 
		    },
        {
          Question: "What are the drawbacks in our proposed approach?",
          Answer: "The signal power of light is reduced as it passes through modulation elements. We construct a single-pixel prototype that will need to be later scaled to a wide-field setup. We find that non-linearities are avoided when using a multi-cascade. Using a multi-cascade can be expensive. Since we are not using carrier frequency heterodyne (cf. superheterodyne), the maximum frequency bandwidth we achieve is far less than what superheterodyne interferometry can achieve superheterodyne interferometry (Dandliker et al. 1988, and Li et al. 2017).",
        },
        {
          Question: "What are some other applications of our work?",
          Answer: "We have demonstrated pathlength control at a minimum of around 2-3 micrometers. This is about one tenth the width of a human hair. The long-term goal of obtaining such high pathlength accuracy is to potentially enable inversion of scattering or indirect reflections, by separating light paths. Properly executed, this could enable deeper studies on medical tisuse or higher-resolution forms of non-line-of-sight imaging (e.g. around corners).",
        },
        {
          Question: "Does the technique work in real-time?",
          Answer: "At a single pixel, the results in the paper are collected in real time (faster than 30 Hz). However, we caution that a potential wide-field implementation requires scnaning at this time.", 
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
       
  
