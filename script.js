let btnMenu = document.querySelector('#btnMenu')
let main = document.querySelector('#main')
let nav = document.querySelector('#navegação')
let btnSkills = document.querySelector('#botao-habilidades')
let info = document.querySelector('#informaçao')
let show = true
let show2 = true

//----------------------------------------------------------------------



/*AQUI COMEÇA A ANIMAÇÃO DO BTN HEADER*/ 
    function animar() {
        btnMenu.classList.toggle('ativar')
    }

    btnMenu.addEventListener('click', animar)


/*AQUI COMEÇA A BARRA DE NAVEGAÇÃO*/



    function toggleSideBar() {
    show = !show;
    if (show) {
        nav.style.marginLeft = '-100vw';
        main.style.filter = ''
    } else {
        nav.style.marginLeft = '0vw';
        main.style.filter = 'brightness(65%)'
    }
}

btnMenu.addEventListener('click', toggleSideBar)

/*AQUI É OQ PRECISA PARA PODER CLICAR FORA DO MENU LATERAL E FECHAR*/

function closeSideBar() {
    if (!show) {
        toggleSideBar()
        btnMenu.classList.toggle('ativar')
    }
}



/*AQUI COMEÇA O BATAO DE SKILLS */

function abaSkills() { 
    show2 = !show2;
    if (show2) {
        info.style.display = 'none'
        
} else {
        info.style.display = 'block'
    }
}
btnSkills.addEventListener('click', abaSkills)

/*AQUI COMEÇA A ANIMAÇÃO DO BOTAO DE SKILLS */

function animar2() {
    btnSkills.classList.toggle('ativar2')
}

btnSkills.addEventListener('click', animar2)
    








    /*btn.addEventListener('click', function() {
        nav.style.display = 'block'; })*/

    
    














































    
   /*let showSideBar = false;

    
    function toggleSideBar() {
    showSideBar = !showSideBar;
    if (showSideBar) {
        nav.style.marginLeft = '-100vw';
    } else {
        nav.style.marginLeft = '0vw';
    }
}


btnMenu.addEventListener('click', toggleSideBar)*/





/*function visibility() {

    if (display == 'none') {
        element.addEventListener('click', function () {
        nav.classList.toggle('ativo')
        ele.classList.toggle('ativo')
    })
    } else {
        const links = document.querySelectorAll('nav a')

        for (const link of links) {
        link.addEventListener('click', function () {
            nav.classList.remove('ativo')
            ele.classList.remove('ativo')
        })
        }
    }
        
    }*/