let numbers = max(100,28, 19);

function max(a,b,c){
    if (a>b && a>c){
        return a;
    }
    if (b>a && b>c){
        return b;
    }
    if (c>a && c>b){
        return c;
    }
    else return NaN;
}

console.log(numbers);