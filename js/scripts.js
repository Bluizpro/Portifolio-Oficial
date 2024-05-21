/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
function abrirLink() {
    
    var url = 'https://github.com/Bluizpro/ProEventos.API/tree/main';
    
    // Abre o link em uma nova aba
    window.open(url, '_blank');
}
function abrirLink2() {
    
    var url = 'https://botfrontassistente.netlify.app';
    
    // Abre o link em uma nova aba
    window.open(url, '_blank');
}
function abrirLink3() {
    
    var url = 'https://gerenciador-tarefass.netlify.app/';
    
    // Abre o link em uma nova aba
    window.open(url, '_blank');
}
function abrirLink4() {
    
    var url = 'https://bldelivery.netlify.app/';
    
    // Abre o link em uma nova aba
    window.open(url, '_blank');
}

function abrirLink5() {
    
    var url = 'https://buscacep2023.netlify.app/';
    
    // Abre o link em uma nova aba
    window.open(url, '_blank');
}
function abrirLink6() {
    // Substitua 'SEU_LINK_AQUI' pelo URL que você deseja abrir
    var url = 'https://dandarapreta.netlify.app/';
    
    // Abre o link em uma nova aba
    window.open(url, '_blank');
}
function abrirLinkcurriculo() {
    // Substitua 'SEU_LINK_AQUI' pelo URL que você deseja abrir
    var url = 'https://drive.google.com/file/d/1wz3pY5jZH8QwNcpuVIie996dzEvGyOkg/view?usp=sharing';
    
    // Abre o link em uma nova aba
    window.open(url, '_blank');
}                 
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
