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

    // 4. Manejar el "drop"
    $('#canasta').on("drop", function(e){
        e.preventDefault(); 

        //recuperar el nombre de la categoria que arrastra desde el dataTransfer
        let categoria = e.dataTransfer.getData('text');

        //verificar si esta categoría ya existe en la canasta para evitar duplicados
        let existe = false;
        //primero verificar y luego crear el item


        let itemCanasta = $(`<div class="canasta-item"></div>`);
        let nombreCat = $(`<span class="nombre"></span>`).text(categoria);
        let precioCat = $(`<span class="precio"></span>`).text('$' + precios[categoria]);
        let btnEliminar = $(`<button class="eliminar">Eliminar</button>`);
  



});