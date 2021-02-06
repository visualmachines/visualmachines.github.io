---
title: "People"
layout: people_twoColumns
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /people/
---
<style>
div.polaroid {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 3px 3px 10px;
  text-align: center;
  padding-bottom: 0.5em;
}



</style>

<img src="/assets/images/group_photo.jpg" style="width:100%">

## <b>PI</b>

@row
<div class="polaroid">
  <img src="/assets/images/prof_achuta.png" alt="Headshot" class="column-img" style="width:100%; padding-bottom: 0.5em;" />
  <div class="sub-heading"><b>&nbsp;&nbsp;Prof. Achuta Kadambi</b><br>&nbsp;&nbsp;Leader, Visual Machines Group</div>
</div>
@column
@column
@column


@row
## <b>Grad/Postdoc</b>

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}
{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 0 %}
@row
{% endif %}
{% if even_odd != 0 %}
@column
{% endif %}
<div class="polaroid">
  <img src="{{ site.url }}/assets/images/{{ member.photo }}" alt="Insert photo" style="width:100%; padding-bottom: 0.5em;" />
  <div class="sub-heading"><b>&nbsp;&nbsp;{{ member.name }}</b><br>&nbsp;&nbsp;{{ member.education }}</div>
</div>
{% assign number_printed = number_printed | plus: 1 %}
{% endfor %}

{% assign even_odd_dummy = number_printed | modulo: 4 %}
{% if even_odd_dummy != 0 %}
{% assign number_print_left = 4 | minus:even_odd_dummy %}
{% for num in (1..number_print_left) %}
@column
{% endfor %} 
{% endif %}



@row
## <b>Undergrad</b>

{% assign number_printed = 0 %}
{% for member in site.data.undergrad_team_members %}
{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 0 %}
@row
{% endif %}
{% if even_odd != 0 %}
@column
{% endif %}
<div class="polaroid">
  <img src="{{ site.url }}/assets/images/{{ member.photo }}" alt="Insert photo" style="width:100%; padding-bottom: 0.5em;"/>
  <div class="sub-heading"><b>&nbsp;&nbsp;{{ member.name }}</b><br>&nbsp;&nbsp;{{ member.education }}</div>
</div>
{% assign number_printed = number_printed | plus: 1 %}
{% endfor %}
{% assign even_odd_dummy = number_printed | modulo: 4 %}
{% if even_odd_dummy != 0 %}
{% assign number_print_left = 4 | minus:even_odd_dummy %}
{% for num in (1..number_print_left) %}
@column
{% endfor %} 
{% endif %}
