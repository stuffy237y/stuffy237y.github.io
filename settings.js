var thingy;
var file;

// file getter
const fileInput = document.querySelector('#file');

fileInput.addEventListener('change', (e) => {
    file = e.target.files[0];
    thingy = URL.createObjectURL(file);
});

//file and title changer

document.getElementById('submit').addEventListener('click', () => {
    //if (file == null && customFile == null) {alert('upload file to the upload area or paste url of the image in the text box below the file upload to have a favicon')}
    localStorage.setItem("title", document.getElementById("title").value)
    localStorage.setItem('favicon', thingy)
    var script = document.createElement("script");
    script.src = "favicon.js";
    var scriptContainer = document.getElementById('script-container')
    scriptContainer.appendChild(script);
})



