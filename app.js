const scene = new THREE.Scene();

// Set the camera position above the planets
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 100, 200); // Adjust these values as needed
camera.lookAt(0, 0, 0); // Ensure the camera is looking towards the center of the planets (or Sun)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.rotateSpeed = 0.5;

const textureLoader = new THREE.TextureLoader();

const sunGeometry = new THREE.SphereGeometry(40, 32, 32);
const sunTexture = textureLoader.load('assets/textures/sun.jpg');
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Function to create planets
const createPlanet = (texturePath, size, distance, name) => {
    const geometry = new THREE.SphereGeometry(size * 2, 32, 32);
    const texture = textureLoader.load(texturePath);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const planet = new THREE.Mesh(geometry, material);
    planet.userData = { name: name, distance: distance * 2, orbitSpeed: 0.0001 * (250 / distance) };
    return planet;
};

const mercury = createPlanet('assets/textures/mercury.jpg', 1.2, 36, 'Mercury');
const venus = createPlanet('assets/textures/venus.jpg', 2.4, -54, 'Venus');
const earth = createPlanet('assets/textures/earth.jpg', 3.2, 76, 'Earth');
const mars = createPlanet('assets/textures/mars.jpg', 2.0, 100, 'Mars');
const jupiter = createPlanet('assets/textures/jupiter.jpg', 6.0, 130, 'Jupiter');
const saturn = createPlanet('assets/textures/saturn.jpg', 5.4, 170, 'Saturn');
const uranus = createPlanet('assets/textures/uranus.jpg', 4.2, 210, 'Uranus');
const neptune = createPlanet('assets/textures/neptune.jpg', 4.2, -220, 'Neptune'); 

const moonGeometry = new THREE.SphereGeometry(2.0, 32, 32);
const moonTexture = textureLoader.load('assets/textures/moon.jpg');
const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);

scene.add(moon);

scene.add(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);

const ringsTexture = textureLoader.load('assets/textures/ring.png');
const ringsGeometry = new THREE.TorusGeometry(20, 2, 3, 100); 
const ringsMaterial = new THREE.MeshBasicMaterial({ map: ringsTexture, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
const rings = new THREE.Mesh(ringsGeometry, ringsMaterial);
rings.rotation.x = Math.PI / 2;
rings.rotation.z = THREE.Math.degToRad(70.7); 
rings.position.set(0, 0, 0); 
saturn.add(rings); 

const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
const objects = [sun, ...planets, moon]; 

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function createButton(object, name) {
    const button = document.createElement('button');
    button.textContent = name;
    button.classList.add('planet-button');

    button.style.position = 'absolute';
    button.style.zIndex = 1;
    button.style.display = 'none';

    button.addEventListener('click', () => {
        focusOnPlanet(object);
    });

    document.body.appendChild(button);
    object.userData.button = button;
}

planets.forEach(planet => createButton(planet, planet.userData.name));
createButton(sun, 'Sun');

const milkyWayTexture = textureLoader.load('assets/textures/milkyway.jpg');
const milkyWayGeometry = new THREE.SphereGeometry(500, 32, 32);
const milkyWayMaterial = new THREE.MeshBasicMaterial({ map: milkyWayTexture, side: THREE.BackSide });
const milkyWay = new THREE.Mesh(milkyWayGeometry, milkyWayMaterial);
scene.add(milkyWay);

let isCameraMoving = false;
let cameraStartPos = new THREE.Vector3();
let cameraEndPos = new THREE.Vector3();
let moveSpeed = 0.02;
let lerpAlpha = 0;

function focusOnPlanet(planet) {
    isCameraMoving = true;
    lerpAlpha = 0;

    const planetSize = planet.geometry.parameters.radius * 2; 
    const distance = planetSize * 1.5; 

    cameraEndPos.copy(planet.position).add(new THREE.Vector3(0, 0, distance));
    camera.position.copy(cameraEndPos);
    controls.target.copy(planet.position);
}

function updateButtonPositions() {
    objects.forEach((object) => {
        if (object.userData.button) {
            const vector = object.position.clone().project(camera);

            const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
            const y = (vector.y * -0.5 + 0.5) * window.innerHeight;

            object.userData.button.style.left = `${x}px`;
            object.userData.button.style.top = `${y}px`;
        }
    });
}

function detectHover() {
    raycaster.ray.origin.copy(camera.position);
    raycaster.ray.direction.set(mouse.x, mouse.y, 1).unproject(camera).sub(camera.position).normalize();

    const intersects = raycaster.intersectObjects(objects);

    objects.forEach((object) => {
        const button = object.userData.button;
        if (button) {
            if (intersects.some(intersect => intersect.object === object)) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        }
    });
}

function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.0002;

    sun.rotation.y += 0.00075;

    planets.forEach((planet) => {
        const speed = planet.userData.orbitSpeed;
        planet.position.x = planet.userData.distance * Math.cos(time * speed);
        planet.position.z = planet.userData.distance * Math.sin(time * speed);

        planet.rotation.y += 0.01;
    });

    moon.position.copy(earth.position).add(new THREE.Vector3(10, 0, 0)); 

    if (isCameraMoving) {
        lerpAlpha += moveSpeed;
        camera.position.lerpVectors(cameraStartPos, cameraEndPos, lerpAlpha);

        if (lerpAlpha >= 1) {
            isCameraMoving = false;
        }
    }

    updateButtonPositions();
    detectHover();

    controls.update();
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});
