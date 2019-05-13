var context = {
    Title: "Coded Time of Flight Cameras: Sparse Deconvolution to Address Multipath Interference and Recover Time Profiles",
    Authors: [
      {
        Name: "Achuta Kadambi",
        Link: "http://web.media.mit.edu/~achoo/",
        AssociationNumber: 1
      },
      {
        Name: "Refael Whyte",
        AssociationNumber: "1, 2"
      },
      {
        Name: "Ayush Bhandari",
        Link: "http://www.mit.edu/~ayush/",
        AssociationNumber: 1
      },
      {
        Name: "Lee Streeter",
        Link: "https://sci.waikato.ac.nz/about-us/people/adrian",
        AssociationNumber: 2
      },
	  {
        Name: "Christopher Barsi",
        Link: "http://web.media.mit.edu/~cbarsi/",
        AssociationNumber: 1
      },
      {
        Name: " Adrian Dorrington",
        Link: "http://sci.waikato.ac.nz/about-us/people/adrian",
        AssociationNumber: 2
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
        Name: "University of Waikato",
        Link: "https://www.waikato.ac.nz/"
      }
    ],
    PublishSource: {
      Name: "ACM Transactions on Graphics 2013 (SIGGRAPH Asia)",
      Link: "http://iccp14.org/"
    },
	

    Abstract:
      "Time of flight cameras produce real-time range maps at a relatively low cost using continuous wave amplitude modulation and demodulation. However, they are geared to measure range (or phase) for a single reflected bounce of light and suffer from systematic errors due to multipath interference. We re-purpose the conventional time of flight device for a new goal: to recover per-pixel sparse time profiles expressed as a sequence of impulses. With this modification, we show that we can not only address multipath interference but also enable new applications such as recovering depth of near-transparent surfaces, looking through diffusers and creating time-profile movies of sweeping light. Our key idea is to formulate the forward amplitude modulated light propagation as a convolution with custom codes, record samples by introducing a simple sequence of electronic time delays, and perform sparse deconvolution to recover sequences of Diracs that correspond to multipath returns. Applications to computer vision include ranging of near-transparent objects and subsurface imaging through diffusers. Our low cost prototype may lead to new insights regarding forward and inverse problems in light transport.",
    
	Bibtex: `@article{kadambi2013coded,
    <br>&nbsp;&nbsp;author = {author={A. Kadambi and R. Whyte and A. Bhandari and L. Streeter and C. Barsi and A. Dorrington and R. Raskar}},
    <br>&nbsp;&nbsp;title = {{Coded time of flight cameras: sparse deconvolution to address multipath interference and recover time profiles}},
    <br>&nbsp;&nbsp;journal = {ACM Transactions on Graphics (TOG)},
    <br>&nbsp;&nbsp;volume = {32},
    <br>&nbsp;&nbsp;number = {6},
    <br>&nbsp;&nbsp;year = {2013},
    <br>&nbsp;&nbsp;publisher = {ACM},
    <br>&nbsp;&nbsp;pages = {167},<br>
    }`,
	Press: [
      {
        Name: "Engadget",
        Link:
          "http://www.engadget.com/2013/11/26/MITs-500-dollar-kinect-like-camera-works-in-snow-and-rain/"
      },
      {
        Name: "MIT News Office",
        Link: "http://www.engadget.com/2013/11/26/MITs-500-dollar-kinect-like-camera-works-in-snow-and-rain/",
      },
      {
        Name: "New Scientist",
        Link: "http://www.newscientist.com/article/dn24662-camera-that-sees-through-fog-could-make-driving-safer.html#.UpZ1l8Tktoc",
      },
      {
        Name: "GigaOM",
        Link:
        "http://gigaom.com/2013/11/26/mit-camera-could-help-avoid-collisions-boost-medical-imaging/"
      },
      {
        Name: "The Financial Express",
        Link: "http://www.financialexpress.com/news/now-nanocamera-that-operates-at-speed-of-light/1200210",
      },
	        {
        Name: "Softpedia",
        Link: "http://news.softpedia.com/news/MIT-Motion-Sensing-Camera-Can-Handle-Translucent-Objects-403933.shtml?utm_source=ForumSoftpedia&utm_medium=ForumSoftpedia&utm_campaign=ForumSoftpedia",
      },
      {
        Name: "CNN Money",
        Link: "http://money.cnn.com/news/newsfeeds/gigaom/articles/2013_11_26_mit_camera_could_help_avoid_collisions_boost_medical_imaging.html",
      },
      {
        Name: "Gizmodo",
        Link:
        "http://gizmodo.com/mits-new-500-kinect-like-camera-even-works-with-trans-1472478392",
      },
	  {
        Name: "Huffington Post",
        Link:
        "http://www.huffingtonpost.co.uk/2013/11/27/speed-of-light-camera_n_4348742.html?utm_hp_ref=uk-tech&ir=UK+Tech",
      }
    ],
	
    Files: [
      {
        Name: "Paper",
        Links: [
          {
            Label: "PDF",
            Link: "http://web.media.mit.edu/~achoo/lightsweep/paper.pdf"
          }
        ]
      },
      {
        Name: "Overview Video:",
        Links: [
          {
            Label: "YouTube",
            Link:
              "http://www.youtube.com/watch?v=BhMW5KRpCOk"
          }
        ]
      },
	  {
        Name: "Download Light Sweep Videos:",
        Links: [
          {
            Label: "URL",
            Link:
              "http://web.media.mit.edu/~achoo/lightsweep/movies"
          }
        ]
      },
      {
        Name: "SIGGRAPH Asia Talk Slides",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/nanophotography/talk/nano_talk.pdf"
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/nanophotography/talk/nano_talk.ppt",
          }
        ]
      },
      {
        Name: "One Slide Summary",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/nanophotography/poster/nano_poster.pdf"
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/nanophotography/poster/nano_poster.pptx",
          }
        ]
      },
      {
        Name: "Code + Datasets",
        Links: [
          {
            Label: "ZIP 350 MB",
            Link:
              "http://web.media.mit.edu/~achoo/nanophotography/Nanophotography_Demo_Code.zip"
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
        Link: "./img/nanophoto/nano3.jpg",

        Caption:"Figure 3: Key components of the hardware include: PMD 19k3 sensor, FPGA Dev Kit (student version), Custom PCB for light sources, and DSLR lens from a regular Canon SLR. ",
      },
    ],
  
    Teaser: {
      imageURL: "./img/nanophoto/nano1.PNG",
      imageBackgroundURL: "./img/nanophoto/nano1.PNG",
      imageHeight: 555, //in pixels
      rawHTML: `
	  <div class="caption">Figure 1: Using our custom time of flight camera, we are able to visualize light sweeping over the scene. In this scene, multipath effects can be seen in the glass vase. In the early time-slots, bright spots are formed from the specularities on the glass. Light then sweeps over the other objects on the scene and finally hits the back wall, where it can also be seen through the glass vase (8ns). Light leaves, first from the specularities (8-10ns), then from the stuffed animals. The time slots correspond to the true geometry of the scene (light travels 1 foot in a nanosecond, times are for round-trip). Please see http://media.mit.edu/~achoo/nanophotography for animated light sweep movies.</div>
      <div>
        <div>
          <img src="img/nanophoto/nano2.jpg" >
        </div>
      </div>
      <div class="caption">Figure 2: Recovering depth of transparent objects is a hard problem in general and has yet to be solved for Time of Flight cameras. A glass unicorn is placed in a scene with a wall behind (left). A regular time of flight camera fails to resolve the correct depth of the unicorn (center-left). By using our multipath algorithm, we are able to obtain the depth of foreground (center-right) or of background (right).</div>
      
	  
      <div class="row mt-4">


        <div class="col-md-4">
          <img src="img/MacroInter/marioFast.gif" alt="mario fast" style="width: 180px; height: 134px">
        </div>
        <div class="col-md-4">
          <iframe width="180px" height="134px" src="https://www.youtube.com/embed/jSiZJBtX1k4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-md-4">
          <iframe width="180px" height="134px" src="https://www.youtube.com/embed/2---PAMtWM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="caption">Observe light sweeping over the glass vase first, then over the Mario doll, Lion and wall in sequence. Note that the specularities on the glass vase disappear first and the multipath interactions of the wall and glass vase.</div>
      
	  <div class="row mt-4">
        <div class="col-md-4">
			<iframe width="180px" height="134px" src="https://www.youtube.com/embed/2---PAMtWM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-md-4">
			<iframe width="180px" height="134px" src="https://www.youtube.com/embed/68ec2rvQ3OU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-md-4">
			<iframe width="180px" height="134px" src="https://www.youtube.com/embed/8ugEyuegmBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="caption">Empirical validation: by using a scene with calibrated geometry, we can empirically validate the time resolution of our technique.</div>
      
	  `,
    },
	
    FAQ: [
		{
            Question: "What is nanophotograpy?",
            Answer: 'Nanophotography is a new technique that exploits coded, continuous wave illumination, where the illumination is strobed at nanosecond periods. The innovation is grounded in a mathematical technique called "sparse coding" that applies to optical paths. The end result: where a conventional camera measures only a single depth at a pixel, the nanocamera is a multidepth or multirange camera. One application is light sweep photography, which offers a visualization of light propagation. Another is the ability to obtain 3D models of translucent objects. ',
        },
        {
            Question: "What's a simple analogy to describe Nanophotography?",
            Answer: "Many 3D systems are straightforward. Laser scanners, for instance, ping the scene with a pulse of light and measure the time it takes for the pulse to come back (this is also how LIDAR police scanners work). In Nanophotography, we embed a special code into the ping, so when the light comes back we obtain additional information beyond time of arrival. ",   
        },
        {
          Question: "How does it compare with the state of the art?",
          Answer: "Nanophotography is similar to the new Kinect, however, instead of probing the scene with a sinusoidal waveform, we probe the scene with a carefully chosen binary sequence that allows us to invert the optical paths. Recovering the optical paths allows us to visualize light in addition to other applications. In the academic sphere, our group at MIT previously presented femtophotography. The femtophotography used impulse based imaging ---a femtosecond pulsed laser--- coupled with extremely fast optics to recover the optical paths. A promising, low-cost technique has recently come from a University of British Columbia Team. They leverage continuous wave imaging, but instead of using coded signals, they take measurements at multiple frequencies and evaluate their technique qualitatively. We detail the advantages of coded signals --- which allows a single measurement at a single frequency --- in this paper. In addition, we provide quantitative comparisons of nanophotography's time resolution to existing literature, including femtophotography. ",   
        },
        {
          Question: "How does Continuous Wave (CW) range imaging compare with Impulse based?",
          Answer: "In impulse based imaging, a packet of photons is fired at the scene and synchronized with a timer --- the time of flight is literally measured. In CW range imaging, a periodic signal is strobed within the exposure time and subsequent computation allows us to extract the time of flight. CW offers some advantages, notably it does not require ultrafast hardware, and enjoys increased SNR because the signal is constantly transmitting within the exposure, The drawbacks of CW include increased computation and multipath interference. We address the latter in the technical paper.",
        },
        {
          Question: "What is new about nanophotography?",
          Answer: "Nanophotography, is at its heart, a paper that addresses the mixed pixel problem in time of flight range imaging. A mixed pixel occurs when multiple optical paths of light smear at a given pixel. Think of a transparent sheet in front of a wall, which would lead to 2 measured optical paths. We propose a new solution to this problem that is a joint design between the algorithm and hardware. In particular, we customizes the codes used in the time of flight camera to turn the sparse inverse problem from an ill-conditioned into a better-conditioned problem. ",
        },
		{
          Question: 'Where does the name "nanophotography" come from?',
          Answer: "The name comes from the light source that is used. In femtophotography a femtosecond pulse of light is sent to the scene. In nanophotography a periodic signal with a period in the nanosecond range is fired at the scene. By using a demodulation scheme, we are able to perform sub-nanosecond time profile imaging.  ",
        },
		{
          Question: "Does the light visualization work in real-time?",
          Answer: "To acquire the light sweep capture on a large scene, the total acquisition takes 4 seconds using research prototype hardware. Compare with a few hours for femtophotography, and 6 hours (including scene calibration) using the UBC method. We expect the acquisition to take a fraction of a second by exploiting two key factors: (i) incremental advances in new generations of hardware technology, and (ii) a tailored ASIC or on-chip FPGA implementation. ",
        },
		{
          Question: "How will this technology transfer to the consumer?",
          Answer: "A minor modification to commercial technology, such as Microsoft Kinect is all that is needed. In particular, the FPGA or ASIC circuit needs to be reconfigured to send custom binary sequences to the illumination and lock-in sensor. This needs to be combined with the software to perform the inversion. In general, time of flight cameras are improving in almost every dimension including cost, spatial resolution, time resolution, and form factor. These advances benefit the technique presented in nanophotography. ",
        },
		{
          Question: "Why is this not currently used in industry?",
          Answer: "Embedding custom codes, as we do, has pros and cons. The major cons include increased computation and ill-posed inverse problems. The former we can expect to be addressed by improvements in computational power and the latter we overcome by using sparse priors. This research prototype might influence a trend away from sinusoidal AMCW, which has been the de facto model in many systems beyond time of flight. More work is needed to make this production quality, but the early outlook is promising. ",
        },
		{
          Question: "If the nanocamera costs $500, how do I get one of these right away?",
          Answer: "If you want one right away, you will have to build one. All the parts can be bought off the shelf from vendors---no special order necessary. If you think you have the skillset of a motivated undergraduate student in EE (e.g., FPGA, PCB experience), you can probably build one following the details in the technical paper. Feel free to contact any of the authors for details. ",
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
       
  
