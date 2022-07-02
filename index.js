function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, 
    // recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: 
    // "No se encontraron los meses pedidos"
    // Tu código:
    let arrayModificado=[];
    let retorno;
    for(i=0; i<array.length;i++) {
      if(array[i]=='Enero' || array[i]=='Marzo' || array[i]=='Noviembre')
        {
          arrayModificado.push(array[i]);
        }
    }
    // return arrayModificado;
    if (arrayModificado.length == 0) 
        {retorno = 'No se encontraron los meses pedidos';}
            else {retorno = arrayModificado;}
    return retorno;

}

let array=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    let array2=['Febrero', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto','Septiembre','Octubre','Diciembre'];


    const devuelve = mesesDelAño(array);
    console.log(devuelve);

    const devuelve2 = mesesDelAño(array2);
    console.log(devuelve2);