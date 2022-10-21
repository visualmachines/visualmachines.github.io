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
  width: 19.24vw;
  height: 12.7vw;
  overflow: hidden; 
  padding: 0 2px;}
  
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
  animation-duration: 5.5s;
  animation-direction:normal;
}
  
div#comparison2 { 
  width: 19.05vw;
  height: 12.7vw;
  overflow: hidden; 
  padding: 0 2px;}
  
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
{% if publication.name == "GT-Rain" %}

# {{ publication.title }}
{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}
<p>
<font color="gray" size="5"><a href="https://eccv2022.ecva.net">ECCV 2022, Tel Aviv, Israel</a></font>
</p>
<!-- <hr class="center" style="width: 80%; color: grey; height: 0.2px; background-color:grey;"/> -->

<!-- ![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }}) -->
<div class="teaser-container">
<div id="comparison_teaser_1">
  <figure>
    <div id="divisor"></div>
  </figure>
</div>
<div id="comparison_teaser_2">
  <figure>
    <div id="divisor"></div>
  </figure>
</div>
</div>
***Left:** Previous state of the art MPRNet<sup>[7]</sup>. **Right:** Ours.*
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
- Paper ([link](https://drive.google.com/drive/folders/1b3oiKyj-h1vlMb1d84ffyOx-GTFJPb4O?usp=sharing))
- Code ([link](https://github.com/UCLA-VMG/GT-RAIN))
- Dataset ([link](https://drive.google.com/drive/folders/1NSRl954QPcGIgoyJa_VjQwh_gEaHWPb8?usp=sharing))
- Poster ([link](https://drive.google.com/file/d/1LmTB41ZYfybzew78lVI0WbfeKOho2T10/view?usp=sharing))
- Video ([link](https://drive.google.com/file/d/1kODUREmzin1xH1OSCejV3h0M4SlaCB68/view?usp=sharing))
@section
The GT-RAIN challenge invites the public to push the boundary of single image deraining for challenging real world images degraded by various degrees of rainy weather that were collected from all around the world -- stretching from North America to Asia. The competition features the first large scale dataset comprised of real rainy image and ground truth image pairs captured from over 115 scenes. The challenge is sponsored by the US Army Research Laboratory (ARL) with monetary awards for the best performing teams: $1000 USD for first place, $800 USD for second place and $500 USD for third place.<br> 

&nbsp;<br>

-Challenge ([link](https://codalab.lisn.upsaclay.fr/competitions/7988))
@section
***Top:** Ours. **Bottom:** Previous state of the art MPRNet<sup>[7]</sup>.*
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

<div class="gif-container">
<div id="mcomparison1">
  <figure>
    <div id="divisor"></div>
  </figure>
</div>
<div id="mcomparison2">
  <figure>
    <div id="divisor"></div>
  </figure>
</div>
<div id="mcomparison3">
  <figure>
    <div id="divisor"></div>
  </figure>
</div>
<div id="mcomparison4">
  <figure>
    <div id="divisor"></div>
  </figure>
</div>
</div>
@section
<div class="figures">
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/94_rain-1.png" alt="Missing"> 
      <figcaption> Rainy Image </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/94_DGNL-1.png" alt="Missing"> 
      <figcaption> DGNL-Net<sup>[5]</sup>  </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_rain-1.png" alt="Missing"> 
      <figcaption> Rainy Image </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_DGNL-1.png" alt="Missing"> 
      <figcaption> DGNL-Net<sup>[5]</sup> </figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/94_SPANet-1.png" alt="Missing"> 
      <figcaption> SPANet<sup>[1]</sup></figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/94_EDv4-1.png" alt="Missing"> 
      <figcaption> EDR V4 (S)<sup>[6]</sup> </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_SPANet-1.png" alt="Missing"> 
      <figcaption> SPANet<sup>[1]</sup> </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_EDv4-1.png" alt="Missing"> 
      <figcaption> EDR V4 (S)<sup>[6]</sup> </figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/94_HRR-1.png" alt="Missing"> 
      <figcaption> HRR<sup>[2]</sup> </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/94_EDv4rain1400-1.png" alt="Missing"> 
      <figcaption> EDR V4 (R)<sup>[6]</sup> </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_HRR-1.png" alt="Missing"> 
      <figcaption> HRR<sup>[2]</sup> </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_EDv4rain1400-1.png" alt="Missing"> 
      <figcaption> EDR V4 (R)<sup>[6]</sup> </figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/94_MSPFN-1.png" alt="Missing"> 
      <figcaption> MSPFN<sup>[3]</sup> </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/94_MPRNet-1.png" alt="Missing"> 
      <figcaption> MPRNet<sup>[7]</sup> </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_MSPFN-1.png" alt="Missing"> 
      <figcaption> MSPFN<sup>[3]</sup> </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_MPRNet-1.png" alt="Missing"> 
      <figcaption> MPRNet<sup>[7]</sup> </figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/94_RCDNet-1.png" alt="Missing"> 
      <figcaption> RCDNet<sup>[4]</sup> </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/94_derain-1.png" alt="Missing"> 
      <figcaption> Ours </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_RCDNet-1.png" alt="Missing"> 
      <figcaption> RCDNet<sup>[4]</sup> </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_ours-1.png" alt="Missing"> 
      <figcaption> Ours </figcaption>
    </figure>
  </div>
</div>

<sub>
Note EDR V4 (S)<sup>[6]</sup> denotes the EDR model trained on SPA-Data<sup>[1]</sup>, and EDR V4 (R)<sup>[6]</sup> denotes the EDR model
trained on Rain14000<sup>[8]</sup>.
</sub>

<sub>
[1] Wang, T., Yang, X., Xu, K., Chen, S., Zhang, Q., Lau, R.W.: Spatial attentive
single-image deraining with a high quality real rain dataset. In: Proceedings of the
IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 12270–12279 (2019)<br/>
[2] Li, R., Cheong, L.F., Tan, R.T.: Heavy rain image restoration: Integrating physics
model and conditional adversarial learning. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 1633–1642 (2019)<br/>
[3] Jiang, K., Wang, Z., Yi, P., Chen, C., Huang, B., Luo, Y., Ma, J., Jiang, J.: Multiscale progressive fusion network for single image deraining. In: Proceedings of theIEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 8346–8355 (2020)<br/>
[4] Wang, H., Xie, Q., Zhao, Q., Meng, D.: A model-driven deep neural network for single image rain removal. In: Proceedings of the IEEE/CVF Conference on Computer
Vision and Pattern Recognition (June 2020)<br/>
[5] Hu, X., Zhu, L., Wang, T., Fu, C.W., Heng, P.A.: Single-image real-time rain removal
based on depth-guided non-local features. IEEE Transactions on Image Processing
30, 1759–1770 (2021)<br/>
[6] Guo, Q., Sun, J., Juefei-Xu, F., Ma, L., Xie, X., Feng, W., Liu, Y., Zhao, J.: Efficientderain: Learning pixel-wise dilation filtering for high-efficiency single-image deraining. In: Proceedings of the AAAI Conference on Artificial Intelligence. vol. 35, pp. 1487–1495 (2021)<br/>
[7] Zamir, S.W., Arora, A., Khan, S., Hayat, M., Khan, F.S., Yang, M.H., Shao, L.:
Multi-stage progressive image restoration. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 14821–14831 (2021)<br/>
[8] Fu, X., Huang, J., Zeng, D., Huang, Y., Ding, X., Paisley, J.: Removing rain from
single images via a deep detail network. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 3855–3863 (2017)
</sub>
@section
@section



@InProceedings{ba2022gt-rain, \
  &nbsp;&nbsp;author={Ba, Yunhao and Zhang, Howard, and Yang, Ethan and Suzuki, Akira and Pfahnl, Arnold and Chandrappa, Chethan Chinder and de Melo, Celso and You, Suya and Soatto, Stefano and Wong, Alex and Kadambi, Achuta}, \
  &nbsp;&nbsp;title={Not Just Streaks: Towards Ground Truth for Single Image Deraining}, \
  &nbsp;&nbsp;booktitle={ECCV}, \
  &nbsp;&nbsp;year={2022} \
}


@section
Yunhao Ba <br>
Electrical and Computer Engineering Department <br>
yhba@ucla.edu <br> 
&nbsp;<br>
Howard Zhang <br>
Electrical and Computer Engineering Department <br>
hwdz15508@g.ucla.edu
