---
title: "Enhancing Diffusion Models with 3D Perspective Geometry Constraints"
layout: paper_template_alto
sitemap: false
permalink: /diffusionperspective.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "Diffusion Perspective" %}

# {{ publication.title }}

{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<font color="gray" size="5">SIGGRAPH Asia 2023, Sydney</font>

<hr class="center" style="width: 40%; color: grey; height: 0.07px; background-color:grey;"/>

<figure>
  <img style="width:90%" src= "/assets/images/publications/diffusion_persp_figures/latest_teaser_out-1.png" alt="Missing" width="800"> 
</figure>
**Images from our model preserve straight lines and perspective.** Traditional diffusion models include no constraints on physical accuracy and rely entirely on large datasets to generate realistic images. Our proposed geometric constraint explicitly encodes perspective constraints and results in improved image generation and downstream task performance. 
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
While perspective is a well-studied topic in art, it is generally taken for granted in images. However, for the recent wave of high-quality image synthesis methods such as latent diffusion models, perspective accuracy is not an explicit requirement. Since these methods are capable of outputting a wide gamut of possible images, it is difficult for these synthesized images to adhere to the principles of linear perspective. We introduce a novel geometric constraint in the training process of generative models to enforce perspective accuracy. We show that outputs of models trained with this constraint both appear more realistic and improve performance of downstream models trained on generated images. Subjective human trials show that images generated with latent diffusion models trained with our constraint are preferred over images from the Stable Diffusion V2 model 70% of the time. SOTA monocular depth estimation models such as DPT and PixelFormer, fine-tuned on our images, outperform the original models trained on real images by up to 7.03% in RMSE and 19.3% in SqRel on the KITTI test set for zero-shot transfer.

@section 
<div style="width:70%">
<figure> 
  <img src= "/assets/images/publications/diffusion_persp_figures/loss_figure-1-1.png" alt="Missing"> 
</figure>
</div>
<div style="width:80%">
An overview of our proposed loss function. Given an input image with vanishing points, we sweep lines (shown in red and green) across the image and calculate the sum of image gradients across this line. The full distribution of summed gradients is then compared to the original image.
</div>

@section
- [Paper](https://arxiv.org/abs/2312.00944)
- [Code](https://github.com/rishiu/perspective-enhanced-diffusion) 

@section

We ask users around the world to rank sets of images in terms of photo-realism:
<br>
<figure>
  <img style="width:75%" src="/assets/images/publications/diffusion_persp_figures/user_study.png" alt="Missing">
</figure>

Images generated by the baseline model (StableDiffusion v2) and our enhanced model. Images from our model are more consistent and have straighter lines and more accurate perspective.
<div style="width:80%">
    <figure> 
      <img src="/assets/images/publications/diffusion_persp_figures/img_qual_fig.png" alt="Missing"> 
    </figure>
<br>
<br>
<hl>

To evaluate the quality of our images as synthetic data, we generate synthetic datasets using our model and the baseline model and fine-tune SOTA depth estimation models on them: Depth estimation models trained on our images capture more high-frequency detail and consistently achieve lower RMSE.
<figure> 
  <img src= "/assets/images/publications/diffusion_persp_figures/depth_qual_fig.png" alt="Missing"> 
</figure>
</div>

@section
<div style="background-color: #f2f2f2; padding: 10px; font-family: monospace; font-size: 12px;">
@article{upadhyay2023enhancing, <br>
  &nbsp; author = {Upadhyay, Rishi and Zhang, Howard and Ba, Yunhao and Yang, Ethan and Gella, Blake and Jiang, Sicheng and Wong, Alex and Kadambi, Achuta}, <br>
  &nbsp; title = {Enhancing Diffusion Models with 3D Perspective Geometry Constraints}, <br>
  &nbsp; year = {2023}, <br>
  &nbsp; issue_date = {December 2023}, <br>
  &nbsp; volume = {42}, <br>
  &nbsp; number = {6}, <br>
  &nbsp; doi = {10.1145/3618389}, <br>
  &nbsp; journal = {ACM Trans. Graph.}, <br>
  &nbsp; month = {dec}, <br>
  &nbsp; articleno = {237}, <br>
  &nbsp; numpages = {15}, <br>
}
</div>
@section

Rishi Upadhyay <br>
Computer Science Department <br>
rishiu@ucla.edu <br>
<br>
