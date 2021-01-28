---
title: "Blending Diverse Physical Priors with Neural Networks"
layout: paper_template
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /blending_physical_priors/
---

{% for publication in site.data.publications %}
{% if publication.name == "blending_physical_priors" %}

# {{ publication.title }}
{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<hr class="center" style="width: 80%; color: grey; height: 0.2px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
<b>An overview of proposed NAS-based blending approach.</b>
<br>
*Our PhysicsNAS takes advantage of all the existing methods on blending physical prior, and is capable of generating new hybrid architectures for tasks under diversified physical environments. With the augmented search space and knowledge from prior information, it is possible for the proposed PhysicsNAS to generalize its performance with limited number of training samples.*
<br>

  <video width="320" height="240" controls="">
    <source src="..\..\assets\images\publication\blending_physical_video_3.mp4" type="video/mp4">
  Your browser does not support the video tag.
  </video>
  <video width="320" height="240" controls="">
    <source src="..\..\assets\images\publication\blending_physical_video_4.mp4" type="video/mp4">
  Your browser does not support the video tag.
  </video>

<br>
*<b>Physics Based Learning:</b> Observe how the Physics Based Learning model (right) which blends physical priors with neural networks performs significantly better than using just physical models (left). The physics based learning model can precisely predict the trajectory of the tossed object while simple physics provides a solution which significantly deviates from the actual trajectory.*
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
Rethinking physics in the era of deep learning is an increasingly important topic. This topic is special because, in addition to data, one can leverage a vast library of physical prior models (e.g. kinematics, fluid flow, etc) to perform more robust inference. The nascent sub-field of physics-based learning (PBL) studies this problem of blending neural networks with physical priors. While previous PBL algorithms have been applied successfully to specific tasks, it is hard to generalize existing PBL methods to a wide range of physics-based problems. Such generalization would require an architecture that can adapt to variations in the correctness of the physics, or in the quality of training data. No such architecture exists. In this paper, we aim to generalize PBL, by making a first attempt to bring neural architecture search (NAS) to the realm of PBL. We introduce a new method known as physics-based neural architecture search (PhysicsNAS) that is a top-performer across a diverse range of quality in the physical model and the dataset.
<div style="width:100%"></div><br>
![image]({{ site.baseurl }}/assets/images/publications/blending_physical_1.png)
<br>
<b><i>Generalizing PBL across a range of sparsity in training data and correctness in the physical model.</i></b>
<div style="width:100%"></div><br>
![image]({{ site.baseurl }}/assets/images/publications/blending_physical_2.png)
<br>
*Search space of our PhysicsNAS. In the proposed PhysicsNAS, all the nodes are densely connected by mixed operators from predefined candidate operation sets. The hidden nodes can obtain information from the original inputs or from previous hidden nodes within this search setup. The training process is supervised by both ground truth and physical constraints.*
<div style="width:100%"></div><br>
![image]({{ site.baseurl }}/assets/images/publications/blending_physical_3.png "center")
<br>
*We evaluate our method on a simulator of classical tasks. The first task (Left) is predicting the trajectory of a ball being tossed, and the second task (Right) is estimating the velocities of two objects after collision.*
<div style="width:100%"></div><br>
![image]({{ site.baseurl }}/assets/images/publications/blending_physical_4.png)
<br>
*Utilization of physical operations in PhysicsNAS. The selection of physics-inspired operation depends on its accuracy. PhysicsNAS tends to utilize the physical operations when they are more accurate (like the elastic collision model), and prefers a residual connection when they are inaccurate (like the parabola equation).*
<div style="width:100%"></div><br>
![image]({{ site.baseurl }}/assets/images/publications/blending_physical_5.png)
<br>
*Failure case. In rare situations, a single-stream network could be preferred. PhysicsNAS is unable to converge to single-stream architectures due to the edge selection mechanism.*

@section
- Paper ([PDF](https://arxiv.org/pdf/1910.00201.pdf))
- Code ([Link](https://github.com/physicslearning/PhysicsNAS))

@section
@section
@section
Achuta Kadambi <br>
Assistant Professor <br>
Electrical and Computer Engineering Department <br>
achuta@ee.ucla.edu
