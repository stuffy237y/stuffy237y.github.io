var favicon = localStorage.getItem("favicon")
var title = localStorage.getItem("title")
if (favicon === null){
    var link = document.querySelector('link[rel="shortcut icon"]');
    link.setAttribute('href', 'https://ssl.gstatic.com/classroom/ic_product_classroom_96.png');
    document.appendChild(link)
    document.title = "Home"
} else {
    var link = document.querySelector('link[rel="shortcut icon"]');
    link.setAttribute('href', favicon);
    document.head.append(link)
    document.title = title
}