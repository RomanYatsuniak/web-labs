let a = 1;
function foo() {
    a++;
    let b = 1;
}
foo();
//b++;
console.log(a);

var c = document.getElementsByTagName('body');

function foo1(f) {
    this.onclick(alert('A'));
}

foo1(c);
