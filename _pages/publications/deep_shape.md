---
title: "Deep Shape from Polarization"
layout: paper_template
sitemap: false
permalink: /deepsfp.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "DSFP" %}

# {{ publication.title }}
{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<hr class="center" style="width: 80%; color: grey; height: 0.2px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*Using polarized images of an object, we calculate a rough estimate of surface normals using Fresnel's equations. We then use deep learning to combine the raw images and the physics-based estimates and reconstruct accurate 3D shape.*

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
This paper makes a first attempt to re-examine the shape from polarization (SfP) problem using physics-based deep learning. The previous state-of-the-art for SfP have been purely physics-based. We see value in these principled models, and blend these physical models as priors into a neural network architecture. This proposed approach achieves results that exceed the previous state-of-the-art on a challenging dataset we introduce. This dataset consists of polarization images taken over a range of object textures, paints, and lighting conditions. We report that our proposed method achieves the lowest test error on each tested condition in our dataset, showing the value of blending data-driven and physics-driven approaches alike.


@section
- Paper ([PDF](https://link.springer.com/chapter/10.1007%2F978-3-030-58586-0_33?fbclid=IwAR3B7VM-sXnEFGMGQRGu8G_CC1hBGXmPiael9fnnGLzkTGmET8h8q-XGKzU))
- Supplement ([PDF]({{ site.baseurl }}/assets/deepsfp_eccv_supp.pdf))
- Data Set with Train/Test List ([Link](https://drive.google.com/file/d/1-CYRwU9Uwry7XgcEWhwX2P8nIJtOKKZZ/view?usp=sharing))
- Official Code Repository ([Link](https://github.com/UCLA-VMG/DeepSfP))

@section
<div style="background-color: #f2f2f2; padding: 10px; font-family: monospace; font-size: 12px;">
@inproceedings{ba2020deep, <br>
  title={Deep shape from polarization}, <br>
  author={Ba, Yunhao and Gilbert, Alex and Wang, Franklin and Yang, Jinfa and Chen, Rui and Wang, Yiqin and Yan, Lei and Shi, Boxin and Kadambi, Achuta}, <br>
  booktitle={European Conference on Computer Vision}, <br>
  pages={554--571}, <br>
  year={2020}, <br>
  organization={Springer} <br>
}
</div>

@section
- Accepted to ECCV 2020! ([Link](https://eccv2020.eu/))
- Southern California Machine Learning Symposium ([Link](https://sites.google.com/view/socalml2019))

@section
Yunhao Ba <br>
Electrical and Computer Engineering Department <br>
yhba@ucla.edu

@section

**What is Shape from Polarization?** \
Shape from Polarization (SfP) tries to reconstruct an object's 3D shape (surface normals and/or depth) from polarization images. 
<br>

**How does a polarized 2D camera obtain 3D geometry?**
For about two centuries, the Fresnel equations have linked surface normals with material and polarimetric properties. However, such equations alone cannot solve for full 3D geometry. We use a physics-based deep learning method to obtain state-of-the-art performance compared to previous purely physics-based methods. 

**How does Shape from Polarization compare to other 3D reconstruction methods?**
Shape from Polarization is just one of a number of techniques for reconstructing 3D shape from 2D images, such as photometric stereo, multi-view stereo, and Structure from Motion. However, SfP is unique in it's minimal requirement for known setup, strong priors, or active lighting. Our deep SfP technique can reconstruct surface normals in a single shot with a standard polarization camera, and we show that this holds for various unkown lighting conditions. 

**What is in the SfP dataset?**
The dataset consists of 338 items: 27 objects, in 4 orientations, and under 3 different lighting conditions (indoor lighting, sunlight, and overcast). Each item is stored as a matlab file with 4 polarization images (0°, 45°, 90°, and 135°), an object foreground mask, the ground truth surface normals, and the physical priors calculated from Fresnel's equation. We have also published an additional set of items which were not included in the paper. This set includes 9 objects, under different indoor lighting conditions, with 5 different lighting directions each. 

**What are some consumer applications of this work?**
Deep SfP could find use in any application requiring 3D sensing— such as virtual reality, autonomous navigation, and industrial inspection. Requiring only sigle-shot, passive capture it offers various advantages over current 3D reconstruction techniques.

@section
![image]({{ site.baseurl }}/assets/images/publications/DSFP_1.png)
<br>
*Figure 1: Inherent ambiguities in shape from polarization*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/DSFP_2.png)
<br>
*Figure 3: Proposed dataset.*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/DSFP_3.png)
<br>
*Figure 5: Our deep learning method learns from polarization cues, not just shading cues.*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/DSFP_4.jpg)
<br>
*Figure 7: Comprehensive Results.*
