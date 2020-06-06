/*
function magia(){
    let cuadrado=document.getElementById("cuadrado");
    cuadrado.innerHTML+="<h1>holaS</h1>"
}

function borrar() {
    let cuadrado=document.getElementById("cuadrado");
    cuadrado.innerHTML=""; 
}


let notas = [];

//console.log((notas[0]+notas[1]+notas[2])/3)

let promedio = 0;
//console.log(notas.length);
let suma=0;
for (let index = 0; index < notas.length; index++) {

    const element = notas[index];
    suma+=element;
    
}
promedio=suma/notas.length;
console.log("promedio : "+promedio.toString());

suma=0;//2
for (let index = 0; index < notas.length; index++) {
    if( notas[index] == 2){
        const element = notas[index];
        suma+=element;
    }
}
console.log(suma)

suma=0;
notas.forEach(element => {if( element == 2){suma+=element;}});

*/

let notas = [];
function sumarNota (){

    let nota =document.getElementById("nota").value;


    notas.push(parseInt(nota, 10));

    console.log(notas);
    suma=0;
    for (let index = 0; index < notas.length; index++) {
       suma=suma+notas[index];
    }
    let resultado=document.getElementById("resultado");
    console.log(suma);
    console.log(notas.length);
    let promedio=(suma/notas.length);
    resultado.innerHTML=""+promedio+""; 
    

}



