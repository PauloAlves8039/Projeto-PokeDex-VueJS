/*
 * Arquivo: list-component.js
 * Autor: Paulo Alves
 * Descrição: responsável pela criação de um componente para exibição de Pokemons em uma lista  
 * Data: 30/01/2020
*/

Vue.component('my-list', {
    template: `
    <li class="poke-list-item">
        <img :src="'//serebii.net/pokedex-xy/icon/'+pokemon.number.toString().padStart(3, '0')+'.png'">
        <span>{{pokemon.number | pokeNumber}} - {{pokemon.name}}</span>
    </li>
    `,
    props: ['pokemon']
})