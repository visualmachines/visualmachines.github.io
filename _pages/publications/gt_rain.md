---
title: "Not Just Streaks: Towards Ground Truth for Single Image Derainings"
layout: paper_template
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /gt_rain.htm/
---
<style>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

.column {
  flex: 20%;
  padding: 0 4px;
}

figure {
  overflow: hidden;
  backgroundSize : contain;
  margin: auto;
  margin-top:4px;
}  

figure img {
  margin-top: 4px;
}

figcaption {
  text-align: center;
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
  3 Citations
  4 Press
  5 Contact
  6 FAQ
  7 Media

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
<div class="row">
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/131_rain-1.png" alt="Missing"> 
      <figcaption> Rainy Image </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_DGNL-1.png" alt="Missing"> 
      <figcaption> DGNL-Net </figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/131_SPANet-1.png" alt="Missing"> 
      <figcaption> SPANet </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_EDv4-1.png" alt="Missing"> 
      <figcaption> EDR V4 (S) </figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/131_HRR-1.png" alt="Missing"> 
      <figcaption> HRR </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_EDv4rain1400-1.png" alt="Missing"> 
      <figcaption> EDR V4 (R) </figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/131_MSPFN-1.png" alt="Missing"> 
      <figcaption> MSPFN </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_MPRNet-1.png" alt="Missing"> 
      <figcaption> MPRNet </figcaption>
    </figure>
  </div>
  <div class="column">
    <figure> 
      <img src= "/assets/images/gt-rain/131_RCDNet-1.png" alt="Missing"> 
      <figcaption> RCDNet </figcaption>
    </figure>
    <figure> 
      <img src= "/assets/images/gt-rain/131_ours-1.png" alt="Missing"> 
      <figcaption> Ours </figcaption>
    </figure>
  </div>
</div>
@section
@section
Yunhao Ba <br>
Electrical and Computer Engineering Department <br>
yhba@ucla.edu
