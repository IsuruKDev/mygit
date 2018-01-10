var foo = {
    a:42
}

var bar = Object.create(foo);

bar.b = "Rock n Roll";

console.log(bar.b);
console.log(bar.a);

