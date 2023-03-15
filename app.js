const fileInputElement = document.getElementById("fileInput");
const outputText = document.getElementById("outputText");
const outputImage = document.getElementById("outputImage");
const cssRotate = document.getElementById("css-hueRotate");
const changeStyleButton = document.getElementById("changeStyleButton");

fileInputElement.onchange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();    
    reader.addEventListener("load",(e) => {
        outputImage.setAttribute("src", e.target.result)
        outputText.innerText = e.target.result;
    })
    if (file) {
        reader.readAsDataURL(file);
    }
}

changeStyleButton.onclick = (e) => {
    e.preventDefault()
    outputImage.style.filter = `blur(${Number(cssRotate.value)}px)`;

    outputText.innerText = JSON.stringify(outputImage.style);
}