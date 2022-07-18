var i = 0;
while(i<5){
    console.log("Hola Elemental");
    i++;
}

for(let i=0; i<10; i++){
    console.log("Hola Elemental For");
}

for(var i=1; i<=10; i++){
    console.log("Numero "+i);
}

var arreglos= [23, "Hola Elemental", true, "❤️"];
console.log(arreglos[100]);

for(var i=0; i<arreglos.length; i++){
    console.log(arreglos[i])
}

arreglos[3]= "⭐";
console.log(arreglos);

arreglos.push("New");
console.log(arreglos);

var arreglos= [23, "Hola Elemental", true, "❤️"];
arreglos.splice(0,2, "Hola web");
console.log(arreglos);

let frutas = ["Manzana", "Banana"]

console.log(frutas.length)


const array = ["Hola","mubndo", 3, "veces"];
for(var i=0; i<array.length; i++){
    console.log(array)
}