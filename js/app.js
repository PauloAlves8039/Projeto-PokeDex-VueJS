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
            {name: 'Charizard', number:'006'},
            {name: 'Squirtle', number:'007'},
            {name: 'Pikachu', number:'025'},
            {name: 'Celebi', number:'251'},
            {name: 'Lucario', number:'448'},
            {name: 'Delphox', number:'655'}
        ]
    }
})