window.onload = function () {
    let sketchGrid = document.getElementById("sketch-grid");
    console.log(sketchGrid);
    for (let i = 0; i < 16**2; i++) {
        var sketchElement = document.createElement("div");
        sketchElement.setAttribute('class', 'sketch-element');
        sketchElement.textContent=i;
        sketchGrid.appendChild(sketchElement);
    }

}