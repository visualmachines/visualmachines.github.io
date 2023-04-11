---
title: "WeatherStream: Light Transport Automation of Single Image Deweathering"
layout: paper_template_gt-rain
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /wstream.htm/
---
<style>
.figures {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0px;
}

.column {
  flex: 20%;
  padding: 0 3px;
}

figure {
  overflow: hidden;
  backgroundSize : contain;
  margin: auto;
  margin-top:0px;
}  

figure img {
  margin-top: 0px;
  margin-bottom: -1px;
  border-radius: 0px;
}

figcaption {
  text-align: center;
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 1rem;
}
   
.gif-container{	
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 7px;
}
.teaser-container{	
  display: flex;
  align-items: center;
  justify-content: center;
}
  
div#comparison1 { 
  width: 36vw;
  height: 48vw;
  overflow: hidden; 
  padding: 0 2px;}
  
div#comparison1 figure { 
  background-image: url(/assets/images/publications/wstream/res1_1.png); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}

div#comparison1 figure #divisor { 
  background-image: url(/assets/images/publications/wstream/res1_2.png);
  background-size: cover;
  position: relative;
  width: 100%; 
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);
  overflow: hidden;
  bottom: 0;
  height: 100%;
  
  
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5.5s;
  animation-direction:normal;
}
  
div#comparison2 { 
  width: 31.8vw;
  height: 48vw;
  overflow: hidden; 
  padding: 0 2px;}
  
div#comparison2 figure { 
  background-image: url(/assets/images/publications/wstream/res2_1.png); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}

div#comparison2 figure #divisor { 
  background-image: url(/assets/images/publications/wstream/res2_2.png);
  background-size: cover;
  position: relative;
  width: 100%; 
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);
  overflow: hidden;
  bottom: 0;
  height: 100%;
  
  
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5.5s;
  animation-direction: normal;
}
  
div#comparison3 { 
  width: 15.88vw;
  height: 12.7vw;
  overflow: hidden; 
  padding: 0 2px;}
  
div#comparison3 figure { 
  background-image: url(/assets/images/gt-rain/74__rain.png); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}

div#comparison3 figure #divisor { 
  background-image: url(/assets/images/gt-rain/74_derain.png);
  background-size: cover;
  position: relative;
  width: 100%; 
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);
  overflow: hidden;
  bottom: 0;
  height: 100%;
  
  
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5.5s;
  animation-direction: normal;
}

div#comparison4 { 
  width: 19.18vw;
  height: 12.7vw;
  overflow: hidden; 
  padding: 0 2px;}
  
div#comparison4 figure { 
  background-image: url(/assets/images/gt-rain/59__rain.png); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}

div#comparison4 figure #divisor { 
  background-image: url(/assets/images/gt-rain/59_derain.png);
  background-size: cover;
  position: relative;
  width: 100%; 
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);
  overflow: hidden;
  bottom: 0;
  height: 100%;
  
  
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5.5s;
  animation-direction: normal;
}
  
div#mcomparison1 { 
  width: 19.24vw;
  height: 12.7vw;
  overflow: hidden; 
  padding: 0 2px;}
  
div#mcomparison1 figure { 
  background-image: url(/assets/images/gt-rain/72__rain.png); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}

div#mcomparison1 figure #divisor { 
  background-image: url(/assets/images/gt-rain/72MPRNet.png);
  background-size: cover;
  position: relative;
  width: 100%; 
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);
  overflow: hidden;
  bottom: 0;
  height: 100%;
  
  
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5.5s;
  animation-direction: normal;
}
  
div#mcomparison2 { 
  width: 19.05vw;
  height: 12.7vw;
  overflow: hidden; 
  padding: 0 2px;}
  
div#mcomparison2 figure { 
  background-image: url(/assets/images/gt-rain/img2.png); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}

div#mcomparison2 figure #divisor { 
  background-image: url(/assets/images/gt-rain/img2MPRNet.png);
  background-size: cover;
  position: relative;
  width: 100%; 
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);
  overflow: hidden;
  bottom: 0;
  height: 100%;
  
  
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5.5s;
  animation-direction: normal;
}
  
div#mcomparison3 { 
  width: 15.88vw;
  height: 12.7vw;
  overflow: hidden; 
  padding: 0 2px;}
  
div#mcomparison3 figure { 
  background-image: url(/assets/images/gt-rain/74__rain.png); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}

div#mcomparison3 figure #divisor { 
  background-image: url(/assets/images/gt-rain/74MPRNet.png);
  background-size: cover;
  position: relative;
  width: 100%; 
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);
  overflow: hidden;
  bottom: 0;
  height: 100%;
  
  
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5.5s;
  animation-direction: normal;
}

div#mcomparison4 { 
  width: 19.18vw;
  height: 12.7vw;
  overflow: hidden; 
  padding: 0 2px;}
  
div#mcomparison4 figure { 
  background-image: url(/assets/images/gt-rain/59__rain.png); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}

div#mcomparison4 figure #divisor { 
  background-image: url(/assets/images/gt-rain/59MPRNet.png);
  background-size: cover;
  position: relative;
  width: 100%; 
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);
  overflow: hidden;
  bottom: 0;
  height: 100%;
  
  
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5.5s;
  animation-direction: normal;
}
div#comparison_teaser_1 { 
  width: 20vw;
  height: 31vw;
  overflow: hidden; 
  padding: 0 3px;
}  
div#comparison_teaser_1 figure { 
  background-image: url(/assets/images/gt-rain/94.jpg); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}
div#comparison_teaser_1 figure #divisor { 
  background-image: url(/assets/images/gt-rain/94_MPRNet.png);
  background-size: cover;
  position: relative;
  width: 100%; 
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);
  overflow: hidden;
  bottom: 0;
  height: 100%;
  
  
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5.5s;
  animation-direction: normal;
}
  
div#comparison_teaser_2 { 
  width: 20vw;
  height: 31vw;
  overflow: hidden; 
  padding: 0 3px;
}
div#comparison_teaser_2 figure { 
  background-image: url(/assets/images/gt-rain/94.jpg); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}
div#comparison_teaser_2 figure #divisor { 
  background-image: url(/assets/images/gt-rain/94_ours.png);
  background-size: cover;
  position: relative;
  width: 100%; 
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);
  overflow: hidden;
  bottom: 0;
  height: 100%;
  
  
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5.5s;
  animation-direction: normal;
}
@keyframes slide {
0% {width: 0%; box-shadow: 0px 0px 0px 0px rgba(0,0,0,.5);}
  19% {box-shadow: 0px 0px 0px 0px rgba(0,0,0,.5);}
  20% { width: 0%; box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);}
  80% { width: 100%; box-shadow: 1px 0px 5px 1px rgba(0,0,0,.5);}
}  
</style>
{% for publication in site.data.publications %}
{% if publication.name == "w_stream" %}

# {{ publication.title }}
{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}
<p>
<font color="gray" size="5"><a href="https://cvpr2023.thecvf.com">CVPR 2023, Vancouver, Canada</a></font>
</p>
<!-- <hr class="center" style="width: 80%; color: grey; height: 0.2px; background-color:grey;"/> -->

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})<br>
**We propose a new dataset, publicly available,<br>
that makes all image-based deweathering models we tested perform better.**
<br>

{% endif %}
{% endfor %}

<!--

  1 Abstract
  2 Files
  3 Comparison
  4 Additonal Results
  5 Citations
  6 Contact

-->

@section
Today single image deweathering is arguably more sensitive to the dataset type, rather than the model. We introduce WeatherStream, an automatic pipeline capturing all real-world weather effects (rain, snow, and rain fog degradations), along with their clean image pairs. Previous state-of-the-art methods that have attempted the all-weather removal task train on synthetic pairs, and are thus limited by the Sim2Real domain gap. Recent work has attempted to manually collect time multiplexed pairs, but the use of human labor limits the scale of such a dataset. We introduce a pipeline that uses the power of light-transport physics and a model trained on a small, initial seed dataset to reject approximately 99.6% of unwanted scenes. The pipeline is able to generalize to new scenes and degradations that can, in turn, be used to train existing models just like fully human-labeled data. Training on a dataset collected through this procedure leads to significant improvements on multiple existing weather removal methods on a carefully human-collected test set of real-world weather effects.

@section
- Paper - ([link](https://drive.google.com/drive/folders/15sPe_S0sPjB65S6EHmhRuQ4NqV7eimTU?usp=share_link))
- Code - ([link](https://drive.google.com/drive/folders/1MmXeSBgoeAJT6FHlWhZwBVET9RHpiG4W?usp=share_link))
- Dataset - ([link](https://drive.google.com/drive/folders/12Z9rBSTs0PPNHLieyU2vnCTzR6fOFLrT?usp=share_link))
<!-- - Poster - Coming soon! ([link](https://drive.google.com/file/d/1LmTB41ZYfybzew78lVI0WbfeKOho2T10/view?usp=sharing))-->
<!-- - Video - Coming soon!  ([link](https://drive.google.com/file/d/1kODUREmzin1xH1OSCejV3h0M4SlaCB68/view?usp=sharing))-->
@section
The GT-RAIN challenge invites the public to push the boundary of single image deraining for challenging real world images degraded by various degrees of rainy weather that were collected from all around the world -- stretching from North America to Asia. The competition features the first large scale dataset comprised of real rainy image and ground truth image pairs captured from over 115 scenes. The challenge is sponsored by the US Army Research Laboratory (ARL) with monetary awards for the best performing teams: $1000 USD for first place, $800 USD for second place and $500 USD for third place.

The WeatherStream challenge extends this challenge to multiple weather conditions. Coming soon!

@section
<div class="teaser-container">
<div id="comparison1">
  <figure>
    <div id="divisor"></div>
  </figure>
</div>
<div id="comparison2">
  <figure>
    <div id="divisor"></div>
  </figure>
</div>
</div>
In contrast to previous datasets, this dataset is not manually collected, but uses algorithms based on **light transport** to automatically
curate the dataset. Doing this algorithmically not only improves quality of the dataset, but also the scale.

@section
@section
@section
<div style="background-color: #f2f2f2; padding: 10px; font-family: monospace; font-size: 12px;">
@inproceedings{singh2023depth, <br>
  &nbsp; title={WeatherStream: Light Transport Automation of Single Image Deweathering}, <br>
  &nbsp; author={Zhang, Howard and Ba, Yunhao and Yang, Ethan and Mehra, Varan and Gella, Blake and Suzuki, Akira and Pfahnl, Arnold and Chandrappa, Chethan Chinder and Wong, Alex and Kadambi, Achuta}, <br>
  &nbsp; booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition}, <br>
  &nbsp; year={2023} <br>
}
</div>


@section
Howard Zhang <br>
Electrical and Computer Engineering Department <br>
hwdz15508@g.ucla.edu <br>
&nbsp;<br>
Yunhao Ba <br>
Electrical and Computer Engineering Department <br>
yhba@ucla.edu <br>
