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

const mercuryFollowOffset = new THREE.Vector3(-8, 0, 0);
const venusFollowOffset = new THREE.Vector3(-20, 0, 0);
const earthFollowOffset = new THREE.Vector3(-20, 0, 0);
const marsFollowOffset = new THREE.Vector3(-15, 0, 0);
const jupiterFollowOffset = new THREE.Vector3(-250, 0, 0);
const saturnFollowOffset = new THREE.Vector3(-250, 0, 0);
const uranusFollowOffset = new THREE.Vector3(-65, 0, 0);
const neptuneFollowOffset = new THREE.Vector3(-65, 0, 0);
const plutoFollowOffset = new THREE.Vector3(-4, 0, 0);
const erisFollowOffset = new THREE.Vector3(-4, 0, 0);
const haumeaFollowOffset = new THREE.Vector3(-3, 0, 0);
const makemakeFollowOffset = new THREE.Vector3(-3, 0, 0);
const ceresFollowOffset = new THREE.Vector3(-2, 0, 0);

// Textures downloaded from https://www.solarsystemscope.com/textures/
const nightTexture = new THREE.TextureLoader().load('img/space_stars.jpg');
const sunTexture = new THREE.TextureLoader().load('img/space_sun.jpg');
const mercuryTexture = new THREE.TextureLoader().load('img/space_mercury.jpg');
const venusTexture = new THREE.TextureLoader().load('img/space_venus.jpg');
const moonTexture = new THREE.TextureLoader().load('img/space_moon.jpg');
const earthTexture = new THREE.TextureLoader().load('img/space_earth.jpg');
const marsTexture = new THREE.TextureLoader().load('img/space_mars.jpg');
const jupiterTexture = new THREE.TextureLoader().load('img/space_jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load('img/space_saturn.jpg');
const saturnTextureRing = new THREE.TextureLoader().load('img/space_saturnring.png');
const uranusTexture = new THREE.TextureLoader().load('img/space_uranus.jpg');
const neptuneTexture = new THREE.TextureLoader().load('img/space_neptune.jpg');
const plutoTexture = new THREE.TextureLoader().load('img/space_pluto.jpg');
const erisTexture = new THREE.TextureLoader().load('img/space_eris.jpg');
const haumeaTexture = new THREE.TextureLoader().load('img/space_haumea.jpg');
const makemakeTexture = new THREE.TextureLoader().load('img/space_makemake.jpg');
const ceresTexture = new THREE.TextureLoader().load('img/space_ceres.jpg');

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
mercury.position.x = 57.900000;
mercury.rotation.x = 0;

// 108,200,000 kilometers from the sun
// 177.3° tilt
venus.position.x = 108.200000;
venus.rotation.x = 3.0944688;

// 149,215,600 km from sun, 384,400 from earth
moon.position.x = 16;

// 149,600,000 kilometers from the sun
// 23.4° tilt
earth.position.x = 149.600000;
earth.rotation.x = 0.408407;

// 227,900,000 kilometers from the sun
// 25.2° tilt
mars.position.x = 227.900000;
mars.rotation.x = 0.439823;

// 778,600,000 kilometers from the sun
// 3.1° tilt
jupiter.position.x = 778.600000;
jupiter.rotation.x = 0.0541052;

// 1,433,500,000 kilometers from the sun
// 26.7° tilt
saturn.position.x = 1433.500000;
saturn.rotation.x = 0.4660029;

saturnRing.position.x = 1433.500000;
saturnRing.rotation.x = 2.0367992;

// 2,872,500,000 kilometers from the sun
// 97.8° tilt
uranus.position.x = 2872.500000;
uranus.rotation.x = 1.706932;

// 4,495,100,000 kilometers from the sun
// 28.3° tilt
neptune.position.x = 4495.100000;
neptune.rotation.x = 0.4939282;

// 5,900,000,000 kilometers from the sun
// 122.53° tilt
pluto.position.x = 5900.000000;
pluto.rotation.x = 2.13855193;

// 10,000,000,000 kilometers from the sun
// 78.3° tilt
eris.position.x = 10000.000000;
eris.rotation.x = 1.366593;

// 6,500,000,000 kilometers from the sun
// 126° tilt
haumea.position.x = 6500.000000;
haumea.rotation.x = 2.19911;

// 6,900,000,000 kilometers from the sun
// 3° tilt
makemake.position.x = 6900.000000;
makemake.rotation.x = 0.0523599;

// 413,000,000 kilometers from the sun
// 4° tilt
ceres.position.x = 413.000000;
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
    const ceresRotation = ceresObj.rotation.y += 0.00179;

    if (followMercury) {
        // Get Mercury's world position
        const mercuryWorldPosition = new THREE.Vector3();
        mercury.getWorldPosition(mercuryWorldPosition);

        // Calculate the camera's offset position relative to Mercury
        const cameraOffset = mercuryFollowOffset.clone();
        camera.position.copy(mercuryWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Mercury's position
        controls.target.copy(mercuryWorldPosition);
    }

    if (followVenus) {
        // Get Venus's world position
        const venusWorldPosition = new THREE.Vector3();
        venus.getWorldPosition(venusWorldPosition);

        // Calculate the camera's offset position relative to Venus
        const cameraOffset = venusFollowOffset.clone();
        camera.position.copy(venusWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Venus's position
        controls.target.copy(venusWorldPosition);
    }

    if (followEarth) {
        // Get Earth's world position
        const earthWorldPosition = new THREE.Vector3();
        earth.getWorldPosition(earthWorldPosition);

        // Calculate the camera's offset position relative to Earth
        const cameraOffset = earthFollowOffset.clone();
        camera.position.copy(earthWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Earth's position
        controls.target.copy(earthWorldPosition);
    }

    if (followMars) {
        // Get Mars's world position
        const marsWorldPosition = new THREE.Vector3();
        mars.getWorldPosition(marsWorldPosition);

        // Calculate the camera's offset position relative to Mars
        const cameraOffset = marsFollowOffset.clone();
        camera.position.copy(marsWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Mars's position
        controls.target.copy(marsWorldPosition);
    }

    if (followJupiter) {
        // Get Jupiter's world position
        const jupiterWorldPosition = new THREE.Vector3();
        jupiter.getWorldPosition(jupiterWorldPosition);

        // Calculate the camera's offset position relative to Jupiter
        const cameraOffset = jupiterFollowOffset.clone();
        camera.position.copy(jupiterWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Jupiter's position
        controls.target.copy(jupiterWorldPosition);
    }

    if (followSaturn) {
        // Get Saturn's world position
        const saturnWorldPosition = new THREE.Vector3();
        saturn.getWorldPosition(saturnWorldPosition);

        // Calculate the camera's offset position relative to Saturn
        const cameraOffset = saturnFollowOffset.clone();
        camera.position.copy(saturnWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Saturn's position
        controls.target.copy(saturnWorldPosition);
    }

    if (followUranus) {
        // Get Uranus's world position
        const uranusWorldPosition = new THREE.Vector3();
        uranus.getWorldPosition(uranusWorldPosition);

        // Calculate the camera's offset position relative to Uranus
        const cameraOffset = uranusFollowOffset.clone();
        camera.position.copy(uranusWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Uranus's position
        controls.target.copy(uranusWorldPosition);
    }

    if (followNeptune) {
        // Get Neptune's world position
        const neptuneWorldPosition = new THREE.Vector3();
        neptune.getWorldPosition(neptuneWorldPosition);

        // Calculate the camera's offset position relative to Neptune
        const cameraOffset = neptuneFollowOffset.clone();
        camera.position.copy(neptuneWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Neptune's position
        controls.target.copy(neptuneWorldPosition);
    }

    if (followPluto) {
        // Get Pluto's world position
        const plutoWorldPosition = new THREE.Vector3();
        pluto.getWorldPosition(plutoWorldPosition);

        // Calculate the camera's offset position relative to Pluto
        const cameraOffset = plutoFollowOffset.clone();
        camera.position.copy(plutoWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Pluto's position
        controls.target.copy(plutoWorldPosition);
    }

    if (followEris) {
        // Get Eris's world position
        const erisWorldPosition = new THREE.Vector3();
        eris.getWorldPosition(erisWorldPosition);

        // Calculate the camera's offset position relative to Eris
        const cameraOffset = erisFollowOffset.clone();
        camera.position.copy(erisWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Eris's position
        controls.target.copy(erisWorldPosition);
    }

    if (followHaumea) {
        // Get Haumea's world position
        const haumeaWorldPosition = new THREE.Vector3();
        haumea.getWorldPosition(haumeaWorldPosition);

        // Calculate the camera's offset position relative to Haumea
        const cameraOffset = haumeaFollowOffset.clone();
        camera.position.copy(haumeaWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Haumea's position
        controls.target.copy(haumeaWorldPosition);
    }

    if (followMakemake) {
        // Get Makemake's world position
        const makemakeWorldPosition = new THREE.Vector3();
        makemake.getWorldPosition(makemakeWorldPosition);

        // Calculate the camera's offset position relative to Makemake
        const cameraOffset = makemakeFollowOffset.clone();
        camera.position.copy(makemakeWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Makemake's position
        controls.target.copy(makemakeWorldPosition);
    }

    if (followCeres) {
        // Get Ceres's world position
        const ceresWorldPosition = new THREE.Vector3();
        ceres.getWorldPosition(ceresWorldPosition);

        // Calculate the camera's offset position relative to Ceres
        const cameraOffset = ceresFollowOffset.clone();
        camera.position.copy(ceresWorldPosition).add(cameraOffset);

        // Update OrbitControls target to Ceres's position
        controls.target.copy(ceresWorldPosition);
    }

    // controls.update();
    renderer.render(scene, camera);
}

animate();