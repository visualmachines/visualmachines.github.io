---
title: "WeatherProof: A Paired-Dataset Approach to Semantic Segmentation in Adverse Weather"
layout: paper_template_alto
sitemap: false
permalink: /weatherproof.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "WeatherProof" %}

# {{ publication.title }}

{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<!--- <font color="gray" size="5">SIGGRAPH Asia 2023, Sydney</font> --->

<!--- <hr class="center" style="width: 40%; color: grey; height: 0.07px; background-color:grey;"/> --->

<figure>
  <img style="width:90%" src= "/assets/images/publications/weatherproof_teaser.png" alt="Missing" width="800"> 
</figure>
**By fine-tuning on the paired adverse and clear images of the WeatherProof dataset, the paired-training losses, and CLIP guidance, we improve InternImage’s performance on adverse weather conditions by up to 18.4%.**
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
The introduction of large, foundational models to computer vision has led to drastically improved performance on the task of semantic segmentation. However, these existing methods exhibit a large performance drop when testing on images degraded by weather conditions such as rain, fog, or snow. We introduce a general paired-training method that can be applied to all current foundational model architectures that leads to improved performance on images in adverse weather conditions. To this end, we create the WeatherProof dataset, the first semantic segmentation dataset with accurate clear and adverse weather image pairs, which not only enables our new training paradigm, but also improves the evaluation of the performance gap between clear and degraded segmentation. We find that training on these paired clear and adverse weather frames which share an underlying scene results in improved performance on adverse weather data. With this knowledge, we propose a training pipeline which accentuates the advantages of paired-data training using consistency losses and language guidance, which leads to performance improvements by up to 18.4% as compared to standard training procedures.
@section 
<div style="width:70%">
<figure> 
  <img style="width:70%" src= "/assets/images/publications/weatherproof_model.png" alt="Missing"> 
</figure>
</div>
<div style="width:80%">
<strong>By using a paired-training method with consistency losses and CLIP injection, foundational models are able to generate features that are more resilient to adverse weather conditions.</strong> During paired data training, a CLIP-Guided Injection module learns a CLIP-informed prior representing the adverse weather effect in the CLIP latent space. Clear and adverse weather images are fed into a shared weight encoder-decoder structure. Intermediate features and output segmentation maps are used in a feature consistency loss and an output consistency loss respectively to ensure an advantageous representation.
</div>
<br>
<br>
<div style="width:70%">
<figure> 
  <img src= "/assets/images/publications/weatherproof_dataset.png" alt="Missing"> 
</figure>
</div>
<div style="width:80%">
<strong>WeatherProof Dataset contains accurate clear and adverse weather image pairs with 10 semantic classes.</strong> In contrast, the ACDC dataset’s paired images have major differences in semantic information and scene structure.
</div>
<br>
<br>
<div style="width:50%">
<figure> 
  <img src= "/assets/images/publications/weatherproof_clip.png" alt="Missing"> 
</figure>
</div>
<div style="width:70%">
<strong>Our CLIP injection layer is able to accurately predict the composition of weather effects in images.</strong> The percentage of weather effect contributions was taken by passing in these images into our CLIP injection layer and extracting the weights.
</div>

@section
- Paper ([Link](https://arxiv.org/abs/2312.09534))
- Dataset ([Link](https://drive.google.com/file/d/1Nr6BmBV57fPDYP7yMHJ5tGNU_4txVfQD/view?usp=sharing))
- Code (Coming Soon)

@section
<br>
<figure>
  <img style="width:75%" src="/assets/images/publications/weatherproof_table.png" alt="Missing">
</figure>
<div style="width:80%">
<strong>Our proposed paired training method outperforms standard fine-tuning on adverse images only for both InternImage and ConvNeXt.</strong> Including language guidance and consistency losses further improve our results.
</div>
<br>
<br>
<hl>

@section
<div style="background-color: #f2f2f2; padding: 10px; font-family: monospace; font-size: 12px;">
@article{gella2023weatherproof, <br>
  &nbsp; title={WeatherProof: A Paired-Dataset Approach to Semantic Segmentation in Adverse Weather}, <br>
  &nbsp; author={Gella, Blake and Zhang, Howard and Upadhyay, Rishi and Chang, Tiffany and Waliman, Matthew and Ba, Yunhao and Wong, Alex and Kadambi, Achuta}, <br>
  &nbsp; journal={arXiv preprint arXiv:2312.09534}, <br>
  &nbsp; year={2023} <br>
}
</div>
@section

Howard Zhang <br>
Electrical and Computer Engineering Department <br>
hwdz15508@ucla.edu <br>
<br>
