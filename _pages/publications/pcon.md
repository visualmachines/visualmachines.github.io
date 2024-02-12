---
title: "pCON: Polarimetric Coordinate Networks for Neural Scene Representations"
layout: paper_template_mime
sitemap: false
permalink: /pcon.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "pcon" %}

# {{ publication.title }}

{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<font color="gray" size="5"><a href="https://cvpr2023.thecvf.com">CVPR 2023, Vancouver, Canada</a></font>

<hr class="center" style="width: 70%; color: grey; height: 0.1px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*pCON learns to fit an image by learning a series of reconstructions with different singular values.*
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
Neural scene representations have achieved great success in parameterizing and reconstructing images, but current state of the art models 
are not optimized with the preservation of physical quantities in mind. While current architectures can reconstruct color images correctly, 
they create artifacts when trying to fit maps of  polar quantities. We propose polarimetric coordinate networks (pCON), a new model architecture 
for neural scene representations aimed at preserving polarimetric information while accurately parameterizing the scene. Our model removes 
artifacts created by current coordinate network architectures when reconstructing three polarimetric quantities of interest.

@section
- Paper: ([Link](https://drive.google.com/file/d/1rMeitp1FSr-ZHOjjSCmtDgfCkAxstPXG/view?usp=sharing))
- Supplement: ([Link](https://drive.google.com/file/d/1p2oeqEJpuQsQpZAXROm9eXzHlUFHBkKN/view?usp=sharing))
- Code: ([Link](https://drive.google.com/file/d/13s8ZIesXcE7MSRSnARLz9nOOzq-9WY2U/view?usp=sharing))
- Data: ([Link](https://drive.google.com/file/d/1QzWAWtfMKoeZZy_eyPZHyNMAMk6UunQL/view?usp=sharing))

@section
<figure> 
  <img src= "/assets/images/publications/pcon/pcon_results.png" alt="Missing"> 
</figure>
**Our model shows higher SSIM and fewer artifacts on predicted AoLP, DoLP and unpolarized intensity maps.**
Baseline models cause noise or tiling which is clearly visible on the checkerboard pattern on the floor, where 
all three quantities take large values. The artifacts are present on objects exhibiting both specular reflections, 
like the floor, and diffuse reflections, like the wall and doors in the background.

@section

<div style="background-color: #f2f2f2; padding: 10px; font-family: monospace; font-size: 12px;">
@inproceedings{peters2023pcon, <br>
  &nbsp; title={pCON: Polarimetric Coordinate Networks for Neural Scene Representations}, <br>
  &nbsp; author={Peters, Henry and Ba, Yunhao and Kadambi, Achuta}, <br>
  &nbsp; booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition}, <br>
  &nbsp; year={2023} <br>
}
</div>

@section
@section

Henry Peters <br>
Computer Science Department <br>
hpeters@ucla.edu <br>
&nbsp;<br>
Yunhao Ba <br>
Electrical and Computer Engineering Department <br>
yhba@ucla.edu <br>
<br>
