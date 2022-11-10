
//Valido si es un numero, porque el valor que el usuario tiene que ingresar debe ser un numero.
while(true){
    var precio = parseFloat(prompt("Ingrese el precio del producto: "))

    if (!isNaN(precio) && precio != null && precio != ""){
        console.log("Es un numero, puede continuar"); 
        break;
    }
    else{
        alert("No es un numero, debe intentarlo de nuevo")
    }continue;
}

//Hacemos que me muestre los dos decimales
preciocostodecimal = precio.toFixed(2);
console.log("El precio del producto es: "+ preciocostodecimal);

//Creo una funcion que me calcula el IVA
function Iva (precio){
    return (precio * 0,21);
}

//Alojo la función en una variable y hago lo mismo que arriba
var funcioniva = Iva(precio);
ivaendecimal = funcioniva.toFixed(2);
console.log("El IVA del producto: "+ ivaendecimal);

//Creo una funcion que ahora me sume el IVA al precio original
function Sumaiva (Precio){
    return (precio + (precio*0,21));

}

//Mismo proceso de arriba
var funcionsumaiva = Sumaiva(precio);
precioconiva = funciosumaiva.toFixed(2);
console.log("El precio con IVA es: "+ precioconiva);



