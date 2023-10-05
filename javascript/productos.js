import {
    contenedorDeCombos,
    contenedorDePiezas
} from './funcionalidadTienda.js'
import {
    imprimirCarrito
} from './carrito.js'

// CARRITO DE COMPTAS
// let productos = [
//     {id: 1 , tipo: "Pieza", nombre: "californian", precio: "1900", precioMitad: "1150",descripcion: "Salmón y queso, coronado en sésamo tostado.", img: 'imagenes/californianRoll.jpeg'},
//     {id: 2 , tipo: "Pieza", nombre: "Avok Ebi", precio: "2000", precioMitad: "1250", descripcion:"Langostino panizado, queso philadelphia y palta, coronado en sésamo tostado.", img:'imagenes/AvokEbiRoll.jpg'},
//     {id: 3 , tipo: "Pieza", nombre: "Vegetarian", precio: "1800", precioMitad: "1100", descripcion: "Cebolla panizada y queso philadelphia, coronado en sésamo tostado.", img: 'imagenes/VegetarianRoll.jpg'},

//     {id: 4 , tipo: "Pieza", nombre: "Tropical", precio: "2100", precioMitad: "1300", descripcion: "Langostino panizado y queso philadelphia, coronado con mango y salsa pasión.", img: 'imagenes/tropicalRoll.jpg'},
//     {id: 5 , tipo: "Pieza", nombre: "Avokado", precio: "2500", precioMitad: "1550", descripcion: "Tartar de salmón y langostino panizado, coronado con palta y sésamo tostado.", img: 'imagenes/avokadoRoll.jpeg'},
//     {id: 6 , tipo: "Pieza", nombre: "Buenos Aires", precio: "2400", precioMitad: "1500", descripcion: "Langostino panizado y queso philadelphia, coronado en salmón.", img: 'imagenes/buenosAiresRoll.jpg'},
//     {id: 7 , tipo: "Pieza", nombre: "Mexican", precio: "2200", precioMitad: "1350", descripcion: "Langostino panizado y queso philadephia coronado con guacamole y nachos.", img: 'imagenes/mexicanRoll.jpeg'},
//     {id: 8 , tipo: "Pieza", nombre: "Mexican Vegetarian", precio: "2200", precioMitad: "1350", descripcion: "Cebolla panizada y queso philadelphia, coronado en guacamole y nachos.", img: 'imagenes/VeggieMExicanRoll.jpg'},

//     {id: 9 , tipo: "Pieza", nombre: "Niguiri de Salmón", precio: "700", precio5u: "3200", precio10u: "6000", descripcion: "bola de arroz coronada en salmon", img:'imagenes/niguiri.jpg'},
//     {id: 10 , tipo: "Pieza", nombre: "Geisha", precio: "800", precio5u: "3600", precio10u: "6750", descripcion: "queso y palta envuelto en salmón", img: 'imagenes/geisha.jpeg'},

//     {id: 11 , tipo: "Salsas", nombre: "Salsa de Soja", precio: "1500"},
//     {id: 12 , tipo: "Salsas", nombre: "Salsa Teriyaki", precio: "1500"},
//     {id: 13 , tipo: "Salsas", nombre: "Salsa Pasión", precio: "1500"},

//     {id: 20, tipo: "Combo", nombre: "Combo Golden", precio: "6000", descripcion: "8 piezas de Californian roll/ hot californian roll, 8 piezas de Caramel Californian Roll, 8 piezas de Buenos Aires Roll y 2 niguirís de Salmón", salsaIncluida: "Incluye Salsa de Soja y Teriyaki", img: 'imagenes/combogolden.jpg'},
//     {id: 21, tipo: "Combo", nombre: "Combo Salmon", precio: "7500", descripcion: "8 piezas de Californian roll/ hot californian roll, 8 piezas de New York Phila Roll, 8 piezas de Buenos Aires Roll junto a 2 niguirís de Salmón y 2 geishas", salsaIncluida: "Incluye Salsa de Soja y Teriyaki", img: 'imagenes/comboSalmon.jpg'},
//     {id: 22, tipo: "Combo", nombre: "Combo Kyotto", precio: "10000", descripcion: "8 piezas de Californian roll/ hot californian roll, 8 piezas de Avokado Roll, 8 piezas de Buenos Aires Roll, 8 piezas de Tropical Roll. Junto a 2 niguirís de Salmón, 2 Geishas y 2 langostinos panizadosn", salsaIncluida: "Incluye Salsa de Soja, Teriyaki y Pasión", img: 'imagenes/comboKyotto.JPG'}
// ]


let productos = []
fetch("./javascript/piezas.json")
    .then(response => response.json())
    .then(data => {
        productos = data
        cargarProductos(productos)
        let botonesAgregar = document.querySelectorAll('.botonTienda')

        botonesAgregar.forEach(boton => {
            boton.addEventListener('click', (e) => {
                carrito = JSON.parse(localStorage.getItem("productos-en-carrito"))

                const productoAgregado = productos.find(producto => producto.id == e.target.id)
                const productoExistente = carrito.find(producto => producto.id == e.target.id)

                if (productoExistente) {
                    productoExistente.cantidad++
                } else {
                    productoAgregado.cantidad = 1
                    carrito.push(productoAgregado)
                }

                avisoProductoAgregado(boton)
                ordenarCarrito()


                localStorage.setItem("productos-en-carrito", JSON.stringify(carrito))
                imprimirCarrito()


            })
        })
    })








// CARRITO
let carrito

const carritoLs = JSON.parse(localStorage.getItem("productos-en-carrito"))
if (carritoLs) {
    carrito = carritoLs
    imprimirCarrito()
} else {
    carrito = []
}



//*      FUNCION ORDENAR CARRITO primero combos
function ordenarCarrito() {
    carrito.sort((a, b) => {
        if (a.tipo === b.tipo) {
            return 0;
        } else if (a.tipo === "Combo") {
            return -1;
        } else {
            return 1;
        }
    })
}

//*    FUNCION AVISO DE AGREGAR CARRITO
function avisoProductoAgregado(boton) {

    const colorBoton = window.getComputedStyle(boton).backgroundColor
    const iconoCarrito = botonCarrito.querySelector('.fa-solid.fa-cart-shopping')

    boton.innerText = 'AGREGADO'
    boton.style.transition = 'transform 0.3s ease-in'
    iconoCarrito.style.transition = 'transform 0.3s ease-in'
    iconoCarrito.style.transform = 'scale(1.2)'


    if (colorBoton === 'rgb(0, 0, 0)' || colorBoton === 'black') {
        boton.style.backgroundColor = 'white'
        boton.style.color = 'black'
        boton.style.border = 'solid 2px black'
    } else {
        boton.style.backgroundColor = 'black'
        boton.style.color = 'white'
        boton.style.border = 'solid 2px white'
    }


    setTimeout(() => {
        boton.innerText = 'AGREGAR AL CARRITO'
        boton.style.backgroundColor = colorBoton
        boton.style.color = (colorBoton === 'rgb(0, 0, 0)' || colorBoton === 'black') ? 'white' : 'black'
        boton.style.border = (colorBoton === 'rgb(0, 0, 0)' || colorBoton === 'black') ? 'black' : 'white'

        iconoCarrito.style.transform = 'scale(1)'

    }, 1200);

}


// function avisoProductoAgregado(boton,color){

//     const iconoCarrito = botonCarrito.querySelector('.fa-solid.fa-cart-shopping')

//     boton.innerText = 'AGREGADO'
//     boton.style.transition = 'transform 0.3s ease-in'
//     iconoCarrito.style.transition = 'transform 0.3s ease-in'
//     iconoCarrito.style.transform = 'scale(1.2)'


//     if (color === 'negro'){
//         boton.style.backgroundColor = 'white'
//         boton.style.color = 'black'
//         boton.style.border = 'solid 2px black'
//     }else{
//         boton.style.backgroundColor = 'black'
//         boton.style.color = 'white'
//         boton.style.border = 'solid 2px white'
//     }


//     setTimeout(() => {
//       boton.innerText = 'AGREGAR AL CARRITO'
//       boton.style.backgroundColor = colorBoton
//       boton.style.color = (color === 'negro') ? 'white' : 'black'
//       boton.style.border = (color === 'negro') ? 'black' : 'white'

//       iconoCarrito.style.transform = 'scale(1)'

//     }, 1200);

// }



// IMPRESION de productos

function cargarProductos() {
    productos.forEach(producto => {

        if (producto.tipo !== "Salsas") {

            if (producto.tipo == "Pieza") {
                const divPiezas = document.createElement("div")
                divPiezas.classList.add("pieza")
                divPiezas.innerHTML = `
                <img src="${producto.img}" alt="">
                <div class="pieza__caja">
                    <div class="pieza__caja__titulo">
                        <p class="pieza__caja__titulo_nombre">${producto.nombre}</p>
                        <P class="pieza__caja__titulo__precio">$${producto.precio}</P>
                    </div>
                    <p class="pieza__caja__descripcion">${producto.descripcion}</p>
                    <button class="pieza__caja__boton botonTienda" id="${producto.id}">AGREGAR AL CARRITO</button>
                </div>
                `
                contenedorDePiezas.append(divPiezas)
            }

            if (producto.tipo == "Combo") {
                const divCombos = document.createElement("div")
                divCombos.classList.add("combo")
                divCombos.innerHTML = `
                <img src="${producto.img}" alt="${producto.descripcion}">
                <div class="combo__caja">
                    <div class="combo__caja__titulo">
                        <p class="combo__caja__titulo__nombre">${producto.nombre}</p>
                        <p class="combo__caja__titulo__precio">$${producto.precio}</p>
                    </div>
                    <p class="combo__caja__descripcion">${producto.descripcion}</p>
                    <p class="combo__caja__salsa">${producto.salsaIncluida}</p>
                    <button class="botonTienda" id="${producto.id}">AGREGAR AL CARRITO</button>
                </div>
                `
                contenedorDeCombos.append(divCombos)
            }

        }
    })

}
cargarProductos()



//      FUNCIONALIDAD DE BOTON AGREGAR A CARRITO TIENE QUE ESTAR DECLARADO LUEGO QUE SE CARGUEN