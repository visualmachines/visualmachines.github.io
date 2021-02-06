---
title: "People"
layout: people_twoColumns
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /people/
---

<style>
hr { 
  display: block;
  margin-top: -0.4em; 
  margin-bottom: 0em;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
  border-color: white;
  border-width: 0em;
  height: 1em;
  background-color: rgb(0,123,255);
} 
.hide {
  display: none;
}

.hover_div:hover + .hide {
  display: inline-block;
  color: rgb(0,123,255);
  margin-left: 0.5em;
}
</style>

### <a style="color: white; background: rgb(0,123,255);">&nbsp;PI&nbsp;</a>

<hr>

@row
<img src="/assets/images/people_achuta.png" alt="Headshot" class="column-img">
@column
<div class="pad-center">
     <div class="heading-home">Achuta Kadambi</div>
     <div class="sub-heading">Leader, Visual Machines Group</div>
     <div class="body-people">Assistant Professor, UCLA<br />Electrical and Computer Engineering<br/>PhD, Massachusetts Institute of Technology</div> <br/>
     <div class="body-people"><a style="color: purple;" href="/assets/kadambi_cv.pdf">CV/Resume</a></div>
</div>


@row
### <a style="color: white; background: rgb(0,123,255);">&nbsp;Grad/Postdoc&nbsp;</a>

<hr>

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
  <div class="heading-home"><a style="color: rgb(0,123,255);">{{ member.name }}</a></div>
  <div class="sub-heading">{{ member.education }}</div>
  <div class="hover_div" style="display: inline;">
    <a href= "mailto:{{ member.email }}">
      <img src="{{ site.url }}/assets/images/email_icon.svg" alt="Insert photo" class="hover" />
    </a>
  </div>
  <div class="hide">Send Email</div>

  

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
### <a style="color: white; background: rgb(0,123,255);">&nbsp;Undergrad&nbsp;</a>

<hr>

{% assign number_printed = 0 %}
{% for member in site.data.undergrad_team_members %}
{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 0 %}
@row
{% endif %}
{% if even_odd != 0 %}
@column
{% endif %}
  <img src="{{ site.url }}/assets/images/{{ member.photo }}" alt="Insert photo" class="center-img size-image" />
  <div class="heading-home">{{ member.name }}</div>
  <div class="sub-heading">{{ member.education }}</div>
  <div class="hover_div" style="display: inline;">
    <a href= "mailto:{{ member.email }}">
      <img src="{{ site.url }}/assets/images/email_icon.svg" alt="Insert photo" class="hover" />
    </a>
  </div>
  <div class="hide">Send Email</div>
{% assign number_printed = number_printed | plus: 1 %}
{% endfor %}
{% assign even_odd_dummy = number_printed | modulo: 4 %}
{% if even_odd_dummy != 0 %}
{% assign number_print_left = 4 | minus:even_odd_dummy %}
{% for num in (1..number_print_left) %}
@column
{% endfor %} 
{% endif %}
