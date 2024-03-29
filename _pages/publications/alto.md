---
title: "ALTO: Alternating Latent Topologies for Implicit 3D Reconstruction"
layout: paper_template_alto
sitemap: false
permalink: /alto.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "alto" %}

# {{ publication.title }}

{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<font color="gray" size="5">CVPR 2023, Vancouver</font>

<hr class="center" style="width: 40%; color: grey; height: 0.07px; background-color:grey;"/>

<figure>
  <img src= "/assets/images/publications/alto_figures/anim.gif" alt="Missing" width="100"> 
</figure>
**Rethinking latent topologies for fast and detailed implicit 3D reconstructions.** Recent work (POCO CVPR'22) has used latent encodings for each point to preserve 3D detail. We introduce ALTO, which can alternate between latent topologies like grid latents and point latents to speed up inference and recover more detail, like the 3D reconstruction of a thin lamp-post. 
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
This work introduces alternating latent topologies (ALTO) for high-fidelity reconstruction of implicit 3D surfaces from noisy point clouds. Previous work identifies that the spatial arrangement of latent encodings is important to recover detail. One school of thought is to encode a latent vector for each point (point latents). Another school of thought is to project point latents into a grid (grid latents) which could be a voxel grid or triplane grid. Each school of thought has tradeoffs. Grid latents are coarse and lose high-frequency detail. In contrast, point latents preserve detail. However, point latents are more difficult to decode into a surface, and quality and runtime suffer. In this paper, we propose ALTO to sequentially alternate between geometric representations, before converging to an easy-to-decode latent. We find that this preserves spatial expressiveness and makes decoding lightweight. We validate ALTO on implicit 3D recovery and observe not only a performance improvement over the state-of-the-art, but a  runtime improvement of 3-10 times.

@section 
<figure> 
  <img src= "/assets/images/publications/alto_figures/network_architecture.png" alt="Missing"> 
</figure>
An overview of our method. Given input surface points, we obtain an implicit occupancy field with iterative alternation between features in the forms of points and 2D or 3D grids. Then we decode the occupancy values for query points with a learned attention-based interpolation from neighboring grids.

<figure> 
  <img src= "/assets/images/publications/alto_figures/unet_grid_final.png" alt="Missing"> 
</figure>
An illustration of our ALTO encoder.} (Left) As an example, we show the ALTO block instantiated by alternating between two latent topologies: point and triplanes via an ''in-network'' fashion, i.e. within each level of an hourglass framework U-Net.  'Concatenate' refers to concatenation of the ALTO block output triplane in the downsampling stage and the ALTO block input triplane in the corresponding upsampling stage. (Right) We expand on ALTO block to illustrate the sequential grid-to-point and point-to-grid conversion. There are skip connections for both point and grid features between two consecutive levels in the ALTO U-Net. 

@section
- Paper ([Link](http://arxiv.org/abs/2212.04096)) 
- Code ([Link](https://github.com/wzhen1/ALTO))

@section
<figure> 
  <img src= "/assets/images/publications/alto_figures/shapenet.png" alt="Missing"> 
</figure>
Object-level comparisons on ShapeNet. On the car, ALTO recovers the detail of having both side mirrors.

<figure> 
  <img src= "/assets/images/publications/alto_figures/scannet.png" alt="Missing"> 
</figure>
Cross-dataset evaluation of ALTO and baselines by training on Synthetic Rooms and testing on real-world ScanNet-v2. Note the large conference-room table is missing in ConvONet (purple inset). The ladder (yellow inset) is a high-frequency surface and we believe our method is qualitatively closest.

@section
<div style="background-color: #f2f2f2; padding: 10px; font-family: monospace; font-size: 12px;">
<!-- @article{wang2022alto, <br>
  &nbsp; title={ALTO: Alternating Latent Topologies for Implicit 3D Reconstruction}, <br>
  &nbsp; author={Wang, Zhen and Zhou, Shijie and Park, Jeong Joon and Paschalidou, Despoina and You, Suya and Wetzstein, Gordon and Guibas, Leonidas and Kadambi, Achuta},  <br>
  &nbsp; journal={arXiv preprint arXiv:2212.04096}, <br>
  &nbsp; year={2022} <br>
} -->
@inproceedings{wang2023alto, <br>
  &nbsp; title={Alto: Alternating latent topologies for implicit 3d reconstruction}, <br>
  &nbsp; author={Wang, Zhen and Zhou, Shijie and Park, Jeong Joon and Paschalidou, Despoina and You, Suya and Wetzstein, Gordon and Guibas, Leonidas and Kadambi, Achuta}, <br>
  &nbsp; booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition}, <br>
  &nbsp; pages={259--270}, <br>
  &nbsp; year={2023} <br>
}
</div>
@section

Zhen Wang <br>
Electrical and Computer Engineering Department <br>
zhenwang@ucla.edu <br>
&nbsp;<br>
Shijie Zhou <br>
Electrical and Computer Engineering Department <br>
shijiezhou@ucla.edu <br>
<br>
