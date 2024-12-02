---
title: ThreeJS
layout: layouts/normalLayout.njk
permalink: "threeJS.html"
---
<button id="followMercuryBtn">Mercury</button><button id="followVenusBtn">Venus</button><button id="followEarthBtn">Earth</button><button id="followMarsBtn">Mars</button><button id="followJupiterBtn">Jupiter</button><button id="followSaturnBtn">Saturn</button><button id="followUranusBtn">Uranus</button><button id="followNeptuneBtn">Neptune</button><button id="followPlutoBtn">Pluto</button><button id="followErisBtn">Eris</button><button id="followHaumeaBtn">Haumea</button><button id="followMakemakeBtn">Makemake</button><button id="followCeresBtn">Ceres</button>
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