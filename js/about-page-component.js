/*
 * Arquivo: about-page-component.js
 * Autor: Paulo Alves
 * Descrição: responsável pela criação do componente about page
 * Data: 10/02/2020
*/

Vue.component('about-page', {
    template: `   
        <div>
            <router-link to="/"  class="back-button"  > &lt; </router-link>
        
            <div class="poke-profile" >
               <div>#{{ $route.params.number }} - {{pkm.name}}</div>
               <img class="poke-sprite" :src="'//serebii.net/sunmoon/pokemon/'+$route.params.number+'.png'" />
            </div>
            
            <ul class="poke-types" >
                <li v-for="type in pkm.types" >
                    <img :src="'//serebii.net/pokedex-bw/type/'+type.name+'.gif'" />
                </li>   
            </ul>
            
            <table class="stats" >
                <tr>
                    <td>Attack</td>
                    <td>Defense</td>
                    <td>Sp Atk</td>
                    <td>Sp Def</td>
                    <td>Speed</td>
                </tr>
                <tr>
                    <td>{{ pkm.attack }}</td>
                    <td>{{ pkm.defense }}</td>
                    <td>{{ pkm.sp_atk }}</td>
                    <td>{{ pkm.sp_def }}</td>
                    <td>{{ pkm.speed }}</td>
                </tr>
            </table>
            
        </div>
    `,
    data: function(){
        return {
            pkm: { types: []}
        }
    },
    mounted: function(){
        PokeService.API.Pokemon.find(this.$route.params.number)
            .then(pokemon => { this.pkm = pokemon } )
    }
})