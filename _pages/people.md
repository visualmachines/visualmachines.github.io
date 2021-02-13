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

div.polaroidpi {
  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.15) 3px 3px 10px;
  text-align: left;
}

div.imgcolorgrey {
    /* filter: url(filters.svg#grayscale); Firefox 3.5+ */
      filter: gray; /* IE5+ */
      -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
      -webkit-transition: all .5s ease-in-out;  
    }

div.imgcolorgrey:hover {
    filter: none;
      -webkit-filter: grayscale(0);
      -webkit-transform: scale(1.01);
    }

div.aligned { 
            display: flex; 
            align-items: center; 
        } 
           
span { 
      padding: 5em; 
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

div.gradient { 
height: auto; 
background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(0,0,0,0) 30%), url("../assets/images/people/group.png") no-repeat center;
background-size: cover;  
}

</style>

<div class="full-width">
  <img src= "/assets/images/people/group.jpg" alt="Headshot"> 
</div>
@row

## <b>PI</b>

@row
<div class="aligned">
  <div class="polaroidpi"> 
    <div class="imgcolorgrey"> 
      <img src= "/assets/images/people/achuta_kadambi.png" alt="Headshot"> 
    </div>
  </div>
  <span>
    <div class="heading-home">Achuta Kadambi</div>
    <div class="sub-heading">Leader, Visual Machines Group</div>
    <div class="body-people">Assistant Professor, UCLA<br />Electrical and Computer Engineering<br/>PhD, Massachusetts Institute of Technology</div>
    <div class="body-people"><a style="color: purple;" href="/assets/kadambi_cv.pdf">CV/Resume</a></div>
  </span> 
</div> 

@row
## <b>Grad/Postdoc</b>

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
  <div class="imgcolorgrey">
    <img src="{{ site.url }}/assets/images/people/{{ member.photo }}" alt="Insert photo" style="width:100%; height:100%; padding-bottom: 0.5em;"/>
  </div>

  <div class="sub-heading">
    <a style="color: black">
      <b>&nbsp;&nbsp;{{ member.name }}</b>
    </a>
    <br>
    &nbsp;
    <a style="color:grey" href="mailto:{{ member.email }}">
      Send Email
    </a>
    <br>
    {% if member.profile_link %}
      &nbsp;
      <a style="color: grey;" href="{{ member.profile_link }}">
        Profile Link
      </a>
    {% endif %}
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
  <div class="imgcolorgrey">
    <a href="{{ member.profile_link }}">
      <img src="{{ site.url }}/assets/images/people/{{ member.photo }}" alt="Insert photo" style="width:100%; height:100%; padding-bottom: 0.5em;"/>
    </a>
  </div>

  <div class="sub-heading">
    &nbsp;
    <a style="color: black" href="{{ member.profile_link }}">
      <b>{{ member.name }}</b>
    </a>
    <br>
    &nbsp;
    <a style="color: grey" href="mailto:{{ member.email }}">
      {{ member.email }}
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

