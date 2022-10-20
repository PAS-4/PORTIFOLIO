let _tecnoligias = document.querySelector('#tecnoligias')
let _curriculum = document.querySelector('#curriculum')
let _projetos = document.querySelector('#projetos')
let _sobre = document.querySelector('#sobre')

//NONE
function none(){
    _tecnoligias.style.display = 'none'
    _curriculum.style.display = 'none'
    _projetos.style.display = 'none'
    _sobre.style.display = 'none'
}

//TECNOLOGIAS
function tecnoligias(){
    none()
    _tecnoligias.style.display = 'block'
}

//CURRÍCULUM
function curriculum(){
    none()
    _curriculum.style.display = 'block'
}

//PROJETOS
function projetos(){
    none()
    _projetos.style.display = 'block'
}

//SOBRE
function sobre(){
    none()
    _sobre.style.display = 'block'
}

//qrCode
function qrCode(foto, borderRadius){
    const minhaFoto = document.querySelector('#foto')
    minhaFoto.src = foto
    minhaFoto.style.transition = '.5s'
    if(borderRadius){
        minhaFoto.style.borderRadius = '50%'
    }else{
        minhaFoto.style.borderRadius = '10%'
    }
}