/*
Ao clicar no pokemon da listagem temos que esconder o cartao aberto e mostrar o cartao correspondente ao que foi selecionado na listagem  

Para isso precisamos trabalhar com 2 elementos
1- listagem
2 - cartão pokemon

criaremos 2 variaveis no JS para trabalhar com os elemenots da tela

vamos precisar trabalhar com um enveto de clique feito pelo usuario na listagem de pokemons

- remover a classe aberto
 só do cartao que está aberto
 - ao clicar em um pokemon da listagem pegamos o idpara saber qual cartão mostrar
 
 -remover a classe ativo que marca o pokemon selecionado

 - adicioar a classe ativo no item da lista selecionado
 */


// precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela 
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')



listaSelecaoPokemons.forEach(pokemon => {
    /*
vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons */
    pokemon.addEventListener('click', () => {

        //-remover a classe aberto só do cartao que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
            /*ao clicar em um pokemon da listagem pegamos o id para saber qual cartão mostrar */
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        /*-remover a classe ativo que marca o pokemon selecionado */
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        /* -adicionar a classe ativo no item da lista selecionado*/
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})