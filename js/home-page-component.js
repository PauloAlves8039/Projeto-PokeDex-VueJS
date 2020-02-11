/*
 * Arquivo: home-page-component.js
 * Autor: Paulo Alves
 * Descrição: responsável pela criação do componente home page
 * Data: 10/02/2020
*/

Vue.component('home-page', {
    template: `
        <div>
            <input v-model="$parent.nameFilter" type="text" id="pokeFilter" placeholder="Search" maxlength="20">
            <ul class="poke-list">
                <my-list v-for="item in $parent.pokeList" :pokemon="item" :key="item.number"></my-list>
            </ul>
        </div>
    `
})

