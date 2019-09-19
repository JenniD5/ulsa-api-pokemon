/*const pokemonName=document.getElementById(`pokemon-name`);
//pokemonName.innerText=`El nombre de mi pokemon es: `;  
const pokemonheight=document.getElementById(`pokemonheight`);
const pokemonFrontImg = document.getElementById('pokemon-img-front');

const pokemonApiUrl=`https://pokeapi.co/api/v2/`;

let getPokemonData=async ()=>{
    const respose= await fetch(`${pokemonApiUrl}pokemon/1/`);
    const pokemon= await respose.json();
    console.log(pokemon);
    const {name, height}= pokemon;
    const frontImg = pokemon.sprites.front_default;
    pokemonName.innerText=name;
    pokemonheight.innerText=`la altura es ${height}`;
    pokemonFrontImg.src = frontImg;
}

getPokemonData();*/
//async (asincrona) hace una busqueda en segundo plano, let es para hacer una funcion
//await para esperar a que haga la busqueda 
//fetch es como un foreach, y necesita una url para ir  abuscar 

const pokemonName = document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonFrontImg = document.getElementById('pokemon-img-front');
const pokemonNumber = document.getElementById('pokemon-number');
const pokemonWeight=document.getElementById('pokemon-weight');
pokemonAbilities=document.getElementById(``);

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async ()=> {
    const respose = await fetch(`${pokemonApiUrl}pokemon/67`);
    const pokemon = await respose.json();
    console.log(pokemon);
    const {name , height, abilities} = pokemon;
    const frontImg = pokemon.sprites.front_default;
    pokemonName.innerText = name;
    pokemonHeight.innerText = `La altura es: ${height}`;
    pokemonNumber.innerText=`numero en la lista: ${pokemon.id}`;
    pokemonWeight.innerText=`el es de: ${pokemon.weight}`;
    pokemonFrontImg.src = frontImg;
abilities.forEach(element => {
    pokemonAbilities.innerHTML=`<li> ${element.name} </li>`;
    
});

};

getPokemonData();
