/*
 * Arquivo: app.js
 * Autor: Paulo Alves
 * Descrição: responsável pela lógica de funcionamento da aplicação
 * Data: 26/01/2020
*/

const app = new Vue({
    el: '#app',
    data: {
        pokemonList: [],
        nameFilter: ''
    },
    mounted: function(){
        PokeService.API.Pokemon.listAll().then(pokemonList => {
            this.pokemonList = pokemonList
        })
      },
    computed: {
        pokeList: function(){
            let nameFilter = this.nameFilter.toLowerCase()
            return this.pokemonList.filter(pokemon => pokemon.name.includes(nameFilter))
        }
    },
})