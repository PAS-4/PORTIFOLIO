let _dicasDev = document.querySelector('#dicasDev')
let _curriculum = document.querySelector('#curriculum')
let _projetos = document.querySelector('#projetos')
let _sobre = document.querySelector('#sobre')

//NONE
function none(){
    _dicasDev.style.display = 'none'
    _curriculum.style.display = 'none'
    _projetos.style.display = 'none'
    _sobre.style.display = 'none'
}

//DICASDEV
function dicasDev(){
    none()
    _dicasDev.style.display = 'block'
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
