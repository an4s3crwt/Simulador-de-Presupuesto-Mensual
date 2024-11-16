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

//crear el popup dinámicamente cuando se hace click en calcular Presupuesto
$('#calcular-presupuesto').on("click", function(){
    let total = 0;
    let distribucion = [];

    $('#canasta .cart-item').each(function(){
        let categoria = $(this).find('.nombre').text();
        let precio = parseFloat($(this).find('.precio').text().replace('$', ''));
        total += precio;

        distribucion.push({
            nombre: categoria,
            precio: precio
        });
    });

    let popup  =`
        <html>
        <head>YEAH</head>
        <body>
        <div id="popup" class="popup">
        <div class="popup-content">
            
            <h3>Resumen del Presupuesto</h3>
            <p><strong>Total:</strong>$<span id="total-popup">${total.toFixed(2)}</span></p>
            <p><strong>Distribución:</strong></p>
            <ul id="distribucion-popup">
            ${distribucion.map(i => `<li>${i.nombre}: $${i.precio.toFixed(2)}</li>`).join('')}
            </ul>
        </div>

        </div>
        </body>
        </html>
       
        `;//HA DE SER CADENA DE TEXTO 

        

        
        let ventana = window.open("", "_blank", "width=600,heigth=400");
        ventana.document.write(popup);
        ventana.document.close();

        setTimeout(function(){
            ventana.close();
        }, 5000);

})

});