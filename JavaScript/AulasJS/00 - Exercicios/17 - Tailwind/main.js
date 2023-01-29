const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){
    const isEskey = event.key === 'Escape'

    if(isEskey) {
        modalWrapper.classList.add('invisible')
    } 
})
