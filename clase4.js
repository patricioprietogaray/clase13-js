////// Factura mejorada

// formato de tipos compuesto: array de objetos
const electrodomesticos = [
    {nombre:'Televisor', precio: 40000, color:'Gris'},
    {nombre:'Heladera', precio: 100000, color:'Blanco'},
    {nombre:'PC', precio: 100000, color:'Negro'},
    {nombre:'Licuadora', precio: 10000, color:'Rojo'},
    {nombre:'Aspiradora', precio: 20000, color:'Amarillo'},
    {nombre:'Parlante', precio: 50000, color:'Negro'},
    {nombre:'Microondas', precio: 20000, color:'Azul'},
    {nombre:'Lavarropa', precio: 70000, color:'Blanco'},
]

const impuestosPorProductos=[
    {nombre:'IVA', importe: 0.21},
    {nombre:'Importación', importe: 0.3},
    {nombre:'Ingresos Brutos', importe: 0.1},
]

// funcion tendra dos entradas: productos e impuestos
function imprimirFactura(productos, impuestos) {

    let total = 0;

    // insertaremos info
    let items = ['Lista de precios'];
    // let precioConImpuestos = 0;
    // let precioSinImpuestos = 0;
    // let impuestosSobrePrecio = 0;


    // recorro todo el objeto de electrodomesticos
    for(let i=0; i<productos.length; i++) {

        const iva = productos[i].precio * impuestos[0].importe;
        const importacion = productos[i].precio * impuestos[1].importe;
        const ingresosBrutos = productos[i].precio * impuestos[2].importe;

        const precioConImpuestos = productos[i].precio + iva + importacion + ingresosBrutos;
        
        items.push(`Producto: ${productos[i].nombre}. $ ${precioConImpuestos}.`)
        total = total + precioConImpuestos;

    }
    items.push(`Total a cobrar $${total}.-`)
    return items;
}

const factura = imprimirFactura(electrodomesticos, impuestosPorProductos);

console.log(factura);

//////

let edad = 30; // scope global o en la raiz

if (true) {
    let nombre='Juan';
    let edad=40;
    // puede mostrar nombre porque esta definido en el nivel actual
    console.log('leo edad desde el 1er sub scope (alcance): ', edad, nombre);

    if (true) {
        let edad=50;
        // puede mostrar nombre porque esta definido en el nivel superior
        console.log('leo edad desde el 2do sub scope (alcance): ', edad, nombre);
    }
  
}

// no puede mostrar nombre porque no esta definido en raiz y no puede tomar el dato
// desde un scope inferior.
console.log('leo edad desde el root scope (alcance): ', edad, nombre);

// cuando se buscan datos se fijará primero en cada scope o alcance local,
// luego en el scope superior y si no lo encuentra alli buscará en el siguiente
// superior hasta llegar a variable global que se encuentra en el scope raiz 

//////
