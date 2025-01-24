/* 
* dynamically fills <div> with particle elements 
*/
document.addEventListener("DOMContentLoaded", () => {
    const particlesContainer = document.querySelector(".particles");
    console.log(particlesContainer); // ensure correct element is selected

    // array of random indices
    const particleIndices = [
        11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25,
        18, 21, 15, 13, 26, 17, 13, 28, 11, 12, 24, 10,
        14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13,
        26, 17, 13, 28
    ];

    // loop through each indice and create corresponding <span>
    particleIndices.forEach(index => {
        const span = document.createElement("span");
        span.style.setProperty('--i', index); // set --i property for animation duration
        particlesContainer.appendChild(span); // append <span> to container
    });

    // delay after every 10 particles to avoid performance issues
    if (i % 10 === 0) {
        setTimeout(() => createParticles(), 10);
    }
});

/* 
* creates and formats current date and time on splash screen 
*/
let currentTime = document.getElementById("current-time"); // gets current time

setInterval(() =>{
    const t = new Date();
    currentTime.innerHTML = "Current time: " + t.toLocaleTimeString() + " (EDT)"; // formats time
},1000)

let currentDate = document.getElementById("current-date");
const d = new Date(); // gets current date

// formates date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDate.innerHTML = "Today is: " + d.toLocaleDateString('en-us', options);
