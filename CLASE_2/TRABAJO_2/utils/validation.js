// function isValidEmail(email) {
//     return email.includes('@');    //CODIGO MAL
// }

//El error es que si el email está vacío (""), el código falla o no debería validarse.



//CODIGO CORREGIDO:
function isValidEmail(email) {
  if (!email) return false; // Maneja caso vacío
    return email.includes('@');
}

console.log(isValidEmail(""));         // false
console.log(isValidEmail("ana@mail")); // true
