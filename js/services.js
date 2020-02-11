/*
 * Arquivo: services.js
 * Autor: Paulo Alves
 * Descrição: responsável pela criação de requisições no servidor 
 * Data: 05/02/2020
*/

let PokeService = {
    API: {
        url: 'https://dev.treinaweb.com.br/pokeapi/pokedex/1',
        get: (url) => {
            return fetch(`${PokeService.API.url}${url}`)
                .then(response => response.json())
        },
        Pokemon: {
            listAll: () => {
                return PokeService.API.get('pokedex/1')
                    .then(response => {
                        return response.pokemon
                            .map(pokemon => {
                                pokemon.number = PokeService.getNumberFromURL(pokemon.resource_uri)
                                return pokemon
                            })
                            .filter(pokemon => pokemon.number < 1000)
                            .sort((a, b) => (a.number > b.number ? 1 : -1))
                    })
            },
            find: (number) => {
                return PokeService.API.get(`pokemon/${number}`)
            }
        }
    },
    getNumberFromURL: (url) => {
        return parseInt(url.replace(/.*\/(\d+)\/$/,'$1'))
    }
}