function _createModal(options){
   const modal = document.createElement('div')
   modal.classList.add('vmodal')
   modal.insertAdjacentHTML('afterbegin', `
    <div class="modal__overlay">
        <div class="modal__window">
            <div class="modal__header">
                <span class="modal__title">Modal title</span>
                <span class="modal__close">&times</span>
            </div>
            <div class="modal__body">
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
            <div class="modal__footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>`)
document.body.appendChild(modal)
return modal
}


  mmodal = function(options){
    const animationSpeed = 200
    const gmodal= _createModal(options)
    let closing=false

    return {
      open() {
        !closing && gmodal.classList.add('open')
      },
      close(){
        closing=true
        gmodal.classList.remove('open')
        gmodal.classList.add('hide')
        setTimeout( ()=>{
            gmodal.classList.remove('hide')
            closing=false
        },animationSpeed)
      } ,
      destroy(){}
    }
  }