---
title: Home
layout: layouts/outerLayout.njk
permalink: "index.html"
---

<div class="body-row">
      <div class="body-column left">
        <div class="homeTitle">
          <h1 id="title">Hadleigh's Website!</h1>
        </div>
      </div>
      <div class="body-column right">
        <div class="grid-container">
          <a href="about.html"
            style="flex-grow: 2; background-image: url('https://github.com/HadleighJae/portfolio/blob/main/docs/images/whiteDressCrystalFar.JPG?raw=true'); background-position: 50% 46%; background-size: cover"
            >ABOUT</a>
          <a href="gallery.html"
            style="flex-grow: 1; background-image: url('https://github.com/HadleighJae/portfolio/blob/main/docs/images/jpromgroupspook.JPG?raw=true'); background-position: 50% 46%; background-size: cover"
            >GALLERY</a>
          <a href="gameanalysis.html"
            style="flex-grow: 1; background-image: url('https://github.com/HadleighJae/portfolio/blob/main/docs/images/shroomtable.JPG?raw=true'); background-position: 50% 46%; background-size: cover"
            >ASSIGNMENTS</a>
          <a href="resume.html"
            style="flex-grow: 1; background-image: url('https://github.com/HadleighJae/portfolio/blob/main/docs/images/lizziePose.jpg?raw=true'); background-position: 50% 46%; background-size: cover"
            >RESUME</a>
          <a href="https://github.com/HadleighJae/portfolio"
            style="flex-grow: 3; background-image: url('https://github.com/HadleighJae/portfolio/blob/main/docs/images/bookcovercropped.JPG?raw=true'); background-position: 50% 46%; background-size: cover"
            >GITHUB</a>
        </div>
      </div>
    </div>
<script>
    // Function to reset menu when the screen is resized
    window.onresize = function () {
        var x = document.getElementById("myTopnav");
        if (window.innerWidth > 600) {
            x.className = "topnav";
            // Reset to normal menu when screen is big
        }
    };
    // Add hover effect using JavaScript for homeTitle h1
    document.addEventListener("DOMContentLoaded", function () {
        const title = document.getElementById("title");
        title.addEventListener("mouseenter", function () {
            title.style.textShadow =
                "-1px 1px 1px #1d2b70, 1px 1px 1px #1d2b70, 1px -1px 1px #1d2b70, -1px -1px 1px #1d2b70, 2px 2px 1px #762851, 4px 4px 1px #d985fa, 6px 6px 1px #4ab5f8";
        });
        title.addEventListener("mouseleave", function () {
            title.style.textShadow = "0px 0px #303030";
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const gridLinks = document.querySelectorAll(".grid-container > a");
        gridLinks.forEach(link => {
            link.addEventListener("mouseenter", function () {
                link.style.opacity = "1";
                link.style.filter = "grayscale(0%)";
            });
            link.addEventListener("mouseleave", function () {
                link.style.opacity = "0.6";
                link.style.filter = "blur(1px) grayscale(50%)";
            });
        });
    });
    </script>

