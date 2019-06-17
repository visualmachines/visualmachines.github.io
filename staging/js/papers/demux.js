var context = {
    Title: "Demultiplexing Illumination via Low Cost Sensing and Nanosecond Coding",
    Authors: [
      {
        Name: "Achuta Kadambi",
        Link: "http://web.media.mit.edu/~achoo/",
        AssociationNumber: 1
      },
      {
        Name: "Ayush Bhandari",
        Link: "http://www.mit.edu/~ayush/MIT/Home.html",
        AssociationNumber: 1
      },
      {
        Name: "Refael Whyte",
        Link: "http://web.media.mit.edu/~achoo/demux/#",
        AssociationNumber: 2
      },
      {
        Name: " Adrian Dorrington",
        Link: "https://sci.waikato.ac.nz/about-us/people/adrian",
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
      Name: "IEEE ICCP 2014, Santa Clara CA",
      Link: "http://iccp14.org/"
    },
	

    Abstract:
      "Several computer vision algorithms require a sequence of photographs taken in different illumination conditions, which has spurred development in the area of illumination multiplexing. Various techniques for optimizing the multiplexing process already exist, but are geared toward regular or high speed cameras. Such cameras are fast, but code on the order of milliseconds. In this paper we propose a fusion of two popular contexts, time of flight range cameras and illumination multiplexing. Time of flight cameras are a low cost, consumer-oriented technology capable of acquiring range maps at 30 frames per second. Such cameras have a natural connection to conventional illumination multiplexing strategies as both paradigms rely on the capture of multiple shots and synchronized illumination. While previous work on illumination multiplexing has exploited coding at millisecond intervals, we repurpose sensors that are ordinarily used in time of flight imaging to demultiplex via nanosecond coding strategies.",
    Bibtex: `@article{kadambi2014demultiplexing,
	  <br>&nbsp;&nbsp;title={Demultiplexing illumination via low cost sensing and nanosecond coding},
	  <br>&nbsp;&nbsp;author={Kadambi, Achuta and Bhandari, Ayush and Whyte, Refael and Dorrington, Adrian and Raskar, Ramesh},
	  <br>&nbsp;&nbsp;year={2014},
	  <br>&nbsp;&nbsp;publisher={Institute of Electrical and Electronics Engineers (IEEE)}<br>
	  }`,
    Files: [
      {
        Name: "Paper",
        Links: [
          {
            Label: "PDF",
            Link: "http://web.media.mit.edu/~achoo/demux/Kadambi_demux.pdf"
          }
        ]
      },
      {
        Name: "Video",
        Links: [
          {
            Label: "YouTube",
            Link:
              "https://www.youtube.com/watch?v=A8sT4RxeedU"
          }
        ]
      },
      {
        Name: "Talk Slides",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/demux/talk/demux_iccp.pdf"
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/demux/talk/demux_iccp.pptx",
          }
        ]
      },
      {
        Name: "One Slide Summary",
        Links: [
          {
            Label: "PDF",
            Link:
              "http://web.media.mit.edu/~achoo/demux/poster/demux_poster.pdf"
          },
          {
            Label: "PPT",
            Link: "http://web.media.mit.edu/~achoo/demux/poster/demux_poster.pptx",
          }
        ]
      },
      {
        Name: "Code + Datasets",
        Links: [
          {
            Label: "Email for code",
            Link:
              "achoo@mit.edu"
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
        Link: "./img/demux/demux3.jpg",

        Caption: "Figure 2. A color amplitude image from the Time of Flight camera. The same problem as Figure 1, except we multiplex red, green, and blue lights. This allows for single-chip color ToF that does not sacrifice spatial resolution. ",
      },
      {
        Link: "./img/demux/demux4.jpg",
        Caption:"Figure 3: Relighting a scene post-capture. At left, in the composite image 2 lights are on at the same time, placed at the left and right of the scene. We can demultiplex to obtain only the right light or the left light. Note the shadows.",
      },
	  {
        Link: "./img/demux/demux6.jpg",
		Caption:"Figure 4: Comparison of ToF camera with a high speed camera for the same duration of exposure time ~ W milliseconds. In all cases, the Decimation matrix is a block-diagonal matrix where block-wise elements are circularly shifted versions of previous diagonal blocks. This leads to an analogy with Toeplitz matrices and convolution. Case 1: The forward model is presented for a fast videocamera where measurements are taken each W millisecond. For a single measurement, the camera integrates all light equally over the exposure. Hence there is no coding of exposure in this case. Case 2: Considers the ToF camera-like sensor where each W millisecond exposure is coded. Hence it is able to achieve nanosecond coding by frequency locking a reference clock signal with the illumination. Because the frequencies are locked, it is biased to the contribution from the similar strobing frequency. Case 3: By carefully coding the W millisecond exposure this sensor can demultiplex illumination using nanosecond scale codes.",
      },
    ],
  
    Teaser: {
      imageURL: "./img/demux/demux1.png",
      imageBackgroundURL: "./img/demux/demux1_crop.png",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div class="caption">Figure 1: Demultiplexing Illumination with a Time of Flight Camera. The scene is in upper-left. A ToF camera is synced to 3 light sources; we measure all three light sources (upper-right) and can decompose as if only one of the individual light sources was on. Note the distinction of shadows in the separated images.</div>
      `,
    },
    FAQ: [
        {
            Question: "What is the main contribution of this project?",
            Answer: "Many computer vision algorithms require photographs of a scene under different light sources (e.g. photometric stereo). There are ways to optimize the collection process: this is the multiplexed illumination problem in computer vision. However, existing work is tailored toward conventional cameras. We derive a multiplexing model for Time of flight cameras, which are increasingly popular 3D cameras that form the basis for the new Microsoft Kinect. ",
        },
        {
            Question: "What exactly is illumination multiplexing?",
            Answer: "Suppose we have 3 lights, A, B, and C illuminating a scene. If we take a photograph, we measure a combination of the three lights (this is the forward model). The inverse problem is to capture images as if only a single light was on. This is not a new problem and has been studied by Schechner's group at Technion (among others). ",   
        },
        {
          Question: "Why is illumination multiplexing tough for Time of Flight Cameras?",
          Answer: "Time of Flight cameras measure range by frequency locking to a strobed illumination source and measuring the phase shift of the modulation signal. Such cameras are designed to lock-on to one light source at the modulation frequency. ",   
        },
        {
          Question: "What are some consumer applications of this work?",
          Answer: "We validate our technique by constructing a prototype camera. One application is to multiplex colored light sources to create the only 3D color time of flight camera. ",
        },
        {
          Question: "Does this work in real-time?",
          Answer: "Yes. The results are demonstrated in real-time. See paper for details. ",
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
       
  
