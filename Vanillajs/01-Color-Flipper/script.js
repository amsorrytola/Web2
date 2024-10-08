function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const newColor = `#${randomColor.padStart(6, '0')}`;
    document.getElementById("maindiv").style.backgroundColor = newColor;
    document.getElementById("colorname").innerHTML = `<h1>Background Color: ${newColor}</h1>`;
}

function change2Color() {
    const Color= ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'cyan', 'magenta', 'aqua', 'lime', 'olive', 'navy', 'teal', 'maroon', 'silver', 'gold'];
    const randomColor = Color[Math.floor(Math.random() * Color.length)];
    //const newColor = `#${randomColor.padStart(6, '0')}`;
    document.getElementById("maindiv").style.backgroundColor = randomColor;
    document.getElementById("colorname").innerHTML = `<h1>Background Color: ${randomColor}</h1>`;
}
