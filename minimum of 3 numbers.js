function min(a,b,c){
    if(a<b && a<c){
        return a;
    }
    if(b<a && b<c){
        return b;
    }
    if(c<a && c<b){
        return c;
    }
    else return NaN;
}

let a = 2;
let b = 3;
let c = 5;
console.log(min(a,b,c));