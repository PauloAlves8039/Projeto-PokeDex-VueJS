/*
 * Arquivo: directives.js
 * Autor: Paulo Alves
 * Descrição: responsável pela criação de diretivas para manipular comportamento de elementos  
 * Data: 03/02/2020
*/

Vue.directive('rotate-on-scroll', function(el, binding){
    window.addEventListener('scroll', function(){
        let rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`
        el.style.transform = rotation
    })
})