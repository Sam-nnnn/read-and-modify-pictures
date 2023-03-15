const fileInputElement = document.getElementById("fileInput");
const outputText = document.getElementById("outputText");
const outputImage = document.getElementById("outputImage");
const cssInput = document.querySelectorAll(".input");
const changeStyleButton = document.getElementById("changeStyleButton");

fileInputElement.onchange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();    
    reader.addEventListener("load",(e) => {
        outputImage.setAttribute("src", e.target.result)
    })
    if (file) {
        reader.readAsDataURL(file);
    }
}

changeStyleButton.onclick = (e) => {
    e.preventDefault();
    let result = "";
    // outputText.innerText =  JSON.stringify(cssInput.);
    for (i = 0; i < cssInput.length; i++ ) {
        const data = cssInput[i];
        const id = data.getAttribute("id");
        const value = data.value
        if (value){
            if (id === "css-blur") {
                result = result.concat(` blur(${value}px) `)
            }
            if (id === "css-contrast") {
                result = result.concat(` contrast(${value}%) `)
            }
            if (id === "css-graycale") {
                result = result.concat(` grayscale(${value}%) `)
            }
            if (id === "css-hueRotate") {
                result = result.concat(` hue-rotate(${value}deg) `)
            }
        }
    }
    outputText.innerText = result;
    outputImage.style.filter = result;

}

