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
            {name: 'Celebi', number: 251},
            {name: 'Lucario', number: 448},
            {name: 'Delphox', number: 655}
        ]
    }
})