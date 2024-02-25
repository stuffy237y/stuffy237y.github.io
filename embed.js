var popup= document.getElementById('popup')

popup.addEventListener('click', function(event) {
    event.preventDefault();
    var win = window.open('about:blank')
    win.document.title = "Home"
    var link = document.querySelector('link[rel="shortcut icon"]');
    link.setAttribute('href', 'https://ssl.gstatic.com/classroom/ic_product_classroom_96.png');
    win.document.body.style.margin = '0'
    var iframe = win.document.createElement('iframe');
    iframe.style.border='none';
    iframe.style.width = '100%' ;
    iframe.style.height = '100%' ;
    iframe.style.margin = '0';
    iframe.src = 'index.html';
    win.document.body.appendChild(iframe);
    win.document.head.append(link)
    window.location.replace('https://classroom.google.com')
  });

    var win2 = window.open('about:blank')
    win2.document.title = "Home"
    var link2 = document.querySelector('link[rel="shortcut icon"]');
    link2.setAttribute('href', 'https://ssl.gstatic.com/classroom/ic_product_classroom_96.png');
    win2.document.body.style.margin = '0'
    var iframe2 = win2.document.createElement('iframe');
    iframe2.style.border='none';
    iframe2.style.width = '100%' ;
    iframe2.style.height = '100%' ;
    iframe2.style.margin = '0';
    iframe2.src = 'index.html';
    win2.document.body.appendChild(iframe2);
    win2.document.head.append(link2)
