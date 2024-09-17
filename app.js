// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100000);
camera.position.set(900, 250, 2000);
camera.lookAt(0, 0, 0);

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000); // Set the background color
document.body.appendChild(renderer.domElement);

// Set up the orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.rotateSpeed = 0.3; // Reduce rotate speed for less sensitivity
controls.zoomSpeed = 1;   // Adjust zoom speed to change sensitivity

// Load textures
const textureLoader = new THREE.TextureLoader();

// Create the Sun
const sunGeometry = new THREE.SphereGeometry(460, 32, 32);
const sunTexture = textureLoader.load('assets/textures/sun.jpg');
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.userData = { name: 'Sun', size: 320 };  // Explicitly set the name
scene.add(sun);

// Function to create planets
const createPlanet = (texturePath, size, distance, name) => {
    const geometry = new THREE.SphereGeometry(size * 4, 32, 32);
    const texture = textureLoader.load(texturePath);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const planet = new THREE.Mesh(geometry, material);
    planet.userData = { name: name, distance: distance * 2, orbitSpeed: 0.0001 * (250 / (distance * 2)), size: size * 4 };
    return planet;
};

// Create planets with updated distances
const mercury = createPlanet('assets/textures/mercury.jpg', 8.8 * 2, 72 * 8, 'Mercury');
const venus = createPlanet('assets/textures/venus.jpg', 13.6 * 2, 108 * 8, 'Venus');
const earth = createPlanet('assets/textures/earthmap1k.jpg', 16.8 * 2, 152 * 8, 'Earth');
const mars = createPlanet('assets/textures/mars.jpg', 12 * 2, 200 * 8, 'Mars');
const jupiter = createPlanet('assets/textures/jupiter.jpg', 35 * 2, 260 * 8, 'Jupiter');
const saturn = createPlanet('assets/textures/saturn.jpg', 30.6 * 2, 340 * 8, 'Saturn');
const uranus = createPlanet('assets/textures/uranus.jpg', 20.8 * 2, 420 * 8, 'Uranus');
const neptune = createPlanet('assets/textures/neptune.jpg', 20.8 * 2, 440 * 8, 'Neptune');

// Add planets to the Sun
sun.add(mercury);
sun.add(venus);
sun.add(earth);
sun.add(mars);
sun.add(jupiter);
sun.add(saturn);
sun.add(uranus);
sun.add(neptune);

// Create and add the Moon
const moonTexture = textureLoader.load('assets/textures/moon.jpg');
const moonGeometry = new THREE.SphereGeometry(50, 32, 32);
const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.userData = { name: 'Moon', size: 50 };  // Add name and size for Moon

earth.add(moon);
moon.position.set(50, 0, 0);

// Create and add rings for Saturn
const ringsTexture = textureLoader.load('assets/textures/ring.png');
const ringsGeometry = new THREE.TorusGeometry(400, 10, 2300, 3000);
const ringsMaterial = new THREE.MeshBasicMaterial({
    map: ringsTexture,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.8
});
const rings = new THREE.Mesh(ringsGeometry, ringsMaterial);
rings.rotation.x = Math.PI / 2;
rings.rotation.z = THREE.Math.degToRad(70.7);
rings.position.set(0, 0, 0);
saturn.add(rings);

// Create buttons for planets
const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
const objects = [sun, ...planets, moon];
const celestialObjects = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, moon];
celestialObjects.forEach(object => createButton(object));

// Create the Milky Way background
const milkyWayTexture = textureLoader.load('assets/textures/milkyway.jpg');
const milkyWayGeometry = new THREE.SphereGeometry(12000, 64, 64); // Increased radius to 12000
const milkyWayMaterial = new THREE.MeshBasicMaterial({ map: milkyWayTexture, side: THREE.BackSide });
const milkyWay = new THREE.Mesh(milkyWayGeometry, milkyWayMaterial);
scene.add(milkyWay);

// Camera movement variables
let isCameraMoving = false;
let cameraStartPos = new THREE.Vector3();
let cameraEndPos = new THREE.Vector3();
let moveSpeed = 0.01;
let lerpAlpha = 0;
let currentMessage = null;


// Function to focus on a planet
function focusOnPlanet(planet) {
    if (isAnimationPaused) {
        isAnimationPaused = false;    } else {
        isAnimationPaused = true;
    }

    isCameraMoving = true;
    lerpAlpha = 0;

    // Calculate the target position for the camera
    const planetPosition = planet.getWorldPosition(new THREE.Vector3());
    const distance = planet.userData.size * 3;

    // Update end position of the camera
    cameraEndPos.copy(planetPosition).add(new THREE.Vector3(0, 0, distance));

    // Set the target for the controls
    controls.target.copy(planetPosition);

    // Store the current camera position
    cameraStartPos.copy(camera.position);

    // Disable controls while the camera is moving
    controls.enabled = false;

    console.log(`Focusing on ${planet.userData.name}`);
    console.log(`Camera start position: ${cameraStartPos.toArray()}`);
    console.log(`Camera end position: ${cameraEndPos.toArray()}`);
}

// Function to create buttons for planets
// Function to create buttons for planets
function createButton(object) {
    const button = document.createElement('button');
    button.textContent = ''; // Remove the text content so no name is displayed
    button.classList.add('planet-button');

    button.style.position = 'absolute';
    button.style.zIndex = 1;
    button.style.display = 'none'; // Keep buttons hidden by default
    button.style.border = 'none';
    button.style.background = 'transparent';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '50%';

    button.addEventListener('click', () => {
        focusOnPlanet(object);
        showPlanetMessage(object); // Update to call the correct function
    });

    document.body.appendChild(button);
    object.userData.button = button;
}


// Set up the raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Function to update button positions
function updateButtonPositions() {
    objects.forEach((object) => {
        if (object.userData.button) {
            // Compute the screen position relative to the camera
            const vector = object.getWorldPosition(new THREE.Vector3()).project(camera);

            const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
            const y = (vector.y * -0.5 + 0.5) * window.innerHeight;

            const planetSize = object.userData.size;
            const buttonSize = (planetSize / 400) * window.innerHeight;
            object.userData.button.style.width = `${buttonSize}px`;
            object.userData.button.style.height = `${buttonSize}px`;

            object.userData.button.style.left = `${x - buttonSize / 2}px`;
            object.userData.button.style.top = `${y - buttonSize / 2}px`;
        }
    });
}

// Function to detect hover over objects
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

// Animation state variable
let isAnimationPaused = false; // Variable to track animation state

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.0002;

    // Update planet positions if not paused
    if (!isAnimationPaused) {
        sun.rotation.y += 0.00075;

        planets.forEach((planet) => {
            const speed = planet.userData.orbitSpeed;
            planet.position.x = planet.userData.distance * Math.cos(time * speed);
            planet.position.z = planet.userData.distance * Math.sin(time * speed);
            planet.rotation.y += 0.01; // Continue self-rotation
        });

        moon.position.x = 220 * Math.cos(time * 5);
        moon.position.z = 240 * Math.sin(time * 5);
    }

    // Update camera position if it's moving
    if (isCameraMoving) {
        lerpAlpha += moveSpeed;
        if (lerpAlpha > 1) lerpAlpha = 1;
        camera.position.lerpVectors(cameraStartPos, cameraEndPos, lerpAlpha);

        // Continuously update the controls target
        controls.update();

        if (lerpAlpha >= 1) {
            isCameraMoving = false;
            controls.enabled = true; // Re-enable controls when camera stops moving
        }
    } else {
        if (controls.enabled) {
            controls.update();
        }
    }

    detectHover();
    updateButtonPositions();
    renderer.render(scene, camera);
}

// Event listeners for mouse movement and click
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('mousedown', () => {
    controls.enabled = true; // Enable controls when mouse is pressed
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
