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