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
            {name: 'Charizard', number: 6},
            {name: 'Squirtle', number: 7},
            {name: 'Pikachu', number: 25},
            {name: 'Celebi', number: 251},
            {name: 'Lucario', number: 448},
            {name: 'Delphox', number: 655}
        ]
    }
})