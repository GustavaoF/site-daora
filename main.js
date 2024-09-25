function soma (num1,num2){
    return num1+num2;
}

console.log(soma(70,7));

function areaQuadrado(lado){
    return lado**2;
}

console.log("Area=" + areaQuadrado(7));

let media = function (v1, v2, v3){
    let v1 = prompt('numero 1?');
    let v2 = prompt('numero 2?');
    let v3 = prompt('numero 3?');
    return (v1+v2+v3)/3;
}

console.log(media(3,7,86))