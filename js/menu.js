let _tecnologias = document.querySelector('#tecnologias')
let _projetos = document.querySelector('#projetos')
let _sobre = document.querySelector('#sobre')
let _curriculum = document.querySelector('#curriculum')

//NONEMENU
function noneMenu(){
    _tecnologias.style.display = 'none'
    _curriculum.style.display = 'none'
    _projetos.style.display = 'none'
    _sobre.style.display = 'none'
    _aside.style.boxShadow = '0px 0px 100px #00000085 inset'
}

//SOBRE
function sobre(){
    noneMenu()
    _sobre.style.display = 'block'
}

//TECNOLOGIAS
function tecnologias(){
    noneMenu()
    ide()
    // noneTechs()
    // _ide.style.display = 'block'
    _tecnologias.style.display = 'block'
}

//PROJETOS
function projetos(){
    noneMenu()
    _projetos.style.display = 'block'
}

//CURRÍCULUM
function curriculum(){
    noneMenu()
    _curriculum.style.display = 'block'
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