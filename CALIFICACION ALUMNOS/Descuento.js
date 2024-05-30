var monto ;
var descuento ;

monto = parseInt(prompt("ingrese en total del monto"));
 
for (var i = 0; i < 5; i++) { 
    if (monto > 100) {
        descuento = monto * 0.1; 
    } else {
        descuento = monto * 0.02; 
    }
    monto = descuento; 

    alert("Descuento aplicado:"+descuento);
    alert("Monto actual:"+monto);
}
