document.title=document.getElementsByTagName('input')[0].value;
document.getElementById('akapit').style.backgroundColor='red';
let a = document.createElement('div').innerHTML="<p>hello</p>";
document.body.appendChild(a);
function foo(){
    return "rgb("+Math.round(255*Math.random(0,255))+", "+ Math.round(255*Math.random(0,255))+ ", "+ Math.round(255*Math.random(0,255))+")";
}
function mojaFunkcja() {
    var p = document.createElement('p');
    var t = document.createTextNode("This is a paragraph.");
    p.appendChild(t);
    console.log(Math.round(255*Math.random(0,255)));
    var col = foo();
    p.style.backgroundColor=col;

    document.body.appendChild(p);
    p.addEventListener('click', function colChange(){

        alert(foo());
    });
    p.addEventListener('mouseup', function col(){
        this.style.backgroundColor=foo();
    });
}
document.getElementsByTagName('p');
function foo(){

}
setInterval(function(){
    t=document.getElementById("Clock");
    var t = document.innerHTML(new Date());

},1000);

myElement = document.createElement('h1');
myElement.innerText = 'hello';

document.body.appendChild(myElement);
myElement.innerHTML='hi';

document.querySelector("#btn").onclick="mojaFunkcja(hello)";
