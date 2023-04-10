---
title: "Polarized Non-Line-of-Sight Imaging"
layout: paper_template
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /pnlos.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "polarized_nlos" %}

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
*Figure 1: Results for reflective objects. Top-left: the setting of the experiment. The scene is a reflective object (not self- luminous). 1st row: The photograph of target objects. 2nd row: The recovered images by the baseline method [39]. Bottom row: The recovered images by our method. High frequency details are recovered. Clear detail of resolution charts, sharp edge of apple, and the detailed shape of bears are clearly visualized. PSNR values are calculated with homography-transformed photograph for reference.*

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
This paper presents a method of passive non-line-of-sight (NLOS) imaging using polarization cues. A key observation is that the oblique light has a different polarimetric signal. It turns out this effect is due to the polarization axis rotation, a phenomena which can be used to better condition the light transport matrix for non-line-of-sight imaging. Our analysis and results show that the use of a polarization for NLOS is both a standalone technique, as well as an enhancement technique to boost the results of other forms of passive NLOS imaging. We make a surprising finding that, despite 50% light attenuation from polarization optics, the gains from polarized NLOS are overall superior to unpolarized NLOS.


@section
- Paper ([CVPR 2020](https://openaccess.thecvf.com/content_CVPR_2020/papers/Tanaka_Polarized_Non-Line-of-Sight_Imaging_CVPR_2020_paper.pdf))

@section
<div style="background-color: #f2f2f2; padding: 10px; font-family: monospace; font-size: 12px;">
@inproceedings{CVPR2020_Tanaka, <br>
  &nbsp; author = "Kenichiro Tanaka and Yasuhiro Mukaigawa and Achuta Kadambi, <br>
  &nbsp; title = "Polarized Non-Line-of-Sight Imaging", <br>
  &nbsp; booktitle = "Conference on Computer Vision and Pattern Recognition (CVPR)", <br>
  &nbsp; year = "2020" <br>
}
</div>
@section
@section
Achuta Kadambi \
Assistant Professor \
Electrical and Computer Engineering Department \
achuta@ee.ucla.edu

@section
**What is the effective angle of the polarizer?**
It is an angle-dependent effect of the polarizer. Light leakage occurs when the light ray is oblique to the polarizer. Figure 2 below in media and in the paper shows pictures of the same scene from top and oblique views. While the LCD monitor is invisible from top view (a), it is slightly visible from certain oblique views depending on the zenith and azimuth angles (b). (c) The original angle of polarizer from top view. (d) The effective angle from oblique view. The polarizer axis is slightly declined. (e) Light leakage pattern of crossed polarizers from oblique view. This effect is angle dependent, therefore it can be used for analyzing NLOS observations.

**Is the reflected light polarized?** \
Yes, all reflections are partially polarized. Especially, when the camera is at the special angle (so called Brewster angle), the reflected light is perfectly linear polarized.
Is the the scene polarized?
No, the scene is not polarized. Although the scene is unpolarized, the reflected light off the wall is pertially polarized.

**Is this superior than using specular wall?** \
Our method always improves the performance for all reflection parameters of the wall. You can compbine our polarization technique to other techniques including putting a partial occluder and using specular wall material.

**Isn't the observation dark?** \
Despite the low light efficiency due to light cut off at the polarizer, the polarization cues can improve the conditioning. This is a suprising finding.

@section
![image]({{ site.baseurl }}/assets/images/publications/pnlos_1.png)
<br>
*Figure 2: Polarizer from oblique view. While the LCD monitor is invisible from top view (a), it is slightly visible from certain oblique views depending on the zenith and azimuth angles (b). (c) The original angle of polarizer from top view. (d) The effective angle from oblique view. The polarizer axis is slightly declined. (e) Light leakage pattern of crossed polarizers from oblique view. These polarizers’ original angles are 45◦ and −45◦, respectively.*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/pnlos_2.png)
<br>
*Figure 3: Comparison to rotating the polarizer. The upper row is the captured images of the same exposure time, and the lower images are normalized at each maximum value. The dark band, where the light is completely blocked by polarizer, is a key observation and only appears around 90 degrees.*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/pnlos_3.png)
<br>
*Figure 4: Camera position and reflection plane. (a) Using a single camera position, only one direction is encoded in the image. The intensity variance of horizontal direction is not so improved. (b) Using multiple camera positions, the scene can be encoded by multiple directions.*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/pnlos_4.png)
<br>
*Figure 5: Polarized NLOS results without occluder. A projector is used for numerical evaluation and to make the scene unpolarized. The scene is recovered with and without the polarizer in front of the camera. Using polarization, the recovered images are improved. Improvement is confirmed by comparing condition number and three image measures.*
<br><br>
![image]({{ site.baseurl }}/assets/images/publications/pnlos_5.png)
<br>
*Figure 6: Polarized NLOS exceeds the quality of conventional NLOS with image processing. The results of polarized NLOS with partial occluders. The result of the baseline method [39], TV denoised [7], image enhancement by neural network [1], and the result of our method are compared.*
