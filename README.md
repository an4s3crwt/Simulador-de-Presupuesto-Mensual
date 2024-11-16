# Simulador de Presupuesto Mensual

Este proyecto es una aplicación interactiva creada con HTML, CSS, y JavaScript (jQuery), que permite a los usuarios calcular su presupuesto mensual arrastrando categorías de gasto a una "canasta". Cada categoría tiene un costo asociado, y el total se actualiza dinámicamente.

## Características

- **Interacción Drag & Drop**: Las categorías de gasto pueden ser arrastradas y soltadas en el área de la canasta.
- **Prevención de duplicados**: Si una categoría ya está en la canasta, el sistema muestra una alerta y no la agrega de nuevo.
- **Cálculo automático del presupuesto total**: Al agregar o eliminar categorías, el total se actualiza automáticamente.
- **Botón "Eliminar"**: Permite quitar categorías de la canasta y recalcular el total.

## Tecnologías Utilizadas

- **HTML5**: Estructura del documento.
- **CSS3**: Estilo visual básico.
- **JavaScript (jQuery)**: Lógica interactiva y manejo de eventos.
- **jQuery Drag & Drop API**: Para implementar la funcionalidad de arrastrar y soltar.

## Instalación

1. **Clonar el repositorio**:
   
   git clone https://github.com/an4s3crwt/Simulador-de-Presupuesto-Mensual.git

2. **Abrir el proyecto**:

 Navega hasta la carpeta del proyecto y abre el archivo index.html en tu navegador.

3. **Opcional**: 
Si deseas personalizar los valores de las categorías, edita el archivo script.js y 
modifica el objeto precios.


## Uso

1. Abre el archivo index.html en tu navegador.
2. Arrastra una categoría de gasto desde la sección "categorías" hacia la "canasta".
3. Observa cómo el presupuesto total se actualiza automáticamente.
4. Haz clic en el botón "Eliminar" para quitar una categoría de la canasta.

