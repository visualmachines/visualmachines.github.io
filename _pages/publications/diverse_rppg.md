---
title: "Diverse RPPG"
layout: paper_template
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /diverse_rppg.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "Diverse RPPG" %}

# {{ publication.title }}
{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<hr class="center" style="width: 80%; color: grey; height: 0.2px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*The proposed method uses small variations in skin color, as well as novel physics guided techniques to estimate the heart rate in a skin tone robust manner. The plots show low pass filtered versions (containing the first and second harmonics of the estimated pulse rate) of both the ground truth and estimated pulse waveforms to visualize the similarity.*
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
Heart rate (HR) is an essential clinical measure for the assessment of cardiorespiratory instability. Since communities of color are disproportionately affected by both COVID-19 and cardiovascular disease, there is a pressing need to deploy contactless HR sensing solutions for high-quality telemedicine evaluations. Existing computer vision methods that estimate HR from facial videos exhibit biased performance against dark skin tones. We present a novel physics-driven algorithm that boosts performance on darker skin tones in our reported data. We assess the performance of our method through the creation of the first telemedicine-focused remote vital signs dataset, the VITAL dataset. 432 videos (~864 minutes) of 54 subjects with diverse skin tones are recorded under realistic scene conditions with corresponding vital sign data. Our method reduces errors due to lighting changes, shadows, and specular highlights and imparts unbiased performance gains across skin tones, setting the stage for making medically inclusive non-contact HR sensing technologies a viable reality for patients of all skin tones.


@section
- Paper ([PDF](https://arxiv.org/abs/2010.12769))

@section
<div style="background-color: #f2f2f2; padding: 10px; font-family: monospace; font-size: 12px;">
@inproceedings{Chari2020DiverseRC, <br>
  &nbsp; author = {Pradyumna Chari and Krish Kabra and Doruk Karinca and Soumyarup Lahiri and Diplav Srivastava and Kimaya Kulkarni and Tianyuan Chen and Maxime Cannesson and Laleh Jalilian and A. Kadambi}, <br>
  &nbsp; title = {Diverse R-PPG: Camera-Based Heart Rate Estimation for Diverse Subject Skin-Tones and Scenes}, <br>
  &nbsp; year = {2020} <br>
}
</div>

@section
@section
Achuta Kadambi \
Assistant Professor \
Electrical and Computer Engineering Department \
achuta@ee.ucla.edu 
