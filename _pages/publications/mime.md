---
title: "MIME: Minority Inclusion for Majority Group Enhancement of AI Performance"
layout: paper_template_mime
sitemap: false
permalink: /mime.htm/
---

{% for publication in site.data.publications %}
{% if publication.name == "mime" %}

# {{ publication.title }}

{% for author in publication.authors %} [{{ author.name }}]({{author.link}})<sup>{{ author.associations }}</sup>
{% endfor %}
{% assign count = 1 %}
{% for association in publication.associations %} [{{ association.name }}]({{association.link}})<sup>{{count}}</sup> {% assign count = count | plus: 1 %}
{% endfor %}

<font color="gray" size="5"><a href="https://eccv2022.ecva.net">ECCV 2022, Tel Aviv, Israel</a></font>

<hr class="center" style="width: 70%; color: grey; height: 0.1px; background-color:grey;"/>

![image]({{ site.baseurl }}/assets/images/publications/{{ publication.image }})
*We present a theoretical existence proof of the MIME effect which is found to be consistent with experimental results on six different datasets.*
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
Several papers have rightly included minority groups in artificial intelligence (AI) training data to improve test inference for minority groups and/or society-at-large. A society-at-large consists of both minority and majority stakeholders. An oft-held misconception is that minority inclusion does not increase performance for majority groups alone. In this paper, we make the surprising finding that including minority samples can improve test error for the majority group. In other words, minority group inclusion leads to majority group enhancements (MIME) in performance. A theoretical existence proof of the MIME effect is presented and found to be consistent with experimental results on six different datasets.


@section
- Paper ([Link](https://link.springer.com/chapter/10.1007/978-3-031-19778-9_19)) <!-- ([Link](https://drive.google.com/file/d/1c0h7UNYsZdO_QPr3feylZ0n6A5mAly6p/view?usp=sharing)) -->
- Low-Res Paper ([Link](https://drive.google.com/file/d/1GS9Q8wALjN1Z6sKtpDUtp2lp3hDKuV-L/view?usp=sharing))
- Code and Data ([Link](https://github.com/UCLA-VMG/MIME))

@section
<figure> 
  <img src= "/assets/images/publications/mime/results.png" alt="Missing"> 
</figure>
**When domain gap is small, the MIME effect holds.** In the presence of large domain gap, MIME effect is absent. On five datasets, majority performance is maximized with some inclusion of minorities. All experiments are run for several trials and realizations. On dataset six, the gender classification task is rescoped to occur in a high domain gap setting. The majority group is chickens and the minority group is humans. Here, the MIME effect is absent. These observations validate our proposed theory.

@section
<div style="background-color: #f2f2f2; padding: 10px; font-family: monospace; font-size: 12px;">
@inproceedings{chari2022mime, <br>
   &nbsp; title={MIME: Minority Inclusion for Majority Group Enhancement of AI Performance}, <br>
   &nbsp; author={Chari, Pradyumna and Ba, Yunhao and Athreya, Shreeram and Kadambi, Achuta}, <br>
   &nbsp; booktitle={European Conference on Computer Vision}, <br>
   &nbsp; pages={326--343}, <br>
   &nbsp; year={2022}, <br>
   &nbsp; organization={Springer}
}
</div>

@section
@section

Pradyumna Chari \
Electrical and Computer Engineering Department \
pradyumnac@ucla.edu
