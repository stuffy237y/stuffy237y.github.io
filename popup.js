var popup= document.getElementById('popup')
popup.style.visibility = "visible"
var script = document.createElement("script");
script.src = "embed.js";
var shouldLoadScript = true; 

var scriptContainer = document.getElementById("script-container");
if (window.parent.location.href !== 'about:blank'){
    popup.style.visibility = "visible"
    scriptContainer.appendChild(script);
} else {
   popup.style.visibility = "hidden"
   console.log(window.parent.location.href)
}
  scriptContainer.appendChild(script);
  popup.addEventListener('click', () => {
    scriptContainer.removeChild(script);
  })

