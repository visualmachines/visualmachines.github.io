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

div.aligned { 
            align-items: center; 
        } 
        
div.full-width {
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  position: relative;
  width: 100vw;
}

div.overflow-information{
    color: grey; 
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%; //change based on when you want the dots to appear
}

</style>

<div class="full-width">
  <img src= "/assets/images/people/group.jpg" alt="Headshot"> 
</div>
@row

## <b>PI</b>

@row
<img src= "/assets/images/people/achuta_kadambi.png" alt="Headshot"> 
@column
<div class="aligned">
  <div class="heading-home">Achuta Kadambi</div>
  <div class="sub-heading">Leader, Visual Machines Group</div>
  <div class="body-people">Assistant Professor, UCLA<br />Electrical Engineering and Computer Science<br/>PhD, Massachusetts Institute of Technology</div>
  <div class="body-people"><a style="color: purple;" href="/assets/Kadambi CV (13).pdf">CV/Resume</a></div>
</div> 

@row
## <b>Graduate / Post doc</b>

{% assign number_printed = 0 %}
{% for member in site.data.grad_team_members %}
{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 0 %}
@row
{% endif %}
{% if even_odd != 0 %}
@column
{% endif %}
<div class="polaroid">
  <a href="{{ member.profile_link }}">
    <img src="{{ site.url }}/assets/images/people/{{ member.photo }}" alt="Insert photo" style="width:100%; height:100%; padding-bottom: 0.5em;"/>
  </a>

  <div class="sub-heading">
    &nbsp;
    <a style="color: black" href="{{ member.profile_link }}">
      <b>{{ member.name }}</b>
    </a>
    <br>
    &nbsp;
    <a style="color:grey">
      <div class="overflow-information">
        <a style="color:grey" href="mailto:{{ member.email }}">
        {{ member.email }}
        </a>
      </div>
    </a>
    
  </div>
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
## <b>Undergraduate</b>

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
  <a href="{{ member.profile_link }}">
    <img src="{{ site.url }}/assets/images/people/{{ member.photo }}" alt="Insert photo" style="width:100%; height:100%; padding-bottom: 0.5em;"/>
  </a>

  <div class="sub-heading">
    &nbsp;
    <a style="color: black" href="{{ member.profile_link }}">
      <b>{{ member.name }}</b>
    </a>
    <br>
    &nbsp;
    <a style="color:grey">
      <div class="overflow-information">
        <a style="color:grey" href="mailto:{{ member.email }}">
        {{ member.email }}
        </a>
      </div>
    </a>
    
  </div>
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
