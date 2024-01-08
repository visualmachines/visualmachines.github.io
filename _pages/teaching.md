---
title: "Teaching"
layout: teaching
excerpt: "Visual Machines Group at UCLA."
sitemap: false
permalink: /teaching/
---

<style>
    .week-box {
      display: flex;
      flex-direction: column;
      border: 1px solid #ccc;
      padding-left: 10px;
      padding-right: 10px;
      margin: 10px;
    }

    .top-level {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .mid_section {
        width: 60%;
    }

    .event {
      border-bottom: 1px solid #ddd;
      padding: 10px;
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .event-info {
      display: flex;
      align-items: baseline;
    }

    .event-date {
      width: 15%;
    }

    .event-title {
      width: 100%;
      font-weight: bold;
    }

    .level-1-links {
      display: flex;
      width: 25%;
    }

    .level-1-links a {
      margin-right: 10px;
    }

    .hw {
        padding-top: 10px;
    }

    .quiz {
        padding-top: 10px;
    }

    .level-2-links {
      margin-top: 10px;
    }
  </style>

# EE149: Foundations of Computer Vision

**Winter 2024, Prof. Achuta Kadambi**

**TA:** Rishi Upadhyay, rishiu@ucla.edu

**Lecture:** Tuesday, Thursday 12-1:50pm PT, Public Affairs Building (PUB AFF) 1246

**Prof. Kadambi Office hours:** Thurs 2:00 - 2:50pm, Eng. IV 56-147J

**TA Office Hours:** TBD

**Piazza Link:** [https://piazza.com/ucla/winter2024/ecengr149](https://piazza.com/ucla/winter2024/ecengr149)

**Final Exam:** Tuesday, Mar. 19, 8-11AM, Location TBD

## Schedule

{% for module in site.data.classes.ee149_wi24 %}
<h4>Week {{ module.week }}</h4>
<div class="week-box">
    {% for ev in module.events %}
    <div class="event">
      <div class="top-level">
        <div class="event-date">{{ ev.date }}</div>
        <div class="mid_section">
            <div class="event-title">{{ ev.title }}</div>
            {% if (ev.quiz | size) > 0 %}
            <div class="quiz">
                <a href="{{ ev.quiz }}">Quiz</a>,
                <a href="{{ ev.quiz_sol }}">Solutions</a>
            </div>
            {% endif %}

            {% if (ev.hw_num | size) > 0 %}
            <div class="hw"><a href="{{ ev.hw_link }}">HW {{ ev.hw_num }} released</a>, Due {{ ev.hw_due_date }}.
                {% if (ev.hw_due | size) > 0 %}
                HW {{ ev.hw_due }} Due</div>
                {% else %}
                </div>
                {% endif %}
            {% elsif (ev.hw_due | size) > 0 %}
            <div class="hw">HW {{ ev.hw_due }} Due</div>
            {% endif %}
        </div>

        <div class="level-1-links">
            {% if (ev.slides_blank | size) > 0 %}
            <a href="{{ ev.slides_blank }}">Slides (Blank)</a>
            {% endif %}
            {% if (ev.slides | size) > 0 %}
            <a href="{{ ev.slides }}">Slides</a>
            {% endif %}
            {% if (ev.video | size) > 0 %}
            <a href="{{ ev.video }}">Video</a>
            {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
{% endfor %}

&nbsp;

**Course Description:** This course covers the foundations of computer vision from both a theoretical and practical perspective. A particular emphasis is on “Classical” Computer Vision, which after taking this course, should be seen as complementary to deep learning. In fact, the pioneers of classical computer vision are the same community that developed convolutional neural networks (CNNs). The course should be relevant for CS majors specializing in AI, ECE majors specializing in cyberphysical systems and information engineering, ME majors specializing in robotics, Statistics majors specializing in machine learning, CogSci and Psych majors specializing in perception, and Math majors looking for applications.  

**Prerequisites:** Familiarity with Python programming, and command of Linear Algebra, Calculus, Signal Processing, and Probability. Familiarity with LaTeX (or willingness to spend 1-2 hours learning it). Familiarity with deep learning. If you have no exposure to deep learning, you will be asked to watch an additional videolecture (deep learning I) that replaces the Memorial Day lecture.

**Communication:** The primary sources of information about the course will be website and the [Piazza](https://piazza.com/ucla/winter2024/ecengr149). Please use the Piazza to ask any questions about the course content or policies that you think other students might benefit from seeing. If you have a personal question please create a private post on Piazza or email the TA directly. 

**Grading:** 

The overall grade will be split:

TBD

**Problem Sets:** There will be 4 problem sets, each 2 weeks long. The release and due dates are shown on the class calendar. Homework submission will done through Gradescope.

**Late Policy:** Everyone has 3 late days to be applied to any assignment. After these late days, we will not accept late assignments unless a medical note is provided.

**Course Textbooks:** There is no required textbook, although the following textbooks can be seen as a helpful resource. These are all freely available.

* [Computer Vision: Algorithms and Applications, 2nd ed.](https://szeliski.org/Book/)
* [An Invitation to 3-D Vision](https://www.eecis.udel.edu/~cer/arv/readings/old_mkss.pdf)
* [Computational Imaging](http://imagingtext.github.io)

**Collaboration:**

With the obvious exception of exams, we encourage you to discuss course activities with your friends and classmates as you are working on them. You will learn more in this class if you work with others than if you do not. Ask questions, answer questions, and share ideas liberally.

Learning cooperatively is different from sharing answers. You shouldn't be showing your code to other students or looking at others' code, except if you've finished a problem already, you can look at others' code to help them finish.

If you are helping another student, don't just tell them the answer; they will learn very little and run into trouble on exams. Instead, try to guide them toward discovering the solution on their own. Problem solving practice is the key to progress in computer science.

**Follow-Up or Concurrent Courses:** Students who enjoy this course, may consider EE.114 (Speech and Image Processing), EE.146 (Introduction to Machine Learning), EE.211 (Digital Image Processing), CS.269 (Deformable Models), CS.275 (Artificial Life), and EE.239 (Computational Imaging) as examples of synergistic courses at UCLA. In addition, CS.188 is a dual of this class taught from a mostly deep learning perspective by Prof. Bolei Zhou. 

**Acknowledgements:** Lecture notes, homework assignments, and quizzes have been drawn from material from colleagues: Ioannis Gkioulekas, Kris Kitani, Bob Collins, Ramesh Raskar, Ayush Bhandari, Gordon Wetzstein, Srinivasa Narashiman, Stefano Soatto, Marc Levoy, Martial Hebert, Matthew O'Toole, Alyosha Efros, Ali Faharadi, Deva Ramanan, Yaser Sheikh, Todd Zickler. More specific acknowledgments can be found in the corresponding material. If you use any material, please apply credits recursively.
