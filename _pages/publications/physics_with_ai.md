---
title: "Blending Physics with Artificial Intelligence"
layout: paper_template
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /physics_ai.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "physics_with_ai" %}

# {{ publication.title }}
{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<hr class="center" style="width: 80%; color: grey; height: 0.2px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*Figure 1. Blending physics and learning often depends on the quality of physics and data. The “goodness” of physics and data can be defined more precisely in context of training data or model mismatch.*

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
For centuries, humans have discovered the physical laws that underpin our world. What if the next Einstein or Newton is not a human, but a machine? Machines that are physics-aware can transform a multitude of fields, poised to enable unexpected and meaningful feats in science and engineering. In this paper, we survey methods germane to the imaging sciences where we observe a very special convergence of a millennia of optical theories with decades of digital photos.


@section
- Paper ([PDF]({{ site.baseurl }}/assets/spie_survey.pd))

@section
@inproceedings{kadambi2020blending, \
  &nbsp; title={Blending physics with artificial intelligence}, \
  &nbsp; author={Kadambi, Achuta}, \
  &nbsp; booktitle={Computational Imaging V}, \
  &nbsp; volume={11396}, \
  &nbsp; pages={113960B}, \
  &nbsp; year={2020}, \
  &nbsp; organization={International Society for Optics and Photonics} \
}

@section
@section
Achuta Kadambi <br>
Assistant Professor <br>
Electrical and Computer Engineering Department <br>
achuta@ee.ucla.edu
