---
title: "Publications"
layout: publications
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /publications/
---

<!--(For a full list see [below](#full-list) or go to [Google Scholar](https://scholar.google.ch/citations?user=TqxYWZsAAAAJ), [ResearcherID](https://www.researcherid.com/rid/D-7763-2012))-->
<br>

{% assign number_printed = 0 %}
{% for publi in site.data.publications %}

{% if publi.highlight == 1 %}
@pub
<br>
<img src="{{ site.url }}{{ site.baseurl }}/assets/images/{{ publi.image }}" class="img-responsive" width="100%" style="float: left" />
<!--![Insert Photo](assets/images/sfp.png)
{:class="img-responsive" style="border: 5px red solid;"}-->

@desc
<h3><a href="{{ publi.link.url }}" rel="bookmark"> {{ publi.title }}</a></h3>
{{ publi.description }}
<p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
<p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
{{ publi.news2 }}

{% assign number_printed = number_printed | plus: 1 %}

{% endif %}
{% endfor %}
