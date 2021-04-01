alert("A");
function onload() {
    createStyle();
    checkCookie();
}



function createStyle() {
    var styles = document.getElementsByTagName("link");
    var count = styles.length;
    var place = document.getElementById("styles");

    
    for (i=0; i<count; i++) {
        var el = document.createElement("a");
        var name = styles[i].title;
        styles[i].disabled = true;
        el.innerHTML = name;
        el.setAttribute("onclick", "styleSelect(\"" + name + "\")");
        place.appendChild(el);
        place.appendChild(document.createElement('br'));
    }
}

function styleSelect(name) {
    
    var styles = document.getElementsByTagName("link");
    var count = styles.length;
    for (var i = 0; i<count; i++) {
        var style = styles[i] 
        if (style.getAttribute("title")==name) {
           
            
            style.disabled = false;
            console.log(style.getAttribute("title") + " enabled");
        } else {
            
            style.disabled = true;
            console.log(style.getAttribute("title") + " disabled");
        }
        setCookie("style", name, 365); 
        //alert(document.cookie);
    }
} 

function setCookie(name, style, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + style + ";" + expires + ";path=/";
}

function checkCookie() {
    var cookie = getCookie("style");
    styleSelect(cookie);
}

function getCookie(cname) {
    var style = "";
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
    }
    return "";
}