document.getElementById('get-pokemon').addEventListener('click', function() => { 
    const pokemonSelect = document.getElementById('pokemon-select').value;
    const pokemonName = pokemonSelect.value
}

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) 
.then (response => { 
    
    if (!response.ok) {throw new Error('No se pudo obtener la información del Pokémon.'); 
} 
    
    return response.json();

})

    .then(data => {

        const pokemonName = data.name;
        const pokemonHeight = data.height;
        const pokemonWeight = data.weight;
        const pokemonType = data.type;
        const pokemonImage = data.image;
     
 
 document.getElementById("get-pokemon").innerHTML = 
 <h2>${pokemonName.chart(0).toUpperCase() + pokemonName.slice(1)</h2>
    <p>Tipo: ${pokemonType}</p>
    


