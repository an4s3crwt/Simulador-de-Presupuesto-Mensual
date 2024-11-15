$(document).ready(function(){

    //1. Crear un objeto para guardar los precios de las categorías
    const precios ={
        'Renta': 800,
        "Comida": 200,
        "Transporte": 150,
        "Entretenimiento": 100
    };

    // 2. Configuramos las categorías para que sean arrastrables
    $('.categoria').on('dragstart', function(e){
        let categoriaArrastrada = $(this).text();

        //guardar el nombre de la categoia en el datatransfer
        e.dataTransfer.setData('text', categoriaArrastrada);
    });

    // 3. Permitir que el area de la canasta acepte elementos arrastrados

    $('#canasta').on('dragover', function(e){
        e.preventDefault(); //necesario para que le drop se pueda realizar
    });

    
  



});