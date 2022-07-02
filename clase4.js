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
/* enfoque a utilizar programacion funcional
 react trabaja con componentes (funciones)
piezas reutilizables.

funciones simples y aisladas, sin efecto secundarios fuera
del alcance de la funcion: INPUT -> PROCESS -> OUTPUT
1.Funciones aisladas: no depende del estado del programa, que 
incluye variables globales que están sujetas a cambios.
2.Funciones puras: la misma entrada siempre da la misma salida.
3.Funciones con efectos secundarios limitados: cualquier cambio
o mutacion en el estado del programa fuera de la funcion se controla
cuidadosamente. 1:09
*/
// funcion simple recibe un parametro (usuario)
// devuelve un string que se visualiza con el console.log
function saludarUsuario(usuario) {
    return `Hola ${usuario}`;
}

// otra funcion simple
function despedirUsuario(usuario) {
    return `Adios ${usuario}`;
}

// ahora esta funcion llamará a otra funcion
// 'creadora de funciones' con callback
// el callback es pasado como parametro en una fucion
// desde esa funcion callback se usa como "un intermediario"
// que llama a otra función
// llamo a la funcion crearsaludo y a su vez el callback llama
// a otra funcion para mostrar el saludo eso callback se pasa 
// como parametro para mostrar la funcion del "ultmo nivel."
function crearSaludo(usuario, callback) {
    return callback(usuario);
    // retorna el nombre de la funcion con su parametro
}


console.log(saludarUsuario('pepe'));
console.log(despedirUsuario(`pedro`));
// llamar al creador de funciones
console.log(crearSaludo(`Pincho`, saludarUsuario));
console.log(crearSaludo(`Pincho`, despedirUsuario));

/* 
la programacion funcional:
funciones sencillas,
lo más breves posibles,
reutilizables,
faciles de debuguear
********
si el código es mas largo
se hace dificil debuguear
se es dificil escalar
se hace más dificil reutilizar
se es dificil leerla
rompiendo con el paradigma de la programacion funcional 

se pueden crear funciones hijas del creador de funciones
pero al creador de funciones NO SE TOCA, NO SE MODIFICA.
solo se agregan las funciones hijas o que son llamadas
mediante el creador de funciones!
*/



// otro ejemplo de programacion funcional
/* Pregunta con la funcion servirBebida: 
¿de donde sale bebidaCorrespondiente? OUTPUT (RETURN) 
¿Que parametros recibe?     INPUT  (cantidad y callback)
¿que proceso tiene que ejecutar? PROCESS

Definir con arrow function lo unico que hace es retornar un string
uso de arreglo y un for para recorrer ese arreglo


*/
// Arrow Function
const servirTe = () => 'Taza de Té';
const servirCafe = () => 'Taza de Café';
const servirAgua = () => 'Vaso de Agua';
const servirGaseosa = () => 'Vaso de Gaseosa';

function servirBebida (cantidad, callback) {
    // definir un arreglo vacio
    const bebidaCorrespondientes = [];

    for (let i = 0; i < cantidad; i++) {
        // bebida carga el callback recibido
        const bebida = callback();
        // agregar al array con la funcion llamada por callback
        bebidaCorrespondientes.push(bebida);
    }
    return bebidaCorrespondientes;
}

// llamo a la funcion para servir tazas de cafe
const tazasDeCafe = servirBebida(10, servirCafe);
console.log(tazasDeCafe);

// llamo a la funcion para servir vasos de gaseosa
const vasosDeGaseosa = servirBebida(50, servirGaseosa);
console.log(vasosDeGaseosa);

/////////////// 

// iterar con arrays
// ya visto con un for
let profesores = ['Fosco', 'Gomez', 'De Luca', 'Jaunsaras', 'Garcia', 'Strano'];


// sin callback
console.log('for (i=0; i<profesores.length; i++) {');
for (i=0; i<profesores.length; i++) {
    console.log(profesores[i]);
}


// sintactic sugart - azucar sintactica
// for each es 'para cada uno' es una pieza de código
// que se ejecutara en cada uno

// con callback
console.log('profesores.forEach(element => {');
profesores.forEach(elemento => {     
    console.log(elemento);
});

// de la forma larga
console.log('profesores.forEach(function(elemento, indice) {')
profesores.forEach(function(elemento) {
    console.log(elemento);
})

let profesoresComoObjeto=[
    {nombre: 'Patricia', apellido:'Fosco', asignatura:'Analisis matemático'},
    {nombre: 'Cristian', apellido:'Gomez', asignatura:'Varias'},
    {nombre: 'Eliana', apellido:'De Luca', asignatura:'Ingles Técnico'},
    {nombre: 'Gilda', apellido:'Jaunsaras', asignatura:'Algebra'},
    {nombre: '', apellido:'Strano', asignatura:'Estadística'},
];

profesoresComoObjeto.forEach(function(elemento) {  //function(elemento, indice)
    // console.log(`Nombre: ${profesoresComoObjeto[indice].nombre}, Apellido: ${profesoresComoObjeto[indice].apellido}, Asignatura: ${profesoresComoObjeto[indice].asignatura}`);
    console.log(`Nombre: ${elemento.nombre}, Apellido: ${elemento.apellido}, Asignatura: ${elemento.asignatura}`);
})


/////  Facturador

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

// recorroCadaProducto calcula precio final
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

// cargarProductosFacturaDetalle usa busquedaProducto
function cargarProductosFacturaDetalle(cantidad, id) {
    // listado.push({'Cantidad\tDetalle\t\t\tPrecio Unitario\tPrecio Total'});
    let busquedaProducto=buscoProducto(id);
    let nombreProducto = busquedaProducto.nombre;
    let precUnit = busquedaProducto.precio;
    let precTotal = cantidad * precUnit;
    detalleFacturado.push(`{Cantidad: ${cantidad}, Detalle: ${nombreProducto}, Precio Unitario: ${precUnit}, Precio Total: ${precTotal}}`);
    totalAFacturar = precTotal + totalAFacturar;
}



// generador de funciones
// estructura de la factura
function facturador() {
    fecha = Date();
    cargarProductosFacturaDetalle(10,  1);
    cargarProductosFacturaDetalle( 2,  2);
    cargarProductosFacturaDetalle(12,  3);
    cargarProductosFacturaDetalle( 2,  4);
    cargarProductosFacturaDetalle(10,  5);



    console.log('La fecha de la factura es',fecha);
    console.log('Detalle de los articulos comprados:');
    console.log(detalleFacturado);
    console.log('El total a cobrar es de $',totalAFacturar);
}

// variables globales
let detalleFacturado = [];
let fecha;
let totalAFacturar=0;

facturador();



///////////// callback
// ejemplo de callback

const profesores = ['Fosco', 'Gomez', 'De Luca', 'Jaunsaras', 'Garcia', 'Strano', 'Pavka', 'Zanni'];

// callback mostrará por pantalla el listado de cada profesor
// en una linea nueva cada uno gracias al foreach
function callback(cadaProfesor) {
    console.log(`Te presento al profesor ${cadaProfesor}`);
}

// callback(profesores) muestra todos los profesores en una sola linea

// se debe hacer un foreach para que muestre
// cada profesor en linea nueva
profesores.forEach(callback);

// definir en un arreglo el listado de profesores
// la funcion callback 

////////////