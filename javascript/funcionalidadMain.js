let btn1 = document.querySelector('.cFnumero1');
let btn2 = document.querySelector('.cFnumero2');
let btn3 = document.querySelector('.cFnumero3');

function escalarElemento(elemento) {
  elemento.style.transform = 'scale(1.4)';
  setTimeout(function () {
    elemento.style.transform = 'scale(1)';
  }, 2000);
}

function iniciarTransform() {
  setInterval(function () {
    escalarElemento(btn1);
    setTimeout(function () {
      escalarElemento(btn2);
      setTimeout(function () {
        escalarElemento(btn3);
      }, 2000);
    }, 2000);
  }, 6000);
}

iniciarTransform();

// CARGAR LOS PRODUCTOS DE EXPOSICIÓN DEL INDEX

const contendeorPrecios = document.querySelector('.precios__contenedor')



fetch("./javascript/piezas.json")
    .then(response => response.json())
    .then(data => {
        productos = data
        cargarCombos(productos)
    })

function cargarCombos() {
  let contador = 0
  productos.forEach(
    combo => {
      if (combo.tipo === "Combo" && contador < 3) {

        const aDeCombo = document.createElement('a')
        aDeCombo.classList.add('precios__contenedor')
        aDeCombo.href = 'piezas.html'
        aDeCombo.style.backgroundImage = `url(${combo.img})`
        aDeCombo.innerHTML = `
          <p class="precio"> $ ${combo.precio}</p>
          <p class="descripcion">${combo.nombre}</p>
          `
        contador++
        contendeorPrecios.append(aDeCombo)
      }

    }
  )
}

