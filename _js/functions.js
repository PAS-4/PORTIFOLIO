let _dicasDev = document.querySelector('#dicasDev')
let _curriculum = document.querySelector('#curriculum')
let _projetos = document.querySelector('#projetos')
let _sobre = document.querySelector('#sobre')

//DICASDEV
function dicasDev(){
    _dicasDev.style.display = 'block'
    _curriculum.style.display = 'none'
    _projetos.style.display = 'none'
    _sobre.style.display = 'none'
}

//CURRÍCULUM
function curriculum(){
    _dicasDev.style.display = 'none'
    _curriculum.style.display = 'block'
    _projetos.style.display = 'none'
    _sobre.style.display = 'none'
}

//TRABALHOS
function trabalhos(){
    _dicasDev.style.display = 'none'
    _curriculum.style.display = 'none'
    _projetos.style.display = 'block'
    _sobre.style.display = 'none'
}

//SOBRE
function sobre(){
    _dicasDev.style.display = 'none'
    _curriculum.style.display = 'none'
    _projetos.style.display = 'none'
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