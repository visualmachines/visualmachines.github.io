---
title: "WeatherProof: Leveraging Language Guidance for Semantic Segmentation in Adverse Weather"
layout: paper_template_alto
sitemap: false
permalink: /weatherproof_clip.htm/
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
  <img style="width:90%" src= "/assets/images/publications/weatherproof_clip/teaser.png" alt="Missing" width="800"> 
</figure>
**By leveraging CLIP-based language guidance, our models perform up to 10.2% better on our WeatherProof test set, and 8.4% better on the widely used ACDC dataset as compared to standard fine-tuning procedures.**
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
We propose a method to infer semantic segmentation maps from images captured under adverse weather conditions. We begin by examining existing models on images degraded by weather conditions such as rain, fog, or snow, and found that they exhibit a large performance drop as compared to those captured under clear weather. To control for changes in scene structures, we propose WeatherProof, the first semantic segmentation dataset with accurate clear and adverse weather image pairs that share an underlying scene. Through this dataset, we analyze the error modes in existing models and found that they were sensitive to the highly complex combination of different weather effects induced on the image during capture. To improve robustness, we propose a way to use language as guidance by identifying contributions of adverse weather conditions and injecting that as “side information”. Models trained using our language guidance exhibit performance gains by up to 10.2% in mIoU on WeatherProof, up to 8.44% in mIoU on the widely used ACDC dataset compared to standard training techniques, and up to 6.21% in mIoU on the ACDC dataset as compared to previous SOTA methods.
@section 
<div style="width:70%">
<figure> 
  <img style="width:70%" src= "/assets/images/publications/weatherproof_clip/model.png" alt="Missing"> 
</figure>
</div>
<div style="width:80%">
By using CLIP-based language guidance, models are able to generate features that are more resilient to adverse weather conditions. During training, a CLIP-Guided Injection module learns a CLIP-informed prior representing the adverse weather effect in the CLIP latent space. This is concatenated with the image latent before being fed in through cross-attention layers into the model.</div>
<br>
<br>
<div style="width:70%">
<figure> 
  <img src= "/assets/images/publications/weatherproof_clip/dataset.png" alt="Missing"> 
</figure>
</div>
<div style="width:80%">
WeatherProof dataset contains accurate clear and adverse weather image pairs with 10 semantic classes. The dataset includes rain, snow, and fog weather effects. The labels below the image are for the WeatherProof dataset. In contrast, the ACDC [32] and IDD-AW [33] datasets’ paired images either have major differences in semantic information and scene structure or are not in RGB space.</div>
<br>
<br>
<div style="width:50%">
<figure> 
  <img src= "/assets/images/publications/weatherproof_clip/weathercombos.png" alt="Missing"> 
</figure>
</div>
<div style="width:70%">
The train and test sets of WeatherProof include paired sets of varied combinations of weather effects. Top: Various types of weather effects and their compositions from the training set. Bottom: Weather effects and combinations in our test set. Change in mIoU between clear and degraded images of the InternImage base- line is shown in yellow. Note the significant impact on mIoU results of multiple combined weather effects.</div>

@section
- Paper ([Link](https://arxiv.org/abs/2312.09534))
- Dataset ([Link](https://drive.google.com/file/d/1Nr6BmBV57fPDYP7yMHJ5tGNU_4txVfQD/view?usp=sharing))
- Code (Coming Soon)

@section
<br>
<figure>
  <img style="width:75%" src="/assets/images/publications/weatherproof_clip/wproof_table.png" alt="Missing">
</figure>
<div style="width:80%">
On WeatherProof dataset, our proposed training method outperforms standard fine-tuning baselines for InternImage [39], ConvNeXt [22], and SWIN [20, 21] when evaluating on adverse weather images.
</div>
<br>
<br>
<br>
<figure>
  <img style="width:75%" src="/assets/images/publications/weatherproof_clip/wproof_acdc.png" alt="Missing">
</figure>
<div style="width:80%">
Our language guided model achieves SOTA results on the ACDC dataset. The Average mIoU is calculated by averaging between the three categories.</div>
<br>
<br>
<br>
<figure>
  <img style="width:75%" src="/assets/images/publications/weatherproof_clip/wproof_a2i2.png" alt="Missing">
</figure>
<div style="width:80%">
InternImage [39] performs better on the A2I2-Haze dataset when leveraging language guidance. The use of CLIP-based guidance also helps models generalize beyond standard natural weather phenomenon to man-made smoke effects.</div>
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
