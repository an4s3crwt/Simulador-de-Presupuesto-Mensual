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
        e.originalEvent.dataTransfer.setData('text', categoriaArrastrada);
    });

    // 3. Permitir que el area de la canasta acepte elementos arrastrados

    $('#canasta').on('dragover', function(e){
        e.preventDefault(); //necesario para que le drop se pueda realizar
    });

    // 4. Manejar el "drop"
    $('#canasta').on("drop", function(e){
        e.preventDefault(); 

        //recuperar el nombre de la categoria que arrastra desde el dataTransfer
        let categoria = e.originalEvent.dataTransfer.getData('text');

        //verificar si esta categoría ya existe en la canasta para evitar duplicados
        let existe = false;
        //primero verificar y luego crear el item
        $('#canasta .cart-item').each(function(){
            if($(this).find('.nombre').text() === categoria){
                existe = true;
            }
        });
        if (existe) {
            alert('Esta categoría ya está en la canasta.');
            return; // Salir si la categoría ya existe
        }


        let itemCanasta = $(`<div class="cart-item"></div>`);
        let nombreCat = $(`<span class="nombre"></span>`).text(categoria);
        let precioCat = $(`<span class="precio"></span>`).text('$' + precios[categoria]);
        let btnEliminar = $(`<button class="eliminar">Eliminar</button>`);
  
        btnEliminar.on("click", function(){
            itemCanasta.remove();
            actualizarTotal();
        });

        itemCanasta.append(nombreCat);
        itemCanasta.append(precioCat);
        itemCanasta.append(btnEliminar);
       

        $('#canasta').append(itemCanasta); //agregar el item en la canasta 
        actualizarTotal();

});


function actualizarTotal(){
    let total = 0;

    //recorrer todos los elemntos de la canasta y sumar sus precios
    $('#canasta .cart-item').each(function(){
        let preciodeCadaItem = $(this).find('.precio').text();
        let precio = parseFloat(preciodeCadaItem.replace('$', ''));
        total +=precio;
    });

    $('#total-pagar').text(total.toFixed(2));

}

});