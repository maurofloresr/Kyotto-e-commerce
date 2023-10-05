//      FUNCION PARA OCULTAR O ABRIR PIEZAS Y COMBOS
const mostrarPiezas = document.getElementById('piezas')
const contenedorDePiezas = document.getElementById('contenidoPiezas')

mostrarPiezas.addEventListener('click', () =>{
    if (contenedorDePiezas.style.display =='none'){
        contenedorDePiezas.style.display = 'flex'
    } else {
        contenedorDePiezas.style.display = 'none'
    }
})

const mostrarCombos = document.getElementById('combos')
const contenedorDeCombos = document.getElementById('contenidoCombos')

mostrarCombos.addEventListener('click', () =>{
    if (contenedorDeCombos.style.display =='none'){
        contenedorDeCombos.style.display = 'flex'
    } else {
        contenedorDeCombos.style.display = 'none'
    }
})




//      FUNCIONES DE ABRIR Y CERRAR EL CARRITO
const BotonSalirCarrito = document.getElementById('salirCarrito')
const contenedorCarrito = document.getElementById('carrito')
const botonEntrarCarrito = document.getElementById('botonCarrito')
const contenedorPiezasCarrito = document.getElementById('contendorDelCarrito')


botonEntrarCarrito.addEventListener('click', (e) =>{
    // para que al tocar en carrito no me tome simultaneamente que toco fuera del contenedor y lo cierre tras abrirlo
    e.stopPropagation();
    contenedorCarrito.style.display = 'flex'
})

BotonSalirCarrito.addEventListener('click', () =>{
    contenedorCarrito.style.removeProperty('flex')
    contenedorCarrito.style.display = 'none'
})
// cerrar carrito al tocar fuera del contenedorCarrito
// document.addEventListener('click', (e) => {
//     if (!e.target.closest('#carrito') && e.target !== botonEntrarCarrito) {
//         contenedorCarrito.style.removeProperty('flex')
//         contenedorCarrito.style.display = 'none'
//     }
// })




export {contenedorDeCombos, contenedorDePiezas, contenedorPiezasCarrito}