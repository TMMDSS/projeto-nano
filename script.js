/*AQUI COMEÇA O BOTAO DE SKILLS */

const btn = document.querySelector('#btnMenu')

        function clickMenu() {
    if (informaçao.style.display == 'block') {
        informaçao.style.display = 'none'
    } else {
        informaçao.style.display = 'block'
    }          
}


    function animar() {
        btn.classList.toggle('ativar')
    }

    btn.addEventListener('click', animar)


/*AQUI COMEÇA A BARRA DE NAVEGAÇÃO*/

    let btnMenu = document.querySelector('#btnMenu')
    let nav = document.querySelector('#navegação')
    let main = document.querySelector('#main')


    let showSideBar = true;
    
    
    function toggleSideBar() {
    showSideBar = !showSideBar;
    if (showSideBar) {
        nav.style.marginLeft = '-100vw';
        main.style.filter = ''
    } else {
        nav.style.marginLeft = '0vw';
        main.style.filter = 'blur(2px)'
    }
}

function closeSideBar() {
    if (!showSideBar) {
        toggleSideBar()
        btn.classList.toggle('ativar')
    }
}


btnMenu.addEventListener('click', toggleSideBar)

    









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