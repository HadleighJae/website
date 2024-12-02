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
    button.textContent = followMercury ? 'Stop Following Mercury' : 'Mercury';
});

let followVenus = false;
document.getElementById('followVenusBtn').addEventListener('click', () => {
    followVenus = !followVenus;
    const button = document.getElementById('followVenusBtn');
    button.textContent = followVenus ? 'Stop Following Venus' : 'Venus';
});

let followEarth = false;
document.getElementById('followEarthBtn').addEventListener('click', () => {
    followEarth = !followEarth;
    const button = document.getElementById('followEarthBtn');
    button.textContent = followEarth ? 'Stop Following Earth' : 'Earth';
});

let followMars = false;
document.getElementById('followMarsBtn').addEventListener('click', () => {
    followMars = !followMars;
    const button = document.getElementById('followMarsBtn');
    button.textContent = followMars ? 'Stop Following Mars' : 'Mars';
});

let followJupiter = false;
document.getElementById('followJupiterBtn').addEventListener('click', () => {
    followJupiter = !followJupiter;
    const button = document.getElementById('followJupiterBtn');
    button.textContent = followJupiter ? 'Stop Following Jupiter' : 'Jupiter';
});

let followSaturn = false;
document.getElementById('followSaturnBtn').addEventListener('click', () => {
    followSaturn = !followSaturn;
    const button = document.getElementById('followSaturnBtn');
    button.textContent = followSaturn ? 'Stop Following Saturn' : 'Saturn';
});

let followUranus = false;
document.getElementById('followUranusBtn').addEventListener('click', () => {
    followUranus = !followUranus;
    const button = document.getElementById('followUranusBtn');
    button.textContent = followUranus ? 'Stop Following Uranus' : 'Uranus';
});

let followNeptune = false;
document.getElementById('followNeptuneBtn').addEventListener('click', () => {
    followNeptune = !followNeptune;
    const button = document.getElementById('followNeptuneBtn');
    button.textContent = followNeptune ? 'Stop Following Neptune' : 'Neptune';
});

let followPluto = false;
document.getElementById('followPlutoBtn').addEventListener('click', () => {
    followPluto = !followPluto;
    const button = document.getElementById('followPlutoBtn');
    button.textContent = followPluto ? 'Stop Following Pluto' : 'Pluto';
});

let followEris = false;
document.getElementById('followErisBtn').addEventListener('click', () => {
    followEris = !followEris;
    const button = document.getElementById('followErisBtn');
    button.textContent = followEris ? 'Stop Following Eris' : 'Eris';
});

let followHaumea = false;
document.getElementById('followHaumeaBtn').addEventListener('click', () => {
    followHaumea = !followHaumea;
    const button = document.getElementById('followHaumeaBtn');
    button.textContent = followHaumea ? 'Stop Following Haumea' : 'Haumea';
});

let followMakemake = false;
document.getElementById('followMakemakeBtn').addEventListener('click', () => {
    followMakemake = !followMakemake;
    const button = document.getElementById('followMakemakeBtn');
    button.textContent = followMakemake ? 'Stop Following Makemake' : 'Makemake';
});

let followCeres = false;
document.getElementById('followCeresBtn').addEventListener('click', () => {
    followCeres = !followCeres;
    const button = document.getElementById('followCeresBtn');
    button.textContent = followCeres ? 'Stop Following Ceres' : 'Ceres';
});
</script>