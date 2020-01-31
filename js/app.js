/*
 * Arquivo: app.js
 * Autor: Paulo Alves
 * Descrição: responsável pela lógica de funcionamento da aplicação
 * Data: 26/01/2020
*/

const app = new Vue({
    el: '#app',
    data: {
        pokemonList: [
            {name: 'charizard', number: 6},
            {name: 'squirtle', number: 7},
            {name: 'pikachu', number: 25},
            {name: 'celebi', number: 251},
            {name: 'lucario', number: 448},
            {name: 'delphox', number: 655}
        ],
        nameFilter: ''
    },
    computed: {
        pokeList: function(){
            let nameFilter = this.nameFilter.toLowerCase()
            return this.pokemonList.filter(pokemon => pokemon.name.includes(nameFilter))
        }
    },
})