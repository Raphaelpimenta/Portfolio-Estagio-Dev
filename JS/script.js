(function(){
    'use strict'

    /*Menu Hamburger*/
    let menu = document.querySelector('.menu');
    let btnMenuOpen = document.querySelector('.btnMenu_Open');
    let btnMenuClose = document.querySelector('.btnMenu_Close');

    btnMenuOpen.addEventListener('click', function(){
        menu.classList.add('menu_Open');
    });

    btnMenuClose.addEventListener('click', function(){
        menu.classList.remove('menu_Open');
    });


})()