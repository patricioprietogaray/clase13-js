const electrodomesticos = [
    {id: 1, nombre:'Televisor', precio: 40000, color:'Gris'},
    {id: 2, nombre:'Heladera', precio: 100000, color:'Blanco'},
    {id: 3, nombre:'PC', precio: 100000, color:'Negro'},
    {id: 4, nombre:'Licuadora', precio: 10000, color:'Rojo'},
    {id: 5, nombre:'Aspiradora', precio: 20000, color:'Amarillo'},
    {id: 6, nombre:'Parlante', precio: 50000, color:'Negro'},
    {id: 7, nombre:'Microondas', precio: 20000, color:'Azul'},
    {id: 8, nombre:'Lavarropa', precio: 70000, color:'Blanco'},
]

const impuestosPorProductos=[
    {nombre:'IVA', importe: 0.21},
    {nombre:'Importación', importe: 0.3},
    {nombre:'Ingresos Brutos', importe: 0.1},
]

let detalleFacturado = [];

const calculoImpuestos = (costo, impuesto) => {
    // let precioDeCosto = costo;
    
    let iva, importacion, ingresosBrutos, retorna;
    
    for(let i=0; i<impuesto.length; i++) {
        switch(i) {
            case 0:
                iva = costo * impuesto[i].importe;
                break;
            case 1:
                importacion = costo * impuesto[i].importe;
                break;
            case 2:
                ingresosBrutos = costo * impuesto[i].importe;
                break;
            default:
                console.log('Impuesto inexistente, no se lo sugieras a un diputado');
        }
    }
    retorna = costo + iva + importacion + ingresosBrutos;

    return retorna;
}

function recorroCadaProducto(electrodomesticos) {
    electrodomesticos.forEach(elemento => {
        const calcular = calculoImpuestos(elemento.precio, impuestosPorProductos);
        
        console.log(`Electrodoméstico: ${elemento.nombre}, Precio de Venta: ${calcular}, Color: ${elemento.color}`);

    });
}

// encontrar producto por id
function buscoProducto(id) {
    const resultado = electrodomesticos.find( aparato => aparato.id == id);
    return resultado;
}


function cargarProductosFacturaDetalle(cantidad, id) {
    // listado.push({'Cantidad\tDetalle\t\t\tPrecio Unitario\tPrecio Total'});
    let busquedaProducto=buscoProducto(id);
    let nombreProducto = busquedaProducto.nombre;
    let precUnit = busquedaProducto.precio;
    let precTotal = cantidad * precUnit;
    detalleFacturado.push(`{Cantidad: ${cantidad}, Detalle: ${nombreProducto}, Precio Unitario: ${precUnit}, Precio Total: ${precTotal}}`);
}
// console.log(recorroCadaProducto(electrodomesticos));

// cargarProductosFacturaDetalle(10, 1);
// cargarProductosFacturaDetalle(5,2);
// console.log(detalleFacturado);

// console.log(buscoProducto(2));

// funcion tendra dos entradas: productos e impuestos
// function imprimirFactura(productos, impuestos) {

    // let total = 0;

    // insertaremos info
    // let items = ['Lista de precios'];


    // recorro todo el objeto de electrodomesticos
    // for(let i=0; i<productos.length; i++) {

        // const iva = productos[i].precio * impuestos[0].importe;
        // const importacion = productos[i].precio * impuestos[1].importe;
        // const ingresosBrutos = productos[i].precio * impuestos[2].importe;

        // const precioConImpuestos = productos[i].precio + iva + importacion + ingresosBrutos;
        
        // items.push(`Producto: ${productos[i].nombre}. $ ${precioConImpuestos}.`)
        // total = total + precioConImpuestos;

    // }
    // items.push(`Total a cobrar $${total}.-`)
    // return items;
// }

// const factura = imprimirFactura(electrodomesticos, impuestosPorProductos);

// console.log(factura);
