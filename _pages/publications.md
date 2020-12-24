---
title: "Publications"
layout: twoColumns
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /publications/
---

### Publications

<!--(For a full list see [below](#full-list) or go to [Google Scholar](https://scholar.google.ch/citations?user=TqxYWZsAAAAJ), [ResearcherID](https://www.researcherid.com/rid/D-7763-2012))--> <br>

{% assign number_printed = 0 %}
{% for publi in site.data.publications %}

{% if publi.highlight == 1 %}

@row
<img src="{{ site.url }}{{ site.baseurl }}/img/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />

@column
#### {{ publi.title }}
{{ publi.description }}
<p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
<p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
{{ publi.news2 }}

{% assign number_printed = number_printed | plus: 1 %}


{% endif %}
{% endfor %}
