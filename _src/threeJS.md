---
title: ThreeJS
layout: layouts/normalLayout.njk
permalink: "threeJS.html"
---
Welcome to my solar system! This is all being developed using ThreeJS code. The goal at the end of the line is to be able to click a planet's button and the camera focus on that planet. I also want it to provide information on the planet as well in text.

Some issues I am facing while doing this is Orbit Controls while focusing on a planet. As of now, you cannot control the camera movement around the planet you are focused on. I am pretty sure this is due to the planet's orbit around the sun having to constantly update the camera's position. This means users cannot control the movement around the planet unless the planets stop their orbit.

If you can't see the planets when you click on it, try looking around, it will show up.
<br>
<button id="followMercuryBtn" onclick='mercuryText()'>Mercury</button><button id="followVenusBtn" onclick='venusText()'>Venus</button><button id="followEarthBtn" onclick='earthText()'>Earth</button><button id="followMarsBtn" onclick='marsText()'>Mars</button><button id="followJupiterBtn" onclick='jupiterText()'>Jupiter</button><button id="followSaturnBtn" onclick='saturnText()'>Saturn</button><button id="followUranusBtn" onclick='uranusText()'>Uranus</button><button id="followNeptuneBtn" onclick='neptuneText()'>Neptune</button><button id="followPlutoBtn" onclick='plutoText()'>Pluto</button><button id="followErisBtn" onclick='erisText()'>Eris</button><button id="followHaumeaBtn" onclick='haumeaText()'>Haumea</button><button id="followMakemakeBtn" onclick='makemakeText()'>Makemake</button><button id="followCeresBtn" onclick='ceresText()'>Ceres</button>
<div id="info">
<p>
<span id='boldStuff'>
<strong>Name:</strong><br>
<strong>Planet Type:</strong><br>
<strong>Distance from Sun:</strong><br>
<strong>Equatorial Rotation Velocity:</strong><br>
<strong>Average Orbital Speed:</strong><br>
<strong>Size:</strong><br>
<strong>Axial Tilt:</strong><br>
</span>
</p>
</div>
<div id="threejs-container">
<canvas id="bg"></canvas>
</div>
<script type="module" src="js/main.js"></script>
<script>
let followMercury = false;
document.getElementById('followMercuryBtn').addEventListener('click', () => {
    followMercury = !followMercury;
    const button = document.getElementById('followMercuryBtn');
});
let followVenus = false;
document.getElementById('followVenusBtn').addEventListener('click', () => {
    followVenus = !followVenus;
    const button = document.getElementById('followVenusBtn');
});
let followEarth = false;
document.getElementById('followEarthBtn').addEventListener('click', () => {
    followEarth = !followEarth;
    const button = document.getElementById('followEarthBtn');
});
let followMars = false;
document.getElementById('followMarsBtn').addEventListener('click', () => {
    followMars = !followMars;
    const button = document.getElementById('followMarsBtn');
});
let followJupiter = false;
document.getElementById('followJupiterBtn').addEventListener('click', () => {
    followJupiter = !followJupiter;
    const button = document.getElementById('followJupiterBtn');
});
let followSaturn = false;
document.getElementById('followSaturnBtn').addEventListener('click', () => {
    followSaturn = !followSaturn;
    const button = document.getElementById('followSaturnBtn');
});
let followUranus = false;
document.getElementById('followUranusBtn').addEventListener('click', () => {
    followUranus = !followUranus;
    const button = document.getElementById('followUranusBtn');
});
let followNeptune = false;
document.getElementById('followNeptuneBtn').addEventListener('click', () => {
    followNeptune = !followNeptune;
    const button = document.getElementById('followNeptuneBtn');
});
let followPluto = false;
document.getElementById('followPlutoBtn').addEventListener('click', () => {
    followPluto = !followPluto;
    const button = document.getElementById('followPlutoBtn');
});
let followEris = false;
document.getElementById('followErisBtn').addEventListener('click', () => {
    followEris = !followEris;
    const button = document.getElementById('followErisBtn');
});
let followHaumea = false;
document.getElementById('followHaumeaBtn').addEventListener('click', () => {
    followHaumea = !followHaumea;
    const button = document.getElementById('followHaumeaBtn');
});
let followMakemake = false;
document.getElementById('followMakemakeBtn').addEventListener('click', () => {
    followMakemake = !followMakemake;
    const button = document.getElementById('followMakemakeBtn');
});
let followCeres = false;
document.getElementById('followCeresBtn').addEventListener('click', () => {
    followCeres = !followCeres;
    const button = document.getElementById('followCeresBtn');
});
</script>