---
title: "People"
layout: people_twoColumns
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
  <div class="body-people">Associate Professor, UCLA<br />Electrical Engineering and Computer Science<br/>PhD, Massachusetts Institute of Technology</div>
  <div class="body-people"><a style="color: purple;" href="/assets/kadambi_cv.pdf">CV/Resume</a></div>
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



@row
## <b>Alumni</b>

@row
<b>Visiting Scientists</b>
<br>
<b><a href = "https://jp.linkedin.com/in/teppei-kurita-457409198">Teppei Kurita</a></b>, Visiting Scientist 2021 (now at Sony, Japan)<br />
<b><a href = "https://k-tanaka.me/">Kenichiro Tanaka</a></b>, Visiting Professor 2020 (now at Ritsumeikan University, Japan)<br />

@row
<b>PhD</b>
<br>
<b><a href = "https://yhba-ucla.github.io/">Yunhao Ba</a></b>, PhD 2018 (now Research Scientist at SONY AI Los Angeles)<br />

@row
<b>MS</b>
<br>
<b> <a href = "https://www.linkedin.com/in/blake-gella-04a6401ba">Blake Gella</a></b>, MS 2024<br />
<b> <a href = "https://www.linkedin.com/in/sairisheek">Sairisheek Muttukuru</a></b>,  MS 2024<br />
<b><a href = "https://www.linkedin.com/in/haolin-xiong-927221176">Haolin Xiong</a></b>,  MS 2024<br />
<b><a href = "https://www.linkedin.com/in/zilin-zeng-62a682181">Zilin Zeng</a></b>,  MS 2024<br />
<b><a href = "https://adnan-armouti.github.io/">Adnan Armouti</a></b>, MS 2023 (now PhD at Cornell)<br />
<b><a href = "https://anirudh0707.github.io/">Anirudh Harish</a></b>, MS 2023  (now PhD at Rice)<br />
<b><a href = "https://krishk97.github.io/">Krish Kabra</a></b>, MS 2021 (now PhD at Rice)<br />
<b><a href = "https://chinmay0301.github.io/">Chinmay Talegaonkar</a></b>, MS 2021 (now PhD at UCSD)<br />
<b><a href = "https://dorukkarinca.com/">Doruk Karinca</a></b>, MS 2021 (now at VirtuousAI)<br />
<b><a href = "https://www.contrib.andrew.cmu.edu/~bhassan/index.html">Bakari Hassan</a></b>, MS 2019 (now PhD at CMU)<br />

@row
<b>Undergraduate</b>
<br>
<b><a href = "https://www.linkedin.com/in/ethan-yang-60078b1b9">Ethan Yang</a></b>, BS 2023  (now PhD at Cornell)<br />
<b> <a href = "https://sidsoma.github.io/">Sid Somasundaram</a></b>, BS 2020  (now PhD at MIT)<br />
<b><a href = "https://www.linkedin.com/in/serene-kamal">Serene Kamal</a></b>,  BS 2020 (now PhD at JHU)<br />
<b><a href = "https://scholar.google.is/citations?user=FApT9SEAAAAJ&hl=de">Franklin Wang</a></b>, BS 2019 (now PhD at Berkeley)<br />
<b><a href = "https://www.linkedin.com/in/alex-gilbert-b87b15ba/">Alex Gilbert</a></b>,  BS 2019 (now MS at Stanford)<br />