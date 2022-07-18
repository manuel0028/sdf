function holaMundo(nombre){
    console.log("Lista de compras"+ nombre);
}
holaMundo(null);


const suma = (valor =>{return valor + 2})

console.log(suma(6));

var variableGlobal = 'esto es una variable global'

function imprimir(){
    console.log(`${variableGlobal}+ llamada dentro de una funcion`);
}

var variableGlobal = 'esto es una variable global'

imprimir();
function variables(){
    variableGlobal = 'esto es el cambio'
}
variables();
console.log(variableGlobal);

function variable(){
    var variablelocal = variableGlobal = 'variable Global';
}

variable();
console.log(variableGlobal);


function local(){
    var variablelocal= 'esto es una variable local';
    console.log(variablelocal);
}

local();
var variablelocal = 'este es el cambio'
console.log(variablelocal);

function a(){
    var variable1 = 'variable externa';
    return function (){
        var variable2 = 'variable interna';
        console.log(variable1);
    };
}

a()();


function block(){
    const contador = 5;
    for( let i= 0; i < contador;  i++ ){
        console.log(i)
    }

    console.log(i);
}

block();

if(true){
    console.log('holaMundo');
}

if(1==2){
    console.log('Son iguales');
}

var num = 10;
if(num<10){
    console.log('el numero es menor a 10');
}else{
    console.log('el numero es mayor a 10');
}

var color = 'negro';
if(color === 'rojo' || color === 'negro'){
    console.log('excelente elección')
}else{
    console.log('mala eleccion')
}


if(num >= 10 && num <= 20) {
    console.log("El número está entre 10 y 20")
}

function sum(a, b){
    console.log(a+b);
}
sum(3+4);