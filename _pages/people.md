---
title: "People"
layout: people_twoColumns
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /people/
---
<img src="/assets/images/people_achuta.png" alt="Headshot" class="column-img center-img" style="padding-left: 90px;">

@column
<div class="pad-center">
     <div class="heading-home">Achuta Kadambi</div>
     <div class="sub-heading">Leader, Visual Machines Group</div>
     <div class="body-people">Assistant Professor, UCLA<br />Electrical and Computer Engineering<br/>PhD, Massachusetts Institute of Technology</div> <br />
     <div class="body-people"><a href="kadambi_cv.pdf">CV/Resume</a></div>
</div>

@row
<div class="heading-home center padded">Postdoctoral Researchers (<a href="joinus.htm">Join Us</a>)</div>
<div class="heading-home center padded-students">Students</div>

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
@row
{% endif %}

{% if even_odd != 0 %}
@column
{% endif %}
  <img src="{{ site.url }}/assets/images/{{ member.photo }}" alt="Insert photo" class="center-img size-image" />
  <div class="heading-home">{{ member.name }}</div>
  <div class="sub-heading">{{ member.dept }}</div>
  <div class="body-people">{{ member.education }}</div>

{% if even_odd != 3 %}
   @column
{% endif %}

{% assign number_printed = number_printed | plus: 1 %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd != 0 %}
@column
{% endif %} 