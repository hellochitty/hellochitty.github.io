---
layout: default
---

<div class="home">

  <h1 class="page-heading"></h1>

  <div class="row overlay">
  {% for post in site.categories.digital %}
    <div class="col-3">
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
          <div data-content="{{post.title}}" class = "post-image">
          <img src="{{post.image}}" class="post-thumb">
          </img>
          </div>
        </a>
    </div>  
  {% endfor %}


  
  </div>