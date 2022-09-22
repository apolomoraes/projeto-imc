import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber } from "./utils.js"

//variáveis - variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')



form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)

  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  // modalWrapper.classList.add('open')

  let modalMessage = document.querySelector('p')

  if (result < 18.5) {
    let messageBelow = `Abaixo do peso`
    modalMessage.innerText = messageBelow
  } else if(result > 18.5 && result < 24.99) {
    let messageNormal = `Normal`
    modalMessage.innerText = messageNormal
  } else if(result > 25.0 && result < 29.99) {
    let messageOverweight = `Sobrepeso`
    modalMessage.innerText = messageOverweight
  } else if(result > 30 && result < 40) {
    let messageObesity = `Obesidade`
    modalMessage.innerText = messageObesity
  } else {
    let messageSevereObesity = `Obesidade Severa`
    modalMessage.innerText = messageSevereObesity
  }

  Modal.open()
}