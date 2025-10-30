
let nombre = prompt("Ingresa tu nombre");
let nota1 = parseFloat(prompt("Ingresa la nota 1"));
let nota2 = parseFloat(prompt("Ingresa la nota 2"));
let nota3 = parseFloat(prompt("Ingresa la nota 3"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 3.5) {
    console.log("Felicidades " + nombre + ", has aprobado con un promedio de " + promedio);
}

else {
    console.log("Lo siento " + nombre + ", has reprobado con un promedio de " + promedio);
}
