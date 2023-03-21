---
title: "On Learning Mechanical Laws of Motion from Video Using Neural Networks"
layout: paper_template
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /visualphysics.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "visual_physics" %}

# {{ publication.title }}
{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<hr class="center" style="width: 80%; color: grey; height: 0.2px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*Figure 1. Recognizing physical equations from visual cues without human intervention. Here, we show how an input video of projectile motion can be processed by our method to recover both the governing equation of motion, as well as two governing parameters of initial velocities (both horizontal and vertical). These can be used for several applications in computer vision.*
<!--
*Figure 1. An overview of the Visual Physics philosophy. Multiple videos describing a physics task are used as input to our proposed algorithm. The method is able to discover both governing parameters (such as initial velocities) and the governing equations (kinematic equations in the above case).*
-->
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
In computer vision, physics plays an important role in several applications. In this work, we teach a machine to detect the mechanical laws of motion of physical objects using video, and show how the results can be useful for computer vision tasks. We assume no prior knowledge of physics, beyond a temporal stream of bounding boxes. The problem is very difficult because a machine must learn not only a governing equation (e.g. projectile motion) but also the existence of governing parameters (e.g. velocities). We evaluate our ability to represent the physical laws of motion in video, such as the movement of a projectile or circular motion, in both real and constructed videos. These elementary tasks have textbook governing equations and enable ground truth verification of our approach. To establish the importance of the proposed method, we show a real-world use case in the domain of object tracking in confounding scenes, where existing state-of-the-art algorithms fail. Incorporating physics into computer vision not only serves the purpose of curiosity-driven research, but also provides an inductive bias for computer vision applications like object tracking.

<!--
In this paper, we teach a machine to discover the laws of physics from video streams. We assume no prior knowledge of physics, beyond a temporal stream of bounding boxes. The problem is very difficult because a machine must learn not only a governing equation (e.g. projectile motion) but also the existence of governing parameters (e.g. velocities). We evaluate our ability to discover physical laws on videos of elementary physical phenomena, such as projectile motion or circular motion. These elementary tasks have textbook governing equations and enable ground truth verification of our approach.
-->

@section
- Paper (Coming soon!) <!-- ([PDF](https://arxiv.org/pdf/1911.11893.pdf)) -->
- Low-res paper (Coming soon!)
- Code and data (Coming soon!)

<!--@section
@article{chari2019visual, \
  &nbsp; title={Visual Physics: Discovering Physical Laws from Videos}, \
  &nbsp; author={Chari, Pradyumna and Talegaonkar, Chinmay and Ba, Yunhao and Kadambi, Achuta}, \
  &nbsp; journal={arXiv preprint arXiv:1911.11893}, \
  &nbsp; year={2019} \
}-->
@section
@section
@section
Achuta Kadambi<br>
Assistant Professor<br>
Electrical and Computer Engineering Department<br>
achuta@ee.ucla.edu

@section
@section

<!--@section
**What is the philosophy behind Visual Physics?**
Through history, major physical discoveries have followed a principled sequence: visual observations, inference and conclusions. The apocryphal story of Newton and the falling apple, in relation to the discovery of gravity, perfectly epitomizes this notion. Through our work on 'Visual Physics', we look to make a first attempt at bringing this framework and notion of discovery to the domain of machines.

**What are the technical contributions as part of Visual Physics?** \
We propose an AI-driven pipeline capable of identifying governing physical parameters and equations, from videos of motion-dependent physics phenomena. We show promising results for both synthetic and real videos, where human interpretable equations are obtained as the end output.

**What is the significance of this work as part of the larger domain of AI for discovery and physics?** \
We see this work as a precursor to sustained research towards discovery of increasingly complex, and eventually unknown, physical phenomena from videos. If successful, the use cases for such capabilities are wide ranging: from better understanding astronomical interactions to delving deeper into the behavior of cancers and physiological phenomena.

**How does Visual Physics compare with existing art?** \
Most existing works address one part of the visual physics pipeline: [Iten18] addresses the discovery of governing physical parameters from measured physical data, while a large amount of prior work on genetic programming and symbolic regression addresses the notion of discovering governing equations from appropriate data. On the other hand, [Huang18] addresses the visual physics pipeline; however, the physics phenomena that may be addressed by them is limited since their proposed method is unable to discover governing parameters. To the best of our knowledge, our proposed method is the first to address the entire discovery pipeline without any prior information about the physics phenomenon under consideration.-->
