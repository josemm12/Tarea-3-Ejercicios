var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 === num2) {
    alert("Los números son iguales.");
} else if (num1 > num2) {
   
    var suma = num1 + num2;
    alert("La suma de los números es: " + suma);
} else {
 
    var num1Cuadrado = num1 * num1;
    var num2Cuadrado = num2 * num2;
    var sumaCuadrados = num1Cuadrado + num2Cuadrado;
    alert("La suma de los cuadrados de los números es: " + sumaCuadrados);
}
