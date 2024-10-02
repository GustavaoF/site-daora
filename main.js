// function soma (num1,num2){
//     return num1+num2;
// }

// console.log(soma(70,7));

// function areaQuadrado(lado){
//     return lado**2;
// }

// console.log("Area=" + areaQuadrado(7));


// let n1 = parseInt(prompt('numero 1?'));
// let n2 = parseInt(prompt('numero 2?'));
// let n3 = parseInt(prompt('numero 3?'));

// let media = function (v1, v2, v3){
//     return (v1+v2+v3)/3;
// }

// console.log(media(n1, n2, n3))

let i = 0;
let estados = ['RS', 'SC', 'PR', 'SP', 'MG', 'RJ', 'ES', 'MT', 'MS', 'GO', 'DF', 'RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 'CE', 'RN', 'PE', 'PB', 'AL', 'SE', 'BA']

while (i<estados.length){
    console.log(estados[i]);
    i=i+1;
}

for (let index = 0; index < estados.length; index++) {
    console.log(estados[index]);


}