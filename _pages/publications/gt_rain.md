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

/* Create two equal columns that sits next to each other */
.column {
  flex: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}  
<style>
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
    <img src= "/assets/images/people/achuta_kadambi.png" alt="Headshot"> 
  </div>
  <div class="column">
    <img src= "/assets/images/people/achuta_kadambi.png" alt="Headshot"> 
  </div>
  <div class="column">
    <img src= "/assets/images/people/achuta_kadambi.png" alt="Headshot"> 
  </div>
  <div class="column">
    <img src= "/assets/images/people/achuta_kadambi.png" alt="Headshot"> 
  </div>
</div>
@section
@section
Yunhao Ba <br>
Electrical and Computer Engineering Department <br>
yhba@ucla.edu
