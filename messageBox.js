// Define messages for each celestial body
const messages = {
    Sun: {
        title: "The Sun",
        text: "Welcome to the heart of our solar system! The Sun is a massive star providing light and warmth to all planets."
    },
    Mercury: {
        title: "Mercury",
        text: `
            Mercury is the smallest and closest planet to the Sun in our solar system. It's a terrestrial planet with a rocky surface and no significant atmosphere, resulting in extreme temperature fluctuations between day and night. It has a heavily cratered surface, much like the Moon, and it completes an orbit around the Sun in just about 88 Earth days. Despite its small size, Mercury has a magnetic field and a surprisingly high density due to its large iron core.
            
            <ul>
                <li><strong>Size and Composition:</strong> Mercury has a diameter of about 4,880 kilometers (3,032 miles), making it the smallest planet in the solar system. Its composition is similar to Earth’s, with a core rich in iron and a silicate mantle and crust.</li>
                <li><strong>Orbit and Rotation:</strong> Mercury has an elliptical orbit around the Sun and is the closest planet to it. It takes about 88 Earth days to complete one orbit. Mercury has a unique rotational pattern, with a day on Mercury (one full rotation) lasting about 59 Earth days. This means that a day on Mercury is 1.5 times longer than its year.</li>
                <li><strong>Temperature Extremes:</strong> Due to its lack of a significant atmosphere, temperatures on Mercury can vary dramatically. Daytime temperatures can reach up to 430°C (800°F), while nighttime temperatures can plummet to -180°C (-290°F).</li>
                <li><strong>Surface Features:</strong> The surface of Mercury is covered with craters, similar to the Moon. It has features such as large, ancient impact basins and scarps (cliffs) that indicate tectonic activity.</li>
                <li><strong>Magnetic Field:</strong> Despite its small size, Mercury has a global magnetic field, which is about 1% as strong as Earth's. This suggests the presence of a partially liquid outer core.</li>
                <li><strong>Exploration:</strong> Mercury has been explored by NASA’s Mariner 10 and MESSENGER missions. Mariner 10 made three flybys in the 1970s, while MESSENGER orbited Mercury from 2011 to 2015, providing detailed maps and data about its surface and magnetic field.</li>
            </ul>
                    <p style="text-align: center; font-style: italic; margin-top: 20px; color: #333; font-size: 1.2em; background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
            <strong>Click on the planet to close</strong>
        </p>
    

        `
    },
    Venus: {
        title: "Venus",
        text: `
            Venus is the second planet from the Sun and is similar in size and composition to Earth, often referred to as Earth's "sister planet." It has a thick, toxic atmosphere primarily composed of carbon dioxide, with clouds of sulfuric acid, which creates a runaway greenhouse effect and makes Venus the hottest planet in our solar system, with surface temperatures around 465°C (869°F). The planet's surface is obscured by clouds, but radar mapping has revealed a landscape with volcanoes, mountains, and vast plains. Venus has a slow rotation, taking about 243 Earth days to complete one rotation, and its day is longer than its year, which is about 225 Earth days. Despite its harsh conditions, Venus's geological features and atmospheric dynamics continue to be subjects of scientific interest.
    
            <ul style="font-size: 0.85em;"> <!-- Adjust font size for list items -->
                <li><strong>Atmosphere:</strong> Venus has an incredibly dense atmosphere that is about 90 times thicker than Earth's. This atmosphere traps heat through the greenhouse effect, leading to extremely high surface temperatures.</li>
                <li><strong>Surface:</strong> The surface of Venus is mostly volcanic plains, with some large volcanic structures like Maat Mons and Sif Mons. It also features extensive highland regions and impact craters.</li>
                <li><strong>Rotation and Orbit:</strong> Venus rotates very slowly on its axis, taking about 243 Earth days to complete one rotation. Interestingly, it rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east. Its orbit around the Sun takes about 225 Earth days.</li>
                <li><strong>Day-Night Cycle:</strong> Due to its slow rotation and thick clouds, Venus experiences very little temperature variation between day and night, maintaining a consistent high temperature.</li>
                <li><strong>Magnetic Field:</strong> Venus has a very weak magnetic field compared to Earth, which is likely due to the lack of a significant dynamo effect in its core.</li>
                <li><strong>Exploration:</strong> Venus has been explored by several missions, including NASA’s Magellan spacecraft, which mapped the planet's surface using radar, and the Soviet Venera missions, which provided valuable data from surface landers despite their short operational lifespans due to the harsh conditions.</li>
                <li><strong>Clouds:</strong> The planet’s clouds are primarily composed of sulfuric acid droplets, making the atmosphere very corrosive. The clouds create a thick haze that reflects much of the sunlight, contributing to Venus's brightness in the night sky.</li>
            </ul>
            
               <p style="text-align: center; font-style: italic; margin-top: 20px; color: #333; font-size: 1.2em; background-color: #f9f9f9; padding: 6px; border-radius: 3px;">
            <strong>Click on the planet to close</strong>
        </p>
        `
    },
    Earth: {
        title: "Earth",
        text: `
            Earth is the third planet from the Sun and the only known planet to support life. It has a diverse environment with liquid water, a breathable atmosphere, and a suitable range of temperatures. Key characteristics of Earth include:
            
            <ul>
                <li><strong>Atmosphere:</strong> Earth’s atmosphere is composed mainly of nitrogen (78%) and oxygen (21%), with trace amounts of other gases like carbon dioxide and argon. This atmosphere supports life and protects the planet from harmful solar radiation.</li>
                <li><strong>Surface:</strong> Earth’s surface is about 71% water, with oceans, seas, and lakes, and 29% land, which includes continents and islands. The surface features various landscapes, including mountains, valleys, deserts, and forests.</li>
                <li><strong>Climate and Weather:</strong> Earth experiences a range of climates and weather patterns due to its tilt on its axis and its orbit around the Sun. This results in diverse weather phenomena and climate zones, from tropical rainforests to arctic tundras.</li>
                <li><strong>Geological Activity:</strong> Earth has an active geology with tectonic plate movements causing earthquakes, volcanic eruptions, and mountain formation. Its core is thought to be made of iron and nickel, contributing to its magnetic field.</li>
                <li><strong>Orbit and Rotation:</strong> Earth orbits the Sun once every 365.25 days, which constitutes a year. It rotates on its axis approximately every 24 hours, defining the length of a day. The tilt of Earth’s axis (about 23.5 degrees) causes seasonal variations.</li>
                <li><strong>Biosphere:</strong> Earth supports a vast array of life forms, from microorganisms to complex plants and animals. The biosphere is interconnected with other Earth systems like the atmosphere, hydrosphere, and lithosphere.</li>
                <li><strong>Moon:</strong> Earth has one natural satellite, the Moon, which influences tides and has been a subject of human exploration and study.</li>
            </ul>
            
            <p style="text-align: center; font-style: italic; margin-top: 20px; color: #333; font-size: 1.2em; background-color: #f9f9f9; padding: 6px; border-radius: 3px;">
                <strong>Click on the planet to close</strong>
            </p>
        `
    
    },
    Mars: {
        title: "Mars",
        text: `
            Mars is the fourth planet from the Sun in our solar system and is often called the "Red Planet" because of its reddish appearance, which is due to iron oxide or rust on its surface. It's about half the size of Earth and has a thin atmosphere composed mainly of carbon dioxide. Mars has the largest volcano in the solar system, Olympus Mons, and the deepest canyon, Valles Marineris. Scientists are particularly interested in Mars because it has seasons, polar ice caps, and evidence of past water, making it a key focus in the search for signs of past or present life.
            
            <ul style="font-size: 0.85em;"> <!-- Adjust font size for list items -->
                <li><strong>Geological Features:</strong> Mars has a diverse landscape with volcanoes, valleys, and polar ice caps. Olympus Mons, standing at about 22 km (13.6 miles) high, is nearly three times the height of Mount Everest and has a diameter of about 600 km (373 miles). Valles Marineris, the largest canyon, stretches over 4,000 km (2,500 miles) long, 200 km (125 miles) wide, and up to 7 km (4 miles) deep.</li>
                <li><strong>Climate and Atmosphere:</strong> Mars has a thin atmosphere, composed mostly of carbon dioxide (about 95.3%), with traces of nitrogen and argon. The atmospheric pressure is less than 1% of Earth’s, leading to extreme temperature variations. Daytime temperatures can reach up to about 20°C (68°F) near the equator but can plunge to -125°C (-193°F) at the poles during winter.</li>
                <li><strong>Water and Ice:</strong> Mars has evidence of ancient river valleys and lake beds, suggesting it once had liquid water. Today, water is primarily found in the form of ice. The planet has polar ice caps composed of water ice and dry ice (frozen carbon dioxide) that grow and recede with the seasons.</li>
                <li><strong>Moons:</strong> Mars has two small moons, Phobos and Deimos. Phobos, the larger of the two, orbits very close to Mars and is gradually spiraling inward, potentially leading to a future collision or breaking apart. Deimos orbits farther out and is slowly moving away from Mars.</li>
                <li><strong>Exploration:</strong> Mars has been explored by various spacecraft, including orbiters, landers, and rovers. Notable missions include NASA's Mars rovers like Curiosity and Perseverance, which have been studying the planet's geology, climate, and potential for past life. The Mars Reconnaissance Orbiter and Mars Express are key to understanding the planet’s atmosphere and surface from orbit.</li>
                <li><strong>Potential for Life:</strong> The search for life on Mars involves studying its geology and climate to understand past conditions. Some missions aim to return samples to Earth for more detailed analysis. The discovery of organic molecules and seasonal methane emissions adds intrigue to the search for past or present life.</li>
            </ul>
            
            <p style="text-align: center; font-style: italic; margin-top: 20px; color: #333; font-size: 1em; background-color: #f9f9f9; padding: 6px; border-radius: 3px;">
                <strong>Click on the planet to close</strong>
            </p>
    
        `
    },
    Jupiter: {
        title: "Jupiter",
        text: `
            Jupiter is the largest planet in our solar system, known for its massive size, powerful storms, and prominent bands of clouds. It’s a gas giant with a strong magnetic field and many moons, including the four largest known as the Galilean moons.
    
            <ul style="font-size: 0.95em;"> <!-- Adjust font size for list items -->
                <li><strong>Size and Composition:</strong> Jupiter has a diameter of about 86,881 miles (139,822 kilometers), making it about 11 times wider than Earth. It’s primarily composed of hydrogen and helium, with a potential core of rock and metal.</li>
                <li><strong>Atmosphere:</strong> The planet's atmosphere is known for its distinctive bands of clouds, which are created by differential rotation and varying chemical compositions. These bands are called "zones" and "belts" and contribute to Jupiter's striking appearance.</li>
                <li><strong>Great Red Spot:</strong> Jupiter is famous for the Great Red Spot, a massive storm that has been raging for at least 400 years. It’s about 1.3 times the diameter of Earth and showcases the planet's dynamic weather systems.</li>
                <li><strong>Magnetic Field:</strong> Jupiter has the strongest magnetic field of any planet in the solar system, which generates intense radiation belts around the planet. This magnetic field is produced by the movement of metallic hydrogen inside the planet.</li>
                <li><strong>Moons:</strong> Jupiter has 95 known moons, with the four largest—Io, Europa, Ganymede, and Callisto—discovered by Galileo Galilei in 1610. These moons are known as the Galilean moons and are of significant interest to scientists. Europa, for instance, is considered one of the top candidates for the search for extraterrestrial life due to its subsurface ocean.</li>
                <li><strong>Orbit and Rotation:</strong> Jupiter orbits the Sun at an average distance of about 484 million miles (778 million kilometers). It has a fast rotation period, taking just under 10 hours to complete one rotation, which contributes to its noticeable equatorial bulge.</li>
                <li><strong>Exploration:</strong> Jupiter has been explored by several spacecraft, including NASA’s Galileo orbiter, the Juno mission, and the Voyager probes. These missions have provided a wealth of information about the planet’s atmosphere, magnetic field, and moons.</li>
            </ul>
            
            <p style="text-align: center; font-style: italic; margin-top: 20px; color: #333; font-size: 1em; background-color: #f9f9f9; padding: 6px; border-radius: 3px;">
                <strong>Click on the planet to close</strong>
            </p>
        `

    },
    Saturn: {
        title: "Saturn",
        text: `
            Saturn is the sixth planet from the Sun and is best known for its extensive ring system, which makes it one of the most beautiful and striking planets in the solar system.
    
            <ul style="font-size: 1em;"> <!-- Adjust font size for list items -->
                <li><strong>Rings:</strong> Saturn's iconic rings are made of ice particles, rock debris, and dust. These rings are divided into several segments and are the most complex and prominent ring system in the solar system.</li>
                <li><strong>Size and Composition:</strong> Saturn is the second-largest planet in the solar system, with a diameter of about 72,367 miles (116,460 kilometers). Like Jupiter, it is a gas giant made primarily of hydrogen and helium.</li>
                <li><strong>Atmosphere:</strong> The atmosphere features bands of clouds, storms, and an unusual hexagonal storm at the north pole. Saturn's upper atmosphere consists of ammonia crystals, giving it a pale yellow color.</li>
                <li><strong>Moons:</strong> Saturn has over 80 confirmed moons. Titan, its largest moon, is larger than Mercury and has a thick atmosphere with rivers and lakes of liquid methane and ethane. Other notable moons include Enceladus, which has water-ice geysers, and Rhea, Tethys, and Dione.</li>
                <li><strong>Density:</strong> Saturn is the least dense planet in the solar system, so much so that it could float in water if there were a body of water large enough to hold it.</li>
                <li><strong>Magnetic Field:</strong> Saturn has a strong magnetic field, though not as strong as Jupiter's. It interacts with the solar wind, forming a magnetosphere that surrounds the planet.</li>
                <li><strong>Orbit and Rotation:</strong> Saturn takes about 29.5 Earth years to complete one orbit around the Sun. It has a rapid rotation, with a day lasting about 10.7 hours.</li>
                <li><strong>Exploration:</strong> The most detailed studies of Saturn came from NASA's Cassini mission, which orbited the planet from 2004 to 2017. Cassini revealed incredible details about Saturn's rings, moons, and atmosphere.</li>
            </ul>
    
            <p style="text-align: center; font-style: italic; margin-top: 20px; color: #333; font-size: 1em; background-color: #f9f9f9; padding: 6px; border-radius: 3px;">
                <strong>Click on the planet to close</strong>
            </p>
        `
    
    },
    Uranus: {
        title: "Uranus",
        text: `
            Uranus is the seventh planet from the Sun, known for its striking blue-green color and unique axial tilt. It’s an ice giant with extreme seasonal changes due to its unusual rotation.
    
            <ul style="font-size: 1.2em;"> <!-- Adjust font size for list items -->
                <li><strong>Physical Characteristics:</strong> Uranus has a diameter of about 31,518 miles (50,724 kilometers), making it about four times wider than Earth. It shares a similar composition with Neptune, consisting of hydrogen, helium, and ices such as water, ammonia, and methane.</li>
                <li><strong>Atmosphere:</strong> The planet's blue-green hue is caused by methane in the atmosphere, which absorbs red light and reflects blue and green wavelengths, giving Uranus its distinctive color.</li>
                <li><strong>Rotation:</strong> Uranus has an extreme axial tilt of about 98 degrees, meaning it rotates almost on its side. This causes unusual seasons, with each pole experiencing 42 years of sunlight followed by 42 years of darkness as it orbits the Sun.</li>
                <li><strong>Rings and Moons:</strong> Uranus has a faint ring system made up of dark, narrow rings. It also has 27 known moons, including Miranda, Ariel, Umbriel, Titania, and Oberon, which vary in size and composition.</li>
                <li><strong>Exploration:</strong> Most of what we know about Uranus comes from the Voyager 2 flyby in 1986, which provided valuable data on its atmosphere, moons, and rings.</li>
            </ul>
    
            <p style="text-align: center; font-style: italic; margin-top: 20px; color: #333; font-size: 1em; background-color: #f9f9f9; padding: 6px; border-radius: 3px;">
                <strong>Click on the planet to close</strong>
            </p>
        `
    
    },
    Neptune: {
        title: "Neptune",
        text: `
            Neptune is the eighth planet from the Sun, renowned for its vivid blue color and dynamic atmosphere. It is the third most massive planet and was the first to be discovered through mathematical predictions rather than direct observation.
    
            <ul style="font-size: 1em;"> <!-- Adjust font size for list items -->
                <li><strong>Size and Composition:</strong> Neptune has a diameter of about 30,598 miles (49,244 kilometers), making it nearly 3.9 times the size of Earth. The planet is primarily composed of hydrogen, helium, and methane, with a core likely made of rock and ice.</li>
                <li><strong>Orbit and Rotation:</strong> Neptune orbits the Sun at an average distance of approximately 2.8 billion miles (4.5 billion kilometers), taking around 165 Earth years to complete one orbit. Its day lasts about 16 hours, and it has an axial tilt similar to Earth's, causing seasonal changes.</li>
                <li><strong>Atmosphere:</strong> Neptune's deep blue color is due to the presence of methane, which absorbs red light and reflects blue. The planet is also known for having some of the strongest winds in the solar system, reaching speeds up to 1,300 miles per hour (2,100 kilometers per hour).</li>
                <li><strong>Great Dark Spot:</strong> Like Jupiter’s Great Red Spot, Neptune has a massive storm known as the Great Dark Spot, observed by Voyager 2 in 1989. The storm has changed over time, demonstrating the planet's turbulent atmosphere.</li>
                <li><strong>Moons:</strong> Neptune has 14 known moons, the largest of which is Triton. Triton has a retrograde orbit, moving in the opposite direction to Neptune's rotation, and features nitrogen geysers that shoot gas into space.</li>
                <li><strong>Rings:</strong> Neptune has a faint ring system composed of ice particles and dust. These rings were discovered in the 1980s and are named after notable astronomers: Adams, Le Verrier, Galle, and Lassell.</li>
                <li><strong>Exploration:</strong> NASA’s Voyager 2 spacecraft flew by Neptune in 1989, providing invaluable images and data that greatly expanded our knowledge of the planet and its system.</li>
            </ul>
    
            <p style="text-align: center; font-style: italic; margin-top: 20px; color: #333; font-size: 1em; background-color: #f9f9f9; padding: 6px; border-radius: 3px;">
                <strong>Click on the planet to close</strong>
            </p>
        `
    
    },
    Moon: {
        title: "The Moon",
        text: "The Moon is Earth's only natural satellite and influences tides and night-time illumination."
    }
};

// Function to show the planet message box
// Function to show the planet message box
// Function to show the planet message box
// Function to show the planet message box
function showPlanetMessage(celestialBody) {
    const message = messages[celestialBody.userData.name];
    if (message) {
        const titleElem = document.getElementById('planetMessageTitle');
        const textElem = document.getElementById('planetMessageText');
        const planetMessageBox = document.getElementById('planetMessageBox');

        if (titleElem && textElem && planetMessageBox) {
            titleElem.textContent = message.title;
            textElem.innerHTML = message.text; // Use innerHTML to render HTML tags

            // Check if the message box is already visible
            if (planetMessageBox.style.display === 'flex') {
                // Hide the message box if it's already visible
                planetMessageBox.style.opacity = '0'; // Start fade-out transition
                setTimeout(() => {
                    planetMessageBox.style.display = 'none'; // Hide message box after transition
                }, 500); // Duration of the fade-out transition
            } else {
                // Show the message box if it's hidden
                planetMessageBox.style.display = 'flex'; // Ensure the message box is displayed
                setTimeout(() => {
                    planetMessageBox.style.opacity = '1'; // Trigger the fade-in transition
                }, 10); // Short delay to ensure transition is applied
            }
        } else {
            console.error('Message elements not found');
        }
    } else {
        console.error('Message not found for:', celestialBody.userData.name);
    }
}

// Add event listener to the close button
document.getElementById('closePlanetMessageButton')?.addEventListener('click', function() {
    const planetMessageBox = document.getElementById('planetMessageBox');
    if (planetMessageBox) {
        planetMessageBox.style.opacity = '0'; // Start fade-out transition
        setTimeout(() => {
            planetMessageBox.style.display = 'none'; // Hide message box after transition
        }, 500); // Duration of the fade-out transition
    }
});

// Setup planet events to toggle message box visibility
function setupPlanetEvents() {
    const planets = document.querySelectorAll('.planet'); // Adjust this selector to match your planet elements
    planets.forEach(planet => {
        planet.addEventListener('click', function() {
            showPlanetMessage(this); // Call the function to show or hide the message
        });
    });
}

// Call setupPlanetEvents after your planets are rendered
setupPlanetEvents();

// Handle the Enter button click to close the starting message overlay
document.getElementById('messageButton')?.addEventListener('click', function() {
    const messageOverlay = document.getElementById('messageOverlay');
    if (messageOverlay) {
        messageOverlay.style.display = 'none';
    }
});

// Add event listener to the close button
document.getElementById('closePlanetMessageButton')?.addEventListener('click', function() {
    const planetMessageBox = document.getElementById('planetMessageBox');
    if (planetMessageBox) {
        planetMessageBox.style.opacity = '0'; // Start fade-out transition
        setTimeout(() => {
            planetMessageBox.style.display = 'none'; // Hide message box after transition
        }, 500); // Duration of the fade-out transition
    }
});

// Optional: Add event listener to the planet to close message box
function setupPlanetEvents() {
    const planets = document.querySelectorAll('.planet'); // Adjust this selector to match your planet elements
    planets.forEach(planet => {
        planet.addEventListener('click', function() {
            const planetMessageBox = document.getElementById('planetMessageBox');
            if (planetMessageBox) {
                planetMessageBox.style.opacity = '0'; // Start fade-out transition
                setTimeout(() => {
                    planetMessageBox.style.display = 'none'; // Hide message box after transition
                }, 500); // Duration of the fade-out transition
            }
        });
    });
}

// Call setupPlanetEvents after your planets are rendered
setupPlanetEvents();



// Add event listener to the close button
document.getElementById('closePlanetMessageButton')?.addEventListener('click', function() {
    const planetMessageBox = document.getElementById('planetMessageBox');
    if (planetMessageBox) {
        planetMessageBox.style.display = 'none';
        planetMessageBox.style.opacity = '0'; // Hide the message box with a fade-out effect
    }
});

// Handle the Enter button click to close the starting message overlay
document.getElementById('messageButton')?.addEventListener('click', function() {
    const messageOverlay = document.getElementById('messageOverlay');
    if (messageOverlay) {
        messageOverlay.style.display = 'none';
    }
});
