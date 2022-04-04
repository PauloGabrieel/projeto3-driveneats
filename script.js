let mainSelected
let drinkSelected
let dessertSelected
let mainValue
let drinkValue
let dessertValue

function selectedMainCourse(element) {
  let opcaoSelected = document.querySelector('.main-course .selected')
  let check = element.querySelector('ion-icon')
  let checked = document.querySelector('.main-course .mostrar')
  mainSelected = element.querySelector('h3').innerHTML
  mainValue = Number(element.querySelector('span').innerHTML.replace(',', '.'))

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
  drinkSelected = element.querySelector('h3').innerHTML
  drinkValue = Number(element.querySelector('span').innerHTML.replace(',', '.'))

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
  let check = element.querySelector('ion-icon')
  let checked = document.querySelector('.dessert .mostrar')
  dessertSelected = element.querySelector('h3').innerHTML
  dessertValue = Number(
    element.querySelector('span').innerHTML.replace(',', '.')
  )

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
  let envioMsg = document.querySelector('a')

  let msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:
      - Prato: ${mainSelected}
      - Bebida: ${drinkSelected}
      - Sobremesa: ${dessertSelected}
        Total: R$ ${(mainValue + drinkValue + dessertValue).toFixed(2)}`)

  if (main && drink && dessert) {
    bt.classList.add('fechar-pedido')
    bt.innerHTML = 'Fechar pedido'
    bt.disabled = false
  }
  envioMsg.href = `https://wa.me/5521997113236?text=${msg}`
}
