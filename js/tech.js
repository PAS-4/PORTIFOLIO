let _ide = document.querySelector('#ide')
let _html = document.querySelector('#html')
let _css = document.querySelector('#css')
let _js = document.querySelector('#js')

//NONETECHS
function noneTechs(){
    _ide.style.display = 'none'
    _html.style.display = 'none'
    _css.style.display = 'none'
    _js.style.display = 'none'
}

//IDE
function ide(){
    noneTechs()
    _ide.style.display = 'block'
}

//HTML
function html(){
    noneTechs()
    _html.style.display = 'block'
}

//CSS
function css(){
    noneTechs()
    _css.style.display = 'block'
}

//JS
function js(){
    noneTechs()
    _js.style.display = 'block'
}
