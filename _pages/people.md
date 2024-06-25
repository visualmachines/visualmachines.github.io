---
title: "People"
layout: people_twoColumns
sitemap: false
permalink: /people/
---
<style>
  .team-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Distribute columns evenly */
  }
  .team-column {
    width: calc(50% - 0.5em); /* Each column takes up half the width with a small gap */
    margin-bottom: 1em; /* Add some vertical spacing between rows */
  }
  .team-member {
    display: flex;
    align-items: flex-start; /* Align items to the top */
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .team-member-PI{
    display: flex;
    align-items: flex-start; /* Align items to the top */
    padding: 0.5em;
   
  }

  .team-member-PI img {
  width: 120px; /* Keep image size */
  height: 120px;
  margin-right: 1em; /* Margin between photo and text */
  object-fit: cover;
}
  .team-member img {
    width: 120px;
    height: 120px;
    margin-right: 1em; /* Margin between photo and text */
    object-fit: cover;
  }
  .team-member-details {
    display: flex;
    flex-direction: column;
  }
  .team-member-name {
    margin-bottom: 0.0em; /* Space between name and email */
  }
  .team-member-email {
    color: black; /* Email color */
    font-size: 0.8em;
    margin-bottom: 0.3em; /* Space between email and education */
    color: gray;
  }
  .team-member-education {
    color: black;
    font-size: 0.8em;
  }
</style>


<div class="full-width">
  <img src= "/assets/images/people/group.jpg" alt="Headshot"> 
</div>
@row

## <b>Faculty</b>

<div class="team-container">
    <div class="team-column">
      <div class="team-member-PI">
        <a href="/assets/Kadambi_CV.pdf">
          <img src="/assets/images/people/achuta_kadambi.png" alt="Insert photo"/>
        </a>
        <div class="team-member-details">
          <a class="team-member-name" href="/assets/Kadambi_CV.pdf">
            <b>Achuta Kadambi</b>
          </a>
          <a class="team-member-email" href="mailto:{{ member.email }}">
            achuta.kadambi@gmail.com
          </a>
          <a class="team-member-education">Assistant Professor, UCLA<br />Electrical Engineering and Computer Science<br/>PhD, Massachusetts Institute of Technology
          </a>
          <div class="body-people"><a style="color: purple; font-size: 0.8em;" href="/assets/Kadambi_CV.pdf">CV/Resume</a></div>
        </div>
      </div>
    </div>
</div>

@row
## <b>Graduate / Post doc</b>

<div class="team-container">
  {% assign number_printed = 0 %}
  {% for member in site.data.grad_team_members %}
    <div class="team-column">
      <div class="team-member">
        <a href="{{ member.profile_link }}">
          <img src="{{ site.url }}/assets/images/people/{{ member.photo }}" alt="Insert photo"/>
        </a>
        <div class="team-member-details">
          <a class="team-member-name" href="{{ member.profile_link }}">
            <b>{{ member.name }}</b>
          </a>
          <a class="team-member-email" href="mailto:{{ member.email }}">
            {{ member.email }}
          </a>
          <a class="team-member-education">Grad student, UCLA<br /> Computer Engineering BS, UC Palo Alto
          </a>
        </div>
      </div>
    </div>
    {% assign number_printed = number_printed | plus: 1 %}
  {% endfor %}
</div>

@row
## <b>Undergraduate</b>

<div class="team-container">
  {% assign number_printed = 0 %}
  {% for member in site.data.undergrad_team_members %}
    <div class="team-column">
      <div class="team-member">
        <a href="{{ member.profile_link }}">
          <img src="{{ site.url }}/assets/images/people/{{ member.photo }}" alt="Insert photo"/>
        </a>
        <div class="team-member-details">
          <a class="team-member-name" href="{{ member.profile_link }}">
            <b>{{ member.name }}</b>
          </a>
          <a class="team-member-email" href="mailto:{{ member.email }}">
            {{ member.email }}
          </a>
          <a class="team-member-education">Grad student, UCLA<br /> Computer Engineering BS, UC Palo Alto
          </a>
        </div>
      </div>
    </div>
    {% assign number_printed = number_printed | plus: 1 %}
  {% endfor %}
</div>

@row
## <b>Alumni</b>

<div class="row">
    <div class="col-md-8">
      <p class="body-sci-miss">

<b>Graduate / Post doc</b>
@row

<b> <a href = "https://www.linkedin.com/in/blake-gella-04a6401ba">Blake Gella</a></b>, MS 2024<br />
<b> <a href = "https://www.linkedin.com/in/sairisheek">Sairisheek Muttukuru</a></b>,  MS 2024<br />
<b><a href = "https://www.linkedin.com/in/haolin-xiong-927221176">Haolin Xiong</a></b>,  MS 2024<br />
<b><a href = "https://www.linkedin.com/in/zilin-zeng-62a682181">Zilin Zeng</a></b>,  MS 2024<br />
<b><a href = "https://adnan-armouti.github.io/">Adnan Armouti</a></b>, MS 2023 (now PhD at Cornell)<br />
<b><a href = "https://anirudh0707.github.io/">Anirudh Harish</a></b>, MS 2023  (now PhD at Rice)<br />
<b><a href = "https://krishk97.github.io/">Krish Kabra</a></b>, MS 2021 (now PhD at Rice)<br />
<b><a href = "https://chinmay0301.github.io/">Chinmay Talegaonkar</a></b>, MS 2021 (now PhD at UCSD)<br />
<b><a href = "https://dorukkarinca.com/">Doruk Karinca</a></b>, MS 2021 (now at VirtuousAI)<br />
<b><a href = "https://jp.linkedin.com/in/teppei-kurita-457409198">Teppei Kurita</a></b>, Visiting Scientist 2021 (now at Sony, Japan)<br />
<b><a href = "https://k-tanaka.me/">Kenichiro Tanaka</a></b>, Visiting Professor 2020 (now at Ritsumeikan University, Japan)<br />
<b><a href = "https://www.contrib.andrew.cmu.edu/~bhassan/index.html">Bakari Hassan</a></b>, MS 2019 (now PhD at CMU)<br />
<b><a href = "https://yhba-ucla.github.io/">Yunhao Ba</a></b>, PhD 2018 (now Research Scientist at SONY AI Los Angeles)<br />

<br>
<b>Undergraduate</b>
@row

<b><a href = "https://www.linkedin.com/in/ethan-yang-60078b1b9">Ethan Yang</a></b>, BS 2023  (now PhD at Cornell)<br />
<b> <a href = "https://sidsoma.github.io/">Sid Somasundaram</a></b>, BS 2020  (now PhD at MIT)<br />
<b><a href = "https://www.linkedin.com/in/serene-kamal">Serene Kamal</a></b>,  BS 2020 (now PhD at JHU)<br />
<b><a href = "https://scholar.google.is/citations?user=FApT9SEAAAAJ&hl=de">Franklin Wang</a></b>, BS 2019 (now PhD at Berkeley)<br />
<b><a href = "https://www.linkedin.com/in/alex-gilbert-b87b15ba/">Alex Gilbert</a></b>,  BS 2019 (now MS at Stanford)<br />

<br>
<b>High school</b>
@row

Jerry Yang,  High School Student 2023<br />

      </p>
    </div>
  </div>
