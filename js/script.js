function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

window.onload = function () {

    function generateGrid(gridSize) {
        let sketchGrid = document.getElementById("sketch-grid");
        console.log(sketchGrid);
        for (let i = 0; i < gridSize ** 2; i++) {
            flexBasisValue=100/gridSize;

            var sketchElement = document.createElement("div");
            sketchElement.setAttribute('class', 'sketch-element');
            sketchElement.style.flexBasis=`${flexBasisValue-0.5}%`;
            sketchElement.textContent = i;
            sketchGrid.appendChild(sketchElement);
        }
    }

    generateGrid(5);

    document.querySelectorAll('.sketch-element').forEach(sketchElement => {
        sketchElement.addEventListener('mouseenter', event => {
            //handle mouse enter
            sketchElement.style.border = "1px dotted orange";
        })
    });
    let changeGridButton = document.getElementById("change-grid-size");
    console.log(changeGridButton);


    document.getElementById("change-grid-size").addEventListener(
        'click', function (event) {
            let gridSizeRequest = prompt("What grid size would you like (per side)?");
            console.log(typeof (gridSizeRequest));
            if (gridSizeRequest >= 100 || !isNumeric(gridSizeRequest)) {
                alert("Please choose a number less than 100 for the grid size.")
            }
            else {
                let sketchGrid = document.getElementById("sketch-grid");
                while (sketchGrid.firstChild) {
                    sketchGrid.removeChild(sketchGrid.firstChild);
                }

            }
        }
    );





}