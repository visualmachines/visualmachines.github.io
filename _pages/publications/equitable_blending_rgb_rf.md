---
title: "Blending Camera and 77 GHz Radar Sensing for Equitable, Robust Plethysmography"
layout: paper_template
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /equi_pleth_camera_rf.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "equi_pleth_camera_rf" %}

# {{ publication.title }}

{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<font color="gray" size="5"><a href="https://s2022.siggraph.org/">SIGGRAPH 2022, Vancouver, Canada</a></font>

<hr class="center" style="width: 70%; color: grey; height: 0.1px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*To overcome fundamental biases in camera-based remote plethysmography, we propose an adversarial learning-based fair fusion method, using a novel RGB-Radar hardware setup.*
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
With the resurgence of non-contact vital sign sensing due to the COVID-19 pandemic, remote heart-rate monitoring has gained significant prominence. Many existing methods use cameras; however previous work shows a performance loss for darker skin tones. In this paper, we show through light transport analysis that the camera modality is fundamentally biased against darker skin tones. We propose to reduce this bias through multi-modal fusion with a complementary and fairer modality – radar. Through a novel debiasing oriented fusion framework, we achieve performance gains over all tested baselines and achieve skin tone fairness improvements over the RGB modality. That is, the associated Pareto frontier between performance and fairness is improved when compared to the RGB modality. In addition, performance improvements are obtained over the radar-based method, with small trade-offs in fairness. We also open-source the largest multi-modal remote heart-rate estimation dataset of paired camera and radar measurements with a focus on skin tone representation.


@section
- Paper ([Link](https://dl.acm.org/doi/10.1145/3528223.3530161)) 
- Dataset (Forthcoming)
- Code ([Link](https://github.com/UCLA-VMG/EquiPleth/))

@section
@inproceedings{vilesov2022blending, \
  &nbsp; title={Blending Camera and 77 GHz Radar Sensing for Equitable, Robust Plethysmography}, \
  &nbsp; author={Vilesov, Alexander and Chari, Pradyumna and Armouti, Adnan and Harish, Anirudh B and Kulkarni, Kimaya and Deoghare, Ananya and Jalilian, Laleh and Kadambi, Achuta}, \
  &nbsp; booktitle={ACM Trans. Graph. (SIGGRAPH)}, \
  &nbsp; year={2022} \
}

@section
@section
Alexander Vilesov \
Electrical and Computer Engineering Department \
vilesov@ucla.edu
