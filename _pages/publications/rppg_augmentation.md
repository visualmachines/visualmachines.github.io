---
title: "rPPG augmentation"
layout: paper_template
sitemap: false
permalink: /rppg_augmentation.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "rPPG augmentation" %}

# {{ publication.title }}

{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<font color="gray" size="5"><a href="https://iccp2022.iccp-conference.org/">ICCP 2022, Pasadena</a></font>

<hr class="center" style="width: 70%; color: grey; height: 0.1px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*Illustration of real frames and the corresponding synthetic frames in the UBFC-RPPG dataset. Our proposed framework has successfully incorporated pulsatile signals when translating the skin color. The estimated pulse waves from PRN exhibit high correlation to the ground-truth waves, and the heart rates are preserved in the frequency domain.*
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
Data-driven remote vital sign estimation provides an efficient alternative to on-site clinical monitoring, however, its performance can be biased due to the imbalanced training sets. In this work, we take remote photoplethysmography (rPPG) as an example to examine the performance bias from skin tone variations in non-contact heart rate estimation. In rPPG, recent deep learning models have significantly improved the accuracy of the physiological measurement, however, the existing datasets MMSE-HR, AFRL, and UBFC-RPPG only contain roughly 10%, 0%, and 5% of dark-skinned subjects respectively. The imbalanced training sets result in a poor generalization capability of these models and lead to unwanted bias toward different demographic groups. In Western academia, it is regrettably difficult in a university setting to collect data on these dark-skinned subjects. Here we show a first attempt to overcome the lack of dark-skinned subjects by synthetic augmentation. A joint optimization framework is utilized to translate real videos from light-skinned subjects to dark skin tones while retaining their pulsatile signals. In the experiment, our method exhibits around 38% reduction in mean absolute error for the dark-skinned group and 49% improvement on bias mitigation, as compared with the previous work trained with just real samples.
@section

- Paper ([Link](https://drive.google.com/file/d/1Y5OHxx1PBW3S37jp6izA64EvGLbAJU4j/view?usp=sharing))
- Code ([Link](https://github.com/UCLA-VMG/rPPG_augmentation))
- Slides ([Link](https://docs.google.com/presentation/d/10169VJOuxUaLblFSPgLyg8ir39tEXze08YcjekCHO7c/edit?usp=sharing))

@section
@section
@section
Yunhao Ba <br>
Electrical and Computer Engineering Department <br>
yhba@ucla.edu
