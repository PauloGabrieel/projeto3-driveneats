function selectedMainCourse(element) {
  let opcaoSelected = document.querySelector('.main-course .selected')
  let check = element.querySelector('ion-icon')
  let checked = document.querySelector('.mostrar')

  if (opcaoSelected !== null) {
    opcaoSelected.classList.remove('selected')
  }
  if (checked !== null) {
    checked.classList.remove('mostrar')
  }
  check.classList.add('mostrar')
  element.classList.add('selected')
}
function selectedDrinks(element) {
  let opcaoSelected = document.querySelector('.drinks .selected')
  let check = element.querySelector('ion-icon')
  let checked = document.querySelector('.mostrar')

  if (opcaoSelected !== null) {
    opcaoSelected.classList.remove('selected')
  }

  if (checked !== null) {
    checked.classList.remove('mostrar')
  }
  element.classList.add('selected')
  check.classList.add('mostrar')
}
function selectedDessert(element) {
  let opcaoSelected = document.querySelector('.dessert .selected')
  check = element.querySelector('ion-icon')
  checked = document.querySelector('.mostrar')

  if (opcaoSelected !== null) {
    opcaoSelected.classList.remove('selected')
  }

  if (checked !== null) {
    checked.classList.remove('mostrar')
  }
  check.classList.add('mostrar')
  element.classList.add('selected')
}

let array = [2, 5, 7, 1, 6, 7]

console.log(array.indexOf(1))
