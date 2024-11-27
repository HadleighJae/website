import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
/*import javascriptLogo from './javascript.svg'
// import viteLogo from 'public.vite.svg'*/
// import { setupCounter } from '../counter.js'
// hoping this works

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000000);

// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);

// Textures downloaded from https://www.solarsystemscope.com/textures/
const nightTexture = new THREE.TextureLoader().load('img/stars.jpg');
const sunTexture = new THREE.TextureLoader().load('img/sun.jpg');
const mercuryTexture = new THREE.TextureLoader().load('img/mercury.jpg');
const venusTexture = new THREE.TextureLoader().load('img/venus.jpg');
const moonTexture = new THREE.TextureLoader().load('img/moon.jpg');
const earthTexture = new THREE.TextureLoader().load('img/earth.jpg');
const marsTexture = new THREE.TextureLoader().load('img/mars.jpg');
const jupiterTexture = new THREE.TextureLoader().load('img/jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load('img/saturn.jpg');
const saturnTextureRing = new THREE.TextureLoader().load('img/saturnring.png');
const uranusTexture = new THREE.TextureLoader().load('img/uranus.jpg');
const neptuneTexture = new THREE.TextureLoader().load('img/neptune.jpg');
const plutoTexture = new THREE.TextureLoader().load('img/pluto.jpg');
const erisTexture = new THREE.TextureLoader().load('img/eris.jpg');
const haumeaTexture = new THREE.TextureLoader().load('img/haumea.jpg');
const makemakeTexture = new THREE.TextureLoader().load('img/makemake.jpg');
const ceresTexture = new THREE.TextureLoader().load('img/ceres.jpg');

scene.background = nightTexture;

//
const sunGeometry = new THREE.SphereGeometry( 13.91400, 32, 50);
// 4,879 kilometers in diameter
const mercuryGeometry = new THREE.SphereGeometry( 2.440, 32, 50);
// 12,104 kilometers in diameter
const venusGeometry = new THREE.SphereGeometry( 6.052, 32, 50 );
// 3476 kilometers in diameter
const moonGeometry = new THREE.SphereGeometry( 1.738, 32, 50);
// 12,756 kilometers in diameter
const earthGeometry = new THREE.SphereGeometry( 6.371, 32, 50 );
// 6,792 kilometers in diameter
const marsGeometry = new THREE.SphereGeometry( 3.390, 32, 50);
// 142,984 kilometers in diameter
const jupiterGeometry = new THREE.SphereGeometry( 69.911, 32, 50);
// 120,536 kilometers in diameter
const saturnGeometry = new THREE.SphereGeometry( 58.232, 32, 50);
// 51,118 kilometers in diameter
const uranusGeometry = new THREE.SphereGeometry( 25.362, 32, 50);
// 49,528 kilometers in diameter
const neptuneGeometry = new THREE.SphereGeometry( 24.622, 32, 50);
// 2,377 kilometers in diameter
const plutoGeometry = new THREE.SphereGeometry( 1.1885, 32, 50);
// 2,326 kilometers in diameter
const erisGeometry = new THREE.SphereGeometry( 1.163, 32, 50);
// 1,740 kilometers in diameter
const haumeaGeometry = new THREE.SphereGeometry( 1, 32, 50);
haumeaGeometry.scale(0.870, 0.498, 1);
// 1,434 kilometers in diameter
const makemakeGeometry = new THREE.SphereGeometry( 0.717, 32, 50);
// 964 kilometers in diameter
const ceresGeometry = new THREE.SphereGeometry( 0.482, 32, 50);

//set the color of the basic material in the object parameters `{}`
const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
const mercuryMaterial = new THREE.MeshStandardMaterial({map: mercuryTexture});
const venusMaterial = new THREE.MeshStandardMaterial({map: venusTexture});
const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture});
const earthMaterial = new THREE.MeshStandardMaterial({map: earthTexture});
const marsMaterial = new THREE.MeshStandardMaterial({map: marsTexture});
const jupiterMaterial = new THREE.MeshStandardMaterial({map: jupiterTexture});
const saturnMaterial = new THREE.MeshStandardMaterial({map: saturnTexture});
const uranusMaterial = new THREE.MeshStandardMaterial({map: uranusTexture});
const neptuneMaterial = new THREE.MeshStandardMaterial({map: neptuneTexture});
const plutoMaterial = new THREE.MeshStandardMaterial({map: plutoTexture});
const erisMaterial = new THREE.MeshStandardMaterial({map: erisTexture});
const haumeaMaterial = new THREE.MeshStandardMaterial({map: haumeaTexture});
const makemakeMaterial = new THREE.MeshStandardMaterial({map: makemakeTexture});
const ceresMaterial = new THREE.MeshStandardMaterial({map: ceresTexture});

const sun = new THREE.Mesh(sunGeometry, sunMaterial);
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
const eris = new THREE.Mesh(erisGeometry, erisMaterial);
const haumea = new THREE.Mesh(haumeaGeometry, haumeaMaterial);
const makemake = new THREE.Mesh(makemakeGeometry, makemakeMaterial);
const ceres = new THREE.Mesh(ceresGeometry, ceresMaterial);

const controls = new OrbitControls(camera, renderer.domElement)

scene.add(sun);
sun.add(mercury);
sun.add(venus);
sun.add(earth);
sun.add(mars);
sun.add(jupiter);
sun.add(saturn);
sun.add(uranus);
sun.add(neptune);
sun.add(pluto);
sun.add(eris);
sun.add(haumea);
sun.add(makemake);
sun.add(ceres);

const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercury);
scene.add(mercuryObj);

const venusObj = new THREE.Object3D();
venusObj.add(venus);
scene.add(venusObj);

const earthObj = new THREE.Object3D();
earthObj.add(earth);
scene.add(earthObj);

const marsObj = new THREE.Object3D();
marsObj.add(mars);
scene.add(marsObj);

const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiter);
scene.add(jupiterObj);

const saturnObj = new THREE.Object3D();
saturnObj.add(saturn);
scene.add(saturnObj);

// 2, 30, 32
const saturnRingGeo = new THREE.RingGeometry(20, 150, 32);
const saturnMaterialRing = new THREE.MeshBasicMaterial({map: saturnTextureRing, side: THREE.DoubleSide});
const saturnRing = new THREE.Mesh(saturnRingGeo, saturnMaterialRing);
saturnObj.add(saturnRing);

const uranusObj = new THREE.Object3D();
uranusObj.add(uranus);
scene.add(uranusObj);

const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptune);
scene.add(neptuneObj);

const plutoObj = new THREE.Object3D();
plutoObj.add(pluto);
scene.add(plutoObj);

const erisObj = new THREE.Object3D();
erisObj.add(eris);
scene.add(erisObj);

const haumeaObj = new THREE.Object3D();
haumeaObj.add(haumea);
scene.add(haumeaObj);

const makemakeObj = new THREE.Object3D();
makemakeObj.add(makemake);
scene.add(makemakeObj);

const ceresObj = new THREE.Object3D();
ceresObj.add(ceres);
scene.add(ceresObj);

earth.add(moon);

const moonObj = new THREE.Object3D();
moonObj.add(moon);
earth.add(moonObj);

sun.position.x = 0;
sun.rotation.x = 0.1265364;

// 57,900,000 kilometers from the sun
// 0° tilt
mercury.position.x = 579.00000;
mercury.rotation.x = 0;

// 108,200,000 kilometers from the sun
// 177.3° tilt
venus.position.x = 1082.00000;
venus.rotation.x = 3.0944688;

// 149,215,600 km from sun, 384,400 from earth
moon.position.x = 39.90771;

// 149,600,000 kilometers from the sun
// 23.4° tilt
earth.position.x = 1496.00000;
earth.rotation.x = 0.408407;

// 227,900,000 kilometers from the sun
// 25.2° tilt
mars.position.x = 2279.00000;
mars.rotation.x = 0.439823;

// 778,600,000 kilometers from the sun
// 3.1° tilt
jupiter.position.x = 7786.00000;
jupiter.rotation.x = 0.0541052;

// 1,433,500,000 kilometers from the sun
// 26.7° tilt
saturn.position.x = 14335.00000;
saturn.rotation.x = 0.4660029;

saturnRing.position.x = 14335.00000;
saturnRing.rotation.x = 2.0367992;

// 2,872,500,000 kilometers from the sun
// 97.8° tilt
uranus.position.x = 28725.00000;
uranus.rotation.x = 1.706932;

// 4,495,100,000 kilometers from the sun
// 28.3° tilt
neptune.position.x = 44951.00000;
neptune.rotation.x = 0.4939282;

// 5,900,000,000 kilometers from the sun
// 122.53° tilt
pluto.position.x = 59000.00000;
pluto.rotation.x = 2.13855193;

// 10,000,000,000 kilometers from the sun
// 78.3° tilt
eris.position.x = 100000.00000;
eris.rotation.x = 1.366593;

// 6,500,000,000 kilometers from the sun
// 126° tilt
haumea.position.x = 65000.00000;
haumea.rotation.x = 2.19911;

// 6,900,000,000 kilometers from the sun
// 3° tilt
makemake.position.x = 69000.00000;
makemake.rotation.x = 0.0523599;

// 413,000,000 kilometers from the sun
// 4° tilt
ceres.position.x = 4130.00000;
ceres.rotation.x = 0.0698132;

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.power = 10;
pointLight.position.set(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.intensity = 0.1;
ambientLight.position.set(0, 0, 0);

scene.add(pointLight);
scene.add(ambientLight);

renderer.render(scene, camera);

function animate() {
    requestAnimationFrame( animate );

    // Equatorial Rotation Velocity
    // 0.7638889 km/s   2,750 km/h
    sun.rotation.y += 0.0275;

    // 0.003026 km/s   10.8936 km/h
    mercury.rotation.y += 0.00010894;

    // 0.00181 km/s   6.516 km/h
    venus.rotation.y += 0.00006516;

    // 16.7 km/h
    moon.rotation.y += 0.004638889;

    // 0.4651111 km/s   1,674.4 km/h
    earth.rotation.y += 0.016744;

    // 0.2416667 km/s   870 km/h
    mars.rotation.y += 0.0087;

    // 12.6 km/s   45,360 km/h
    jupiter.rotation.y += 0.4536;

    // 9.87 km/s   35,532 km/h
    saturn.rotation.y += 0.35532;

    // 2.59 km/s   9,324 km/h
    uranus.rotation.y += 0.09324;

    // 2.68 km/s   9,648 km/h
    neptune.rotation.y += 0.09648;

    // 0.013105556 km/s   47.18 km/h
    pluto.rotation.y += 0.0004718;

    // 3.4338 km/s   12,361.68 km/h
    eris.rotation.y += 0;

    // 0.389 km/s   1400.828109 km/h
    haumea.rotation.y += 0.01400828109;

    // 200.5 km/h
    makemake.rotation.y += 0.002005;

    // 0.09261 km/s   333.396 km/h
    ceres.rotation.y += 0.00333396;

    // speed around sun (orbital speed)
    // 47.9 km/s   172,440 km/h
    mercuryObj.rotation.y += 0.00479;
    // 35.0 km/s   126,000 km/h
    venusObj.rotation.y += 0.0035;
    // 29.8 km/s   107,280 km/h
    earthObj.rotation.y += 0.00298;
    // 29.8 km/s   107,280 km/h
    moonObj.rotation.y += 0.00298;
    // 24.1 km/s   86,760 km/h
    marsObj.rotation.y += 0.00241;
    // 13.1 km/s   47,160 km/h
    jupiterObj.rotation.y += 0.00131;
    // 9.7 km/s   34,920 km/h
    saturnObj.rotation.y += 0.00097;
    // 6.8 km/s   24,480 km/h
    uranusObj.rotation.y += 0.00068;
    // 5.4 km/s   19,440 km/h
    neptuneObj.rotation.y += 0.00054;
    // 4.743 km/s   17,074.8 km/h
    plutoObj.rotation.y += 0.0004743;
    // 3.434 km/s   12,362.4 km/h
    erisObj.rotation.y += 0.0003434;
    // 4.53 km/s   16,308 km/h
    haumeaObj.rotation.y += 0.000453;
    // 4.419 km/s   15,908.4 km/h
    makemakeObj.rotation.y += 0.0004419;
    // 17.9 km/s   64,440 km/h
    ceresObj.rotation.y += 0.00179;

    renderer.render( scene, camera );
}

animate();