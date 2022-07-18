---
title: "Not Just Streaks: Towards Ground Truth for Single Image Derainings"
layout: paper_template_gt-rain
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /gt_rain.htm/
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
}

div#comparison1 { 
  width: 19.24vw;
  height: 12.7vw;
  max-width: 600px;
  max-height: 600px;
  overflow: hidden; 
  padding: 0 3px;}
  
div#comparison1 figure { 
  background-image: url(/assets/images/gt-rain/72__rain.png); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}

div#comparison1 figure #divisor { 
  background-image: url(/assets/images/gt-rain/72_derain.png);
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
  animation-duration: 5s;
  animation-direction: alternate;
}
  
div#comparison2 { 
  width: 19.05vw;
  height: 12.7vw;
  max-width: 600px;
  max-height: 600px;
  overflow: hidden; 
  padding: 0 3px;}
  
div#comparison2 figure { 
  background-image: url(/assets/images/gt-rain/img2.png); 
  background-size: cover;
  position: relative;
  width: 100%; 
  height: 100%;
  margin: 0; 
}

div#comparison2 figure #divisor { 
  background-image: url(/assets/images/gt-rain/img2_ours.png);
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
  animation-duration: 5s;
  animation-direction: alternate;
}
  
div#comparison3 { 
  width: 15.875vw;
  height: 12.7vw;
  max-width: 600px;
  max-height: 600px;
  overflow: hidden; 
  padding: 0 3px;}
  
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
  animation-duration: 5s;
  animation-direction: alternate;
}

div#comparison4 { 
  width: 19.18vw;
  height: 12.7vw;
  max-width: 600px;
  max-height: 600px;
  overflow: hidden; 
  padding: 0 3px;}
  
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
  animation-duration: 5s;
  animation-direction: alternate;
}
@keyframes slide {
0% {width: 0%}
  20% { width: 0%; }
  80% { width: 100%; }
}  
</style>
{% for publication in site.data.publications %}
{% if publication.name == "GT-Rain" %}

# {{ publication.title }}
{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<hr class="center" style="width: 80%; color: grey; height: 0.2px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*The points above depict datasets and their corresponding outputs
from models trained on them. These outputs come from a real rain image from
the Internet.*
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
We propose a large-scale dataset of real-world rainy and
clean image pairs and a method to remove degradations, induced by
rain streaks and rain accumulation, from the image. As there exists no
real-world dataset for deraining, current state-of-the-art methods rely on
synthetic data and thus are limited by the sim2real domain gap; more-
over, rigorous evaluation remains a challenge due to the absence of a real
paired dataset. We fill this gap by collecting the first real paired deraining
dataset through meticulous control of non-rain variations. Our dataset
enables paired training and quantitative evaluation for diverse real-world
rain phenomena (e.g. rain streaks and rain accumulation). To learn a
representation invariant to rain phenomena, we propose a deep neural
network that reconstructs the underlying scene by minimizing a rain-
invariant loss between rainy and clean images. Extensive experiments
demonstrate that our model outperforms the state-of-the-art deraining
methods on real rainy images under various conditions.
@section
- Paper (Forthcoming)
- Code (Forthcoming)
- Dataset (Forthcoming)

@section
<div class="figures">
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/94_rain-1.png" alt="Missing"> 
      <figcaption> Rainy Image </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/94_DGNL-1.png" alt="Missing"> 
      <figcaption> DGNL-Net [5]  </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_rain-1.png" alt="Missing"> 
      <figcaption> Rainy Image </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_DGNL-1.png" alt="Missing"> 
      <figcaption> DGNL-Net [5] </figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/94_SPANet-1.png" alt="Missing"> 
      <figcaption> SPANet [1]</figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/94_EDv4-1.png" alt="Missing"> 
      <figcaption> EDR V4 (S) [6] </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_SPANet-1.png" alt="Missing"> 
      <figcaption> SPANet [1]</figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_EDv4-1.png" alt="Missing"> 
      <figcaption> EDR V4 (S) [6]</figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/94_HRR-1.png" alt="Missing"> 
      <figcaption> HRR [2]</figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/94_EDv4rain1400-1.png" alt="Missing"> 
      <figcaption> EDR V4 (R) [6]</figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_HRR-1.png" alt="Missing"> 
      <figcaption> HRR [2]</figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_EDv4rain1400-1.png" alt="Missing"> 
      <figcaption> EDR V4 (R) [6]</figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/94_MSPFN-1.png" alt="Missing"> 
      <figcaption> MSPFN [3]</figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/94_MPRNet-1.png" alt="Missing"> 
      <figcaption> MPRNet [7]</figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_MSPFN-1.png" alt="Missing"> 
      <figcaption> MSPFN [3]</figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_MPRNet-1.png" alt="Missing"> 
      <figcaption> MPRNet [7]</figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/94_RCDNet-1.png" alt="Missing"> 
      <figcaption> RCDNet [4]</figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/94_derain-1.png" alt="Missing"> 
      <figcaption> Ours </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_RCDNet-1.png" alt="Missing"> 
      <figcaption> RCDNet [4]</figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_ours-1.png" alt="Missing"> 
      <figcaption> Ours </figcaption>
    </figure>
  </div>
</div>

Note EDR V4 (S) [6] denotes the EDR model trained on SPA-Data [1], and EDR V4 (R) [6] denotes the EDR model
trained on Rain14000 [8].

[1] Wang, T., Yang, X., Xu, K., Chen, S., Zhang, Q., Lau, R.W.: Spatial attentive
single-image deraining with a high quality real rain dataset. In: Proceedings of the
IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 12270–
12279 (2019)

[2] Li, R., Cheong, L.F., Tan, R.T.: Heavy rain image restoration: Integrating physics
model and conditional adversarial learning. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 1633–1642 (2019

[3] Jiang, K., Wang, Z., Yi, P., Chen, C., Huang, B., Luo, Y., Ma, J., Jiang, J.: Multiscale progressive fusion network for single image deraining. In: Proceedings of theIEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 8346–8355 (2020)

[4] Wang, H., Xie, Q., Zhao, Q., Meng, D.: A model-driven deep neural network for single image rain removal. In: Proceedings of the IEEE/CVF Conference on Computer
Vision and Pattern Recognition (June 2020)

[5] Hu, X., Zhu, L., Wang, T., Fu, C.W., Heng, P.A.: Single-image real-time rain removal
based on depth-guided non-local features. IEEE Transactions on Image Processing
30, 1759–1770 (2021)

[6] Guo, Q., Sun, J., Juefei-Xu, F., Ma, L., Xie, X., Feng, W., Liu, Y., Zhao, J.: Efficientderain: Learning pixel-wise dilation filtering for high-efficiency single-image
deraining. In: Proceedings of the AAAI Conference on Artificial Intelligence. vol. 35,
pp. 1487–1495 (2021)

[7] Zamir, S.W., Arora, A., Khan, S., Hayat, M., Khan, F.S., Yang, M.H., Shao, L.:
Multi-stage progressive image restoration. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 14821–14831 (2021)

[8] Fu, X., Huang, J., Zeng, D., Huang, Y., Ding, X., Paisley, J.: Removing rain from
single images via a deep detail network. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 3855–3863 (2017)
@section
<div class="gif-container">
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
<div id="comparison3">
  <figure>
    <div id="divisor"></div>
  </figure>
</div>
<div id="comparison4">
  <figure>
    <div id="divisor"></div>
  </figure>
</div>
</div>
@section
@section
@section
Yunhao Ba <br>
Electrical and Computer Engineering Department <br>
yhba@ucla.edu
