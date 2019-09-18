const pokemonName=document.getElementById(`pokemon-name`);
//pokemonName.innerText=`El nombre de mi pokemon es: `;  
const pokemonheight=document.getElementById(`pokemonheight`);

const pokemonApiUrl=`https://pokeapi.co/api/v2/`;

let getPokemonData=async ()=>{
    const respose= await fetch(`${pokemonApiUrl}pokemon/1/`);
    const pokemon= await respose.json();
    console.log(pokemon);
    const {name, height}= pokemon;
    pokemonName.innerText=name;
    pokemonheight.innerText=`la altura es ${height}`;
}

getPokemonData();
//async (asincrona) hace una busqueda en segundo plano, let es para hacer una funcion
//await para esperar a que haga la busqueda 
//fetch es como un foreach, y necesita una url para ir  abuscar 