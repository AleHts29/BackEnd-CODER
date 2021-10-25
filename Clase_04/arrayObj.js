// Obtenga la siguiente información de dicho array
// A) Los nombres de los productos en un string separados por comas.
// B) El precio total
// C) El precio promedio
// D) El producto con menor precio
// E) El producto con mayor precio
// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola



const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]




listNombres = (productos) =>{
    const arrNombre = []

    productos.forEach(element => {
        let nombre = element.nombre
        arrNombre.push(nombre)
    });
    return arrNombre.join()
}
// A:
console.log(listNombres(productos))


precioTotal = (arrProducts) => {
    let total = 0;

    arrProducts.forEach(element => {
        total += element.precio;
    })

    return total.toFixed(2);
}
// B:
let totalPrice = precioTotal(productos)
console.log(totalPrice)



precioPromedio = (amount) => {
    let precioPromedio = amount/(productos.length);    
    return precioPromedio.toFixed(2);
}
// C:
let average = precioPromedio(totalPrice)
console.log(average)




lowerPrice = (arrProducts) => {
    
    const  auxArr = (arrProducts.sort((a, b) => a.precio - b.precio));
    return (auxArr[0].precio).toFixed(2)
}
// D:
let lowerPriceProduct = lowerPrice(productos)
console.log(lowerPriceProduct)


lowerPrice = (arrProducts) => {
    
    const  auxArr = (arrProducts.sort((a, b) => b.precio - a.precio));
    return (auxArr[0].precio).toFixed(2)
}
// D:
let maxPriceProduct = lowerPrice(productos)
console.log(maxPriceProduct)
