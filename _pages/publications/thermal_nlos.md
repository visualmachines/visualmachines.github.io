---
title: "Thermal Non-Line of Sight Imaging | ICCP 2019"
layout: paper_template
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /TNLOS_ICCP19.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "thermal_nlos" %}

# {{ publication.title }}
{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}
{% for award in publication.awards %} [{{ award.name }}]({{award.link}})
{% endfor %}
<hr class="center" style="width: 80%; color: grey; height: 0.2px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})

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
We propose a novel non-line-of-sight (NLOS) imaging framework with long-wave infrared (IR). At long-wave IR wavelengths, certain physical parameters are more favorable for high-fidelity reconstruction. In contrast to prior work in visible light NLOS, at long-wave IR wavelengths, the hidden heat source acts as a light source. This simplifies the problem to a single bounce problem. In addition, surface reflectance has a much stronger specular reflection in the long-wave IR spectrum than in the visible light spectrum. We reformulate a light transport model that leverages these favorable physical properties of long-wave IR. Specifically, we demonstrate 2D shape recovery and 3D localization of a hidden object. Furthermore, we demonstrate near real-time and robust NLOS pose estimation of a human figure, the first such demonstration, to our knowledge.


@section
- Paper ([PDF](https://visual.ee.ucla.edu/img/Thermal_NLOS-compressed.pdf))
- ICCP Slides ([PDF](https://visual.ee.ucla.edu/img/TNLOS_ICCP19/ICCP19_TNLOS.pdf))
- Videos ([Youtube](https://www.youtube.com/watch?v=H6aX9Wkncxc))

@section
@inproceedings{maeda2019thermal, \
  &nbsp; title={Thermal Non-Line-of-Sight Imaging}, \
  &nbsp; author={Maeda, Tomohiro and Wang, Yiqin and Raskar, Ramesh and Kadambi, Achuta}, \
  &nbsp; booktitle={2019 IEEE International Conference on Computational Photography (ICCP)}, \
  &nbsp; pages={1--11}, \
  &nbsp; year={2019}, \
  &nbsp; organization={IEEE} \
}

@section
@section
Tomohiro Maeda <br>
MIT Media Lab <br>
tomotomo@mit.edu <br>
Achuta Kadambi <br>
Visual Machines Group, UCLA <br>
achuta@ee.ucla.edu

@section
@section
![image]({{ site.baseurl }}/assets/images/publications/tnlos_1.svg)
<br>
*Fig. 1: NLOS imaging with long-wave IR is fundamentally different from NLOS at the visible wavelengths. (a) The visible light problem is a two-bounce problem, where the hidden object is a reflector. (b) The long-wave IR problem is a one-bounce problem since the hidden object is a light emitter. In addition to the bounce order, the two problems also differ in their BRDF characteristics.*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/tnlos_2.svg)
<br>
*Fig. 2: Corner setup. The canonical scene setup consists of a camera looking at the wall at a corner. o and w denote point locations on a target object and wall, and unit vectors ~l,~v,~n denote the directions of incoming, outgoing light and surface normal of the wall. f( ~l,~v,~n) is the BRDF of the wall.*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/tnlos_3.svg)
<br>
*Fig. 3: Reconstruction algorithm for 2D shape recovery and 3D localization. (a) Corner setup. From (b) measurement, (c) we perform 2D shape reconstruction at different depths. (d) Given the fitted BRDF model, long-wave IR radiance of an object is estimated for each depth. We estimate depth by finding a depth whose estimated radiance is the closest to expected radiance from the temperature prior.*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/tnlos_4.png)
<br>
*Fig. 4: NLOS scene reconstruction results. (a) Corner setups. In the visible spectrum, the object is not visible on the wall. (b) Thermal image of the target. (c) BRDF is fitted with GGX specular BRDF model. (d) Localization of the target (red circle shown in (b)). Reconstruction does not require prior knowledge on the shape or size of the hidden object.*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/tnlos_5.png)
<br>
*Fig. 5: NLOS pose estimation results. We show that processing raw frames of thermal images can improve the pose estimation algorithm. (a) shows NLOS imaging setup. (b) is an example of raw output from the camera. (c), (d), (e) Appropriate processing of raw thermal video frames results in better posture estimation. (f) (g) TV regularization could correct pose estimation on median filtering, while in (h), it could introduce artifacts that result in pose estimation error. (g) and (h) include human detection through score thresholding. Raw frames did not get high enough score for body detection.*
