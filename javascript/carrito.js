import {
    contenedorPiezasCarrito
} from "./funcionalidadTienda.js"


let carrito = JSON.parse(localStorage.getItem("productos-en-carrito"))
let totalCarrito = document.getElementById('totalCarrito')

// * IMPRIMIR CARRITO
function imprimirCarrito() {

    carrito = JSON.parse(localStorage.getItem("productos-en-carrito"))

    if (carrito && carrito.length >0) {
        contenedorPiezasCarrito.innerHTML = ''
        carrito.forEach(producto => {
            const divCarrito = document.createElement('div')
            divCarrito.classList.add("piezaCarrito")
            divCarrito.innerHTML = `
        <div class="piezaCarrito__izq">
            <img src="${producto.img}" alt="">
            <div class="piezaCarrito__izq__contenido">
                <p class="piezaCarrito__izq__contenido__titulo">${producto.nombre}</p>
                <p class="piezaCarrito__izq__contenido__precio">$${producto.precio * producto.cantidad}</p>
                <div class="piezaCarrito__izq__contenido__cantidades">
                    <button id="resta${producto.id}">-</button>
                    <div>${producto.cantidad}</div>
                    <button id="suma${producto.id}" class="botonesSumaCarrito">+</button>
                </div>
            </div>
        </div>
        <div class="piezaCarrito__der">
        <button id="borrarItem${producto.id}">x</button>
        </div>
        `
            contenedorPiezasCarrito.append(divCarrito)


            const botonSumarProducto = document.getElementById(`suma${producto.id}`)
            const botonEliminarProducto = document.getElementById(`borrarItem${producto.id}`)
            const botonRestarProducto = document.getElementById(`resta${producto.id}`)
            botonSumarProducto.addEventListener('click',() => sumarProductoCarrito(botonSumarProducto))
            botonEliminarProducto.addEventListener('click',() => eliminarProductoCarrito(botonEliminarProducto))
            botonRestarProducto.addEventListener('click',() => restarProductoCarrito(botonEliminarProducto))
        })

    }else{
        contenedorPiezasCarrito.innerHTML = `<p>No hay productos en el carrito</p>`
    }
    totalCarrito.innerHTML = carrito.reduce((acc,producto) => acc + (producto.precio * producto.cantidad) , 0)


}

function eliminarProductoCarrito(e){
    const productoEliminado = carrito.find(producto => producto.id === extraerId(e.id))
    carrito.splice(productoEliminado,1)
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito))
    imprimirCarrito()

}


function sumarProductoCarrito(e){
    const productoSumado = carrito.find(producto => producto.id === extraerId(e.id))
    productoSumado.cantidad++
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito))
    imprimirCarrito()

}

function restarProductoCarrito(e){
    const productoRestado = carrito.find(producto => producto.id === extraerId(e.id))
    if (productoRestado.cantidad == 1){
        eliminarProductoCarrito(e)
    }else{
        productoRestado.cantidad --
        localStorage.setItem("productos-en-carrito", JSON.stringify(carrito))
        imprimirCarrito()
    }
}

function extraerId(texto) {
    const numerosEncontrados = texto.match(/\d+/g);
    if (numerosEncontrados) {
      return Number(numerosEncontrados.map(Number));
    } else {
      return [];
    }
}




export {
    imprimirCarrito
}