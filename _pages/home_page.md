---
title: " "
layout: home
sitemap: false
permalink: /
header:
  overlay_image: /assets/images/vmgHomeMain.png

# excerpt: >
#   <h4>Giving Robots the Gift of Sight</h4><h5>Superhuman cameras enable superhuman robotics,<br>advancing cyberphysical systems and digital health</h5>
head_scripts:

---
<main role="main" class="container-fluid">
  <div class="row slideshow">
    {% assign slides = site.data.slides %}
    {% for slide in slides %}
    <div class="col-12 p-0 slide">
      <img src="{{ slide.image_link }}" class="img-fluid">
      <div class="over-text d-none d-md-none d-lg-block">
        <div class="heading">{{ slide.title }}</div>
        <div class="body-home">{{ slide.text_line1 }}</div>
        <div class="body-home">{{ slide.text_line2 }}</div>
      </div>
    </div>
    {% endfor %}
    <!-- Navigation Arrows -->
    <div id="prevArrow" class="arrow arrow-left">&lt;</div>
    <div id="nextArrow" class="arrow arrow-right">&gt;</div>
  </div>
</main>


<style>
  /* CSS for slideshow */
  .slideshow {
    position: relative;
    height: 400px; /* Adjust height as per your image dimensions */
    overflow: hidden;
  }
  
  .slide {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    width: 100%;
    margin: 0; /* Ensure no margin */
    padding: 0; /* Ensure no padding */
  }

  .slide.active {
    opacity: 1;
  }
  
  /* Additional styling for overlay text */
  .over-text {
    position: absolute;
    bottom: 20px;
    left: 60px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    max-width: 510px;
  }
  
  .heading {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .body-home {
    font-size: 16px;
  }

  .img-fluid {
    width: 100%;
    height: auto;
  }

 .arrow-left {
  position: absolute;
  bottom: 20px; 
  left: 20px; 
  width: 20px;
  height: 20px; 
  color:  #666262;
  font-size: 24px; 
  text-align: center;
  line-height: 20px; 
  cursor: pointer;
  z-index: 1000; 
}

.arrow-right {
  position: absolute;
  bottom: 20px; 
  right: 20px;
  width: 20px; 
  height: 20px;
  color:#666262 ;
  font-size: 24px; 
  text-align: center;
  line-height: 20px; 
  cursor: pointer;
  z-index: 1000; /* Ensure arrows are above slides */
}

</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show first slide
  slides[currentSlide].classList.add("active");

  // Function to show next slide
  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // Function to show previous slide
  function prevSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // Automatically move to next slide every 3 seconds
  setInterval(nextSlide, 5000);

  // Button click events for navigation arrows
  document.getElementById("nextArrow").addEventListener("click", nextSlide);
  document.getElementById("prevArrow").addEventListener("click", prevSlide);
});
</script>




<br>



<main role="main" class="container">
  <div class="row">
    <div class="col-md-5 offset-md-1">
      <div class="heading-home" style="color:#8f3985;">News</div>





      
 <div class="heading-home padded-top">Aug 2023: Diffusion w/ Perspective appears in SIGGRAPH Asia</div>
        <div class="body-home">Rishi's first author paper appears in the journal proceedings of SIGGRAPH Asia</div>

                <div class="heading-home padded-top">Apr 2023: Six papers accepted</div>
        <div class="body-home">Four papers in CVPR 2023, One in Nature Mach. Intell., One in IEEE Access.</div>
        
	    <div class="heading-home padded-top">Dec 2022: Achuta wins IEEE-HKN Under 35 Award</div>
	    <div class="body-home">For inclusive inventions in EECS and bioengineering. <a style="color: purple;" href="https://www.ee.ucla.edu/prof-kadambi-wins-ieee-hkn-under-35-award/">UCLA Article.</a></div>
     
             <div class="heading-home padded-top">Nov 2022: Pradyumna and Achuta win UIST Best Demo Award (Hon. Mention)</div>
        <div class="body-home">A pressure-sensitive speckle sensor to enable humans to interact with ordinary surfaces as if they were touch sensors.</div>   
        
                     <div class="heading-home padded-top">April 2022: Ellin wins NSF GRFP PhD Fellowship</div>
        <div class="body-home">For proposed research on making mHealth devices work in an inclusive manner. <a style="color: purple;" href="https://samueli.ucla.edu/ucla-engineering-students-receive-2022-nsf-graduate-research-fellowships/">UCLA Newsroom.</a></div>   

             
        <div class="heading-home padded-top">Feb 2022: MIT Press Textbook is in Print</div>
        <div class="body-home">Computational Imaging available for purchase or as <a style="color: purple;" href="http://imagingtext.github.io/">free download</a>.</div>
           
        
        <div class="heading-home padded-top">Sep 2021: Achuta wins DARPA YFA</div>
	    <div class="body-home">Details in the <a style="color: purple;" href="https://samueli.ucla.edu/ucla-electrical-engineer-receives-darpa-young-faculty-award-for-contactless-covid-testing/">UCLA Newsroom</a>.</div>
     
     
        <div class="heading-home padded-top">May 2021: Achuta wins ARO YIP Award</div>
	    <div class="body-home">Details in the <a style="color: purple;" href="https://samueli.ucla.edu/ucla-professor-awarded-us-army-young-investigator-grant-for-fairness-in-ai-research/">UCLA Newsroom</a>.</div>  
	    
        <div class="heading-home padded-top">April 2021: Medical device paper in Science</div>
      <div class="body-home">On the fairness of medical device physics.</div>
	 
        <div class="heading-home padded-top">March 2021: Achuta wins NSF CAREER Award</div>
	    <div class="body-home">Details on the <a style="color: purple;" href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2046737&HistoricalAwards=false">NSF Website</a>. </div> 

      <br>
    </div>
    <div class="col-md-5 offset-md-1">
      <div class="heading-home" style="color:#8f3985;">Current Teaching</div>
      <div class="heading-home padded-top">Winter 2024</div>
      <div class="body-home">ECE 149: Foundations of Computer Vision</div>
      <div class="heading-home padded-top">Fall 2023</div>
      <div class="body-home">ECE 239AS: Computational Imaging</div>
      <div class="heading-home padded-top">Fall 2022</div>
      <div class="body-home">ECE 113: Discrete-Time Signal Processing</div>
      <div class="heading-home padded-top">Winter 2023</div>
      <div class="body-home">ECE 113: Discrete-Time Signal Processing</div>
      <div class="heading-home padded-top">Spring 2023</div>
      <div class="body-home">ECE 188 / CS 188: Introduction to Computer Vision</div>
      <div class="heading-home padded-top">Achuta Office Hours (2023)</div>
      <div class="body-home">Wed. 10-11am in E4, 56-147J</div>
      <!--<div class="heading-home padded-top">Winter 2019</div>-->
      <!--<div class="body-home">EE 211: Digital Image Processing</div>-->
      <!--<div class="heading-home padded-top">Spring 2019</div>-->
      <!--<div class="body-home">TBD</div>-->
      <br>
    </div>
  </div>
</main> <!-- container -->
