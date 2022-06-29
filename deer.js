const imageContainer = document.querySelector(".svg-image-container");
const menuContainer = document.querySelector(".menu-container");

imageContainer.addEventListener('click', showMenu);

function showMenu(e) {
    // if there is already a box, remove it
    if (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.firstChild)
    };

    // create the info box container
    const newBoxDiv = document.createElement('div');
    // add default css
    newBoxDiv.classList.add("info-box");

    // create the color name
    const newParagaraph = document.createElement('p');
    let color = e.target.getAttribute("class");
    newParagaraph.innerHTML = (allColors[color]);

    // create the colored box
    const newSquare = document.createElement('div');
    newSquare.classList.add("color-box");
    newSquare.classList.add(color);

    // append name and colored box to info box
    newBoxDiv.appendChild(newParagaraph);
    newBoxDiv.appendChild(newSquare);

    // center info box on click coordinates
    let click_x = e.clientX;
    let click_y = e.clientY - 16;
  
    // add units for css
    let click_x_in_pixels = click_x+'px';
    let click_y_in_pixels = click_y+'px';

    // add click coordinates to info box css
    newBoxDiv.style.left = click_x_in_pixels;
    newBoxDiv.style.top = click_y_in_pixels;

    // add the new info box to the DOM
    boxContainer.appendChild(newBoxDiv);

    // calculate translation to 2/3 window over, 1/2 window down
    let window_width = window.innerWidth;
    let window_height = window.innerHeight;
    let translate_x = window_width * 2/3 - click_x - 80;
    let translate_y = window_height * 1/2 - click_y - 128;
  
    // don't translate until rendered, using setTimeout()
    setTimeout( () => {
        // grow size
        newBoxDiv.style.width = "var(--box-width)";
        newBoxDiv.style.height = "var(--box-height)";

        // translate location
        newBoxDiv.style.transform = 'translate('+translate_x+'px, '+translate_y+'px)';
  
        // set final opacity to 1
        newBoxDiv.style.opacity = '1';
    }, 10);
}

