---
title: "rPPG synthetic avatars"
layout: paper_template
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /rppg_avatars.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "rPPG synthetic avatars" %}

# {{ publication.title }}

{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<font color="gray" size="5"><a href="https://cvpr2022.thecvf.com/">CVPR 2022, New Orleans</a></font>

<hr class="center" style="width: 70%; color: grey; height: 0.1px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*Our proposed framework has successfully incorporated pulsatile signals into the reference image. The estimated pulse waves from PRN exhibit high correlation to the ground-truth waves, and the heart rates are preserved in the frequency
domain.*
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
Accelerated by telemedicine, advances in Remote Photoplethysmography (rPPG) are beginning to offer a viable path toward non-contact physiological measurement. Unfortunately, the datasets for rPPG are limited as they require videos of the human face paired with ground-truth, synchronized heart rate data from a medical-grade health monitor. Also troubling is that the datasets are not inclusive of diverse populations, i.e., current real rPPG facial video datasets are imbalanced in terms of races or skin tones, leading to accuracy disparities on different demographic groups.  This paper proposes a scalable biophysical learning based method to generate physio-realistic synthetic rPPG videos given any reference image and target rPPG signal and shows that it could further improve the state-of-the-art physiological measurement and reduces the bias among different groups. We also collect a largest rPPG dataset of its kind (UCLA-rPPG) with a diverse presence of subject skin tones, in the hope that this could serve as a benchmark dataset for different skin tones in this area and ensure that advances of the technique can benefit all people for healthcare equity.


@section
- Paper ([Link](https://openaccess.thecvf.com/content/CVPR2022/papers/Wang_Synthetic_Generation_of_Face_Videos_With_Plethysmograph_Physiology_CVPR_2022_paper.pdf))
- Real Dataset (Due to IRB protocol, please fill in [Data Request Form](https://docs.google.com/forms/d/e/1FAIpQLSc6rtDlh9G1ZesZSa6eHqcJguXl9aYvbyaoiRlrtAQaOC6Y8Q/viewform?usp=pp_url) for complete dataset.)\
Sample videos available [here](https://drive.google.com/drive/folders/1n0ssQrAIBPYezFGLmMjpOjfEWwTj34hP?usp=sharing)
- Synthetic Dataset ([Link](https://drive.google.com/file/d/1qUM_MVHBGvhFCb8i2IPpguQBgJex9N_8/view?usp=sharing))
- Code ([Link](https://github.com/UCLA-VMG/rppg_synthetic))

@section
@inproceedings{wang2022synthetic, \
   &nbsp; title={Synthetic Generation of Face Videos with Plethysmograph Physiology}, \
   &nbsp; author={Wang, Zhen and Ba, Yunhao and Chari, Pradyumna and Bozkurt, Oyku Deniz and Brown, Gianna and Patwa, Parth and Vaddi, Niranjan and Jalilian, Laleh and Kadambi, Achuta}, \
   &nbsp; booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition}, \
   &nbsp: pages={20587--20596}, \
   &nbsp; year={2022} \
}

@section
@section
Zhen Wang \
Electrical and Computer Engineering Department \
zhenwang@ucla.edu
