// gets current time
let currentTime = document.getElementById("current-time");

setInterval(() =>{
    const t = new Date();
    currentTime.innerHTML = "Current time: " + t.toLocaleTimeString() + " (EDT)";
},1000)

// gets current date
let currentDate = document.getElementById("current-date");
const d = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

currentDate.innerHTML = "Today is " + d.toLocaleDateString('en-us', options);
