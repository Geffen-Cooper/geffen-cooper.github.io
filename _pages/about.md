---
layout: about
title: about
permalink: /
subtitle: <a href='/assets/pdf/Resume_Geffen_Cooper_UT_Austin.pdf'>Resume</a>

profile:
  align: left
  image: headshot.jpg
  image_circular: false # crops the image to make it circular
  more_info:

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 10 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

My name is Geffen Cooper. I am a fourth-year Ph.D. student in the [System Level Design (SLD)](https://radum.ece.utexas.edu/) group at UT Austin advised by Professor [Radu Marculescu](https://www.ece.utexas.edu/people/faculty/radu-marculescu). Before my Ph.D., I graduated from UC Santa Barbara (UCSB) in 2022 with a B.S. in computer engineering.

My research focuses on machine learning with *batteryless* sensors, with applications in wearables and multisensor human activity recognition. More broadly, I am interested in time-series and designing efficient algorithms for processing sparse and asynchronous data streams. I am also passionate about Edge AI, exploring low-power deep learning solutions for resource-constrained devices.

<!-- RESEARCH DEMO VIDEO (Inserted before the News section) -->
<div class="row mt-4 justify-content-center">
  <div class="col-sm-11">
    <p class="font-weight-bold text-muted mb-2"><i class="fa-solid fa-microchip"></i> Research Demo: Batteryless Sensor Data Stream</p>
    <figure class="mb-0">
      <video width="100%" height="auto" autoplay loop muted playsinline class="img-fluid rounded z-depth-1">
        <source src="{{ '/assets/video/batteryless_demo_2026_.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption class="figure-caption text-center mt-2 text-muted small">
        Demonstration of custom solar-harvesting acceleromter nodes transmitting real-time, asynchronous data streams for human activity recognition (HAR).
      </figcaption>
    </figure>
  </div>
</div>