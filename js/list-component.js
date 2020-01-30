/*
 * Arquivo: list-component.js
 * Autor: Paulo Alves
 * Descrição: responsável pela criação de um coponente para uso de item de lista
 * Data: 30/01/2020
*/

Vue.component('my-list', {
    template: `
    <li class="poke-list-item">
        <img :src="'//serebii.net/pokedex-xy/icon/'+pokemon.number+'.png'">
        <span>{{pokemon.number | pokeNumber}} - {{pokemon.name}}</span>
    </li>
    `,
    props: ['pokemon']
})