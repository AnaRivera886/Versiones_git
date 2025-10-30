let pares = 0;
let impares = 0;
let i = 1;

while (i <= 30) {
    if (i % 2 == 0) {
        console.log(i +  "Es par")
        pares++;       
        i++; 
    }   
    else {
        console.log(i +  "Es impar")
        impares++;
        i++;
    }
}
