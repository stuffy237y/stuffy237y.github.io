var fragmentIdentifier = window.location.hash.slice(1)

var iframe = document.createElement('iframe');

iframe.src = "https://reading-labs.github.io/games/" + fragmentIdentifier

iframe.style.border='none';
iframe.style.width = '100%' ;
iframe.style.height = "100vh"
iframe.style.margin = '0';

document.body.appendChild(iframe);

var back = document.getElementById('return')
back.addEventListener('click', ()=>{
    window.location.href = "https://reading-labs.github.io"
})
