

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abrirFecharMenu() {
    if(menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"
    }else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

// Função Carrosel 

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numerSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    //Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    // numrSlides = 3
    // numrSlides = 1 -> 2
    // estou no último? 2

    // [0, 1, 2]

    if(slideAtual < (numerSlides - 1)) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    //Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {
    //Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    if(slideAtual > 0){
        slideAtual--
    } else {
        slideAtual = numerSlides - 1
    }

    //Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}