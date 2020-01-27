/*
 * Arquivo: filters.js
 * Autor: Paulo Alves
 * Descrição: responsável pela atribuição de filtros globais
 * Data: 27/01/2020
*/

Vue.filter('pokeNumber', number => ('000' + number).slice(-3) )