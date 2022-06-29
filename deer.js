const imageContainer = document.querySelector(".svg-image-container");
const menuContainer = document.querySelector(".menu-container");

imageContainer.addEventListener('click', showMenu);

function showMenu(e) {

    // if there is already a menu, remove it
    if (menuContainer.firstChild) {
        menuContainer.removeChild(menuContainer.firstChild)
    };

    // get name of area in image that was clicked
    let targetName = e.target.classList[0];
    let targetNameCapitalized = targetName.charAt(0).toUpperCase() + targetName.slice(1);

    // create the menu div
    let newMenuDiv = document.createElement('div');
    newMenuDiv.classList.add("menu");

    // create video link
    let newVideoLink = document.createElement('a');
    newVideoLink.href = `https://fromfieldtoplate.com/video/${targetName}`;
    let videoLinkLabel = document.createTextNode(`${targetNameCapitalized} Video`);
    newVideoLink.appendChild(videoLinkLabel);
    newVideoLink.classList.add("video-link");





    // create the color name
    const newParagaraph = document.createElement('p');
    let color = e.target.getAttribute("class");
    newParagaraph.innerHTML = (allColors[color]);

    // create the colored box
    const newSquare = document.createElement('div');
    newSquare.classList.add("color-box");
    newSquare.classList.add(color);

    // append name and colored box to info box
    newMenuDiv.appendChild(newParagaraph);
    newMenuDiv.appendChild(newSquare);

    // center menu on click coordinates
    let click_x = e.clientX;
    let click_y = e.clientY - 16;
  
    // add units for css
    let click_x_in_pixels = click_x+'px';
    let click_y_in_pixels = click_y+'px';

    // add click coordinates to menu css
    newMenuDiv.style.left = click_x_in_pixels;
    newMenuDiv.style.top = click_y_in_pixels;

    // add the new menu to the DOM
    menuContainer.appendChild(newMenuDiv);

    // calculate translation to 2/3 window over, 1/2 window down
    let window_width = window.innerWidth;
    let window_height = window.innerHeight;
    let translate_x = window_width * 2/3 - click_x - 80;
    let translate_y = window_height * 1/2 - click_y - 128;
  
    // don't translate until rendered, using setTimeout()
    setTimeout( () => {
        // grow size
        newMenuDiv.style.width = "var(--box-width)";
        newMenuDiv.style.height = "var(--box-height)";

        // translate location
        newMenuDiv.style.transform = 'translate('+translate_x+'px, '+translate_y+'px)';
  
        // set final opacity to 1
        newMenuDiv.style.opacity = '1';
    }, 10);
}

