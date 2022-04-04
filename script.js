function selectedMainCourse(element) {
  let opcaoSelected = document.querySelector('.main-course .selected')
  let check = element.querySelector('ion-icon')
  let checked = document.querySelector('.main-course .mostrar')

  if (opcaoSelected !== null) {
    opcaoSelected.classList.remove('selected')
  }
  if (checked !== null) {
    checked.classList.remove('mostrar')
  }
  check.classList.add('mostrar')
  element.classList.add('selected')
  fecharPedido()
}
function selectedDrinks(element) {
  let opcaoSelected = document.querySelector('.drinks .selected')
  let check = element.querySelector('ion-icon')
  let checked = document.querySelector('.drinks .mostrar')

  if (opcaoSelected !== null) {
    opcaoSelected.classList.remove('selected')
  }

  if (checked !== null) {
    checked.classList.remove('mostrar')
  }
  element.classList.add('selected')
  check.classList.add('mostrar')
  fecharPedido()
}
function selectedDessert(element) {
  let opcaoSelected = document.querySelector('.dessert .selected')
  check = element.querySelector('ion-icon')
  checked = document.querySelector('.dessert .mostrar')

  if (opcaoSelected !== null) {
    opcaoSelected.classList.remove('selected')
  }

  if (checked !== null) {
    checked.classList.remove('mostrar')
  }
  check.classList.add('mostrar')
  element.classList.add('selected')
  fecharPedido()
}

function fecharPedido() {
  let main = document.querySelector('.main-course .selected')
  let drink = document.querySelector('.drinks .selected')
  let dessert = document.querySelector('.dessert .selected')
  let bt = document.querySelector('button')
  if (main && drink && dessert) {
    bt.classList.add('fechar-pedido')
    bt.innerHTML = 'Fechar pedido'
  }
}
