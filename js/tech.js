let _aside = document.querySelector('aside')
// let _buttom = document.querySelector('.buttom')
let _classIde = document.querySelector('.ide')
let _classHtml = document.querySelector('.html')
let _classCss = document.querySelector('.css')
let _classJs = document.querySelector('.js')
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
    _classIde.style.color = '#0075B8'
    _classHtml.style.color = '#D74A24'
    _classCss.style.color = '#3491CB'
    _classJs.style.color = '#EFD81D'
    _classIde.style.boxShadow = '0px -5px 0px #0075B8 inset'
    _classHtml.style.boxShadow = '0px -5px 0px #D74A24 inset'
    _classCss.style.boxShadow = '0px -5px 0px #3491CB inset'
    _classJs.style.boxShadow = '0px -5px 0px #EFD81D inset'
}

//IDE
function ide(){
    noneTechs()
    _ide.style.display = 'block'
    _classIde.style.color = '#fff'
    _classIde.style.boxShadow = '0px -60px 1px #0075B8 inset'
    _ide.style.boxShadow = '0px 0px 50px #0075B885 inset'
}

//HTML
function html(){
    noneTechs()
    _html.style.display = 'block'
    _classHtml.style.color = '#fff'
    _classHtml.style.boxShadow = '0px -60px 1px #D74A24 inset'
    _html.style.boxShadow = '0px 0px 50px #D74A2485 inset'
}

//CSS
function css(){
    noneTechs()
    _css.style.display = 'block'
    _classCss.style.color = '#fff'
    _classCss.style.boxShadow = '0px -60px 1px #3491CB inset'
    _css.style.boxShadow = '0px 0px 50px #3491CB85 inset'
}

//JS
function js(){
    noneTechs()
    _js.style.display = 'block'
    _classJs.style.color = '#000'
    _classJs.style.boxShadow = '0px -60px 1px #EFD81D inset'
    _js.style.boxShadow = '0px 0px 50px #EFD81D85 inset'
}
