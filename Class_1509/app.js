const autumnPastelColors = 
    [
    "#FFD1DC", // Pastel Pink
    "#AEC6CF", // Pastel Blue
    "#B5EAD7", // Pastel Green
    "#D9AFD9", // Pastel Purple
    "#FFF3E1"  // Pastel Yellow
    ];
let index = 0; 

function changeBackgroundColor() {
    document.body.style.backgroundColor = autumnPastelColors[index];

    index = (index + 1) % autumnPastelColors.length;
}

function startColorLoop() {
    setInterval(changeBackgroundColor, 3000); // Change every 5 seconds
}

window.addEventListener("load", startColorLoop);
