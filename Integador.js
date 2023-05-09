function calcularPrecio(){

    
    console.log("Ingreso a calcular precio")

    //en cantEnd alamacenamos la cantidad de entradas que ingreso el usuario
    let cantEnt = document.getElementById("cantEntradas").value;
    
    
    //en porcDesc almacenamos el porcentaje de descuento que selecciono el usuario
    let porcDesc = document. getElementById("porcDescuento").value;



    //en descuento alamacenamos los pesos totales a descontar 
    let descuento= (cantEnt*1000) * porcDesc / 100;


    // en preciototal esta el valor de la cantidad de entradas menos el descuento
    let precioTotal = (cantEnt * 1000) - descuento;

    //modificando dinamicamente el html para colocar el precio total en la pantalla

    document. getElementById ("valorTotal").value = precioTotal;
}
