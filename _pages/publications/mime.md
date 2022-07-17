---
title: "MIME: Minority Inclusion for Majority Group Enhancement of AI Performance"
layout: paper_template
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /mime.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "mime" %}

# {{ publication.title }}

{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<font color="gray" size="5"><a href="https://eccv2022.ecva.net">ECCV 2022, Tel Aviv, Israel</a></font>

<hr class="center" style="width: 70%; color: grey; height: 0.1px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*We present a theoretical existence proof of the MIME effect which is found to be consistent with experimental results on six different datasets.*
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
Several papers have rightly included minority groups in artificial intelligence (AI) training data to improve test inference for minority groups and/or society-at-large. A society-at-large consists of both minority and majority stakeholders. An oft-held misconception is that minority inclusion does not increase performance for majority groups alone. In this paper, we make the surprising finding that including minority samples can improve test error for the majority group. In other words, minority group inclusion leads to majority group enhancements (MIME) in performance. A theoretical existence proof of the MIME effect is presented and found to be consistent with experimental results on six different datasets.


@section
- Paper (Forthcoming) <!-- ([Link](https://drive.google.com/file/d/1c0h7UNYsZdO_QPr3feylZ0n6A5mAly6p/view?usp=sharing)) -->
- Dataset (Forthcoming)
- Code (Forthcoming)

@section

Forthcoming
<!--
@inproceedings{vilesov2022blending, \
   &nbsp; title={Blending Camera and 77 GHz Radar Sensing for Equitable, Robust Plethysmography}, \
   &nbsp; author={A. Vilesov, P. Chari, A. Armouti, A. B. Harish, K. Kulkarni, A. Deoghare, L. Jalilian, and A. Kadambi}, \
   &nbsp; journal={ACM Trans. Graph. (SIGGRAPH)}, \
   &nbsp; year={2022} \
} -->

@section
@section
Pradyumna Chari \
Electrical and Computer Engineering Department \
pradyumnac@ucla.edu
