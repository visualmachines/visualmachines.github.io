---
title: "Blending Camera and 77 GHz Radar Sensing for Equitable, Robust Plethysmography"
layout: paper_template
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
- Low-Res Paper ([Link](https://drive.google.com/file/d/1TSQpXoqkLtEgA3K1bSsQedVTjyQb65sa/view?usp=sharing))
- Dataset (Please submit the [data request form](https://docs.google.com/forms/d/e/1FAIpQLSfFqFXyp4-xH2NSx7Hk33FxSUb-MdwmwVCH3C_kUeQshJzn7Q/viewform) for access to the dataset)
- Code ([Link](https://github.com/UCLA-VMG/EquiPleth/))
- Slides ([Link](https://docs.google.com/presentation/d/1arSZlesm3VgBBglVNgi2xmAntTNgeLUfbt1LALtjDXw/edit#slide=id.g1428981a6f5_4_80))

@section
<div style="background-color: #f2f2f2; padding: 10px; font-family: monospace; font-size: 12px;">
@article{vilesov2022blending, <br>
  &nbsp; title={Blending Camera and 77 GHz Radar Sensing for Equitable, Robust Plethysmography}, <br>
  &nbsp; author={Vilesov, Alexander and Chari, Pradyumna and Armouti, Adnan and Harish, Anirudh Bindiganavale and Kulkarni, Kimaya and Deoghare, Ananya and Jalilian, Laleh and Kadambi, Achuta}, <br>
  &nbsp; journal={ACM Transactions on Graphics (TOG)}, <br>
  &nbsp; volume={41}, <br>
  &nbsp; number={4}, <br>
  &nbsp; pages={1--14}, <br>
  &nbsp; year={2022}, <br>
  &nbsp; publisher={ACM New York, NY, USA} <br>
}
</div>

@section
@section
Alexander Vilesov \
Electrical and Computer Engineering Department \
vilesov@ucla.edu
