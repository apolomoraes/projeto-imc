export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  messageResult: document.querySelector('.modal-wrapper p'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => Modal.close()  /*modalWrapper.classList.remove('open')*/

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape') {
    Modal.close()
  }
}