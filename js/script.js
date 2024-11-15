document.getElementById('get-pokemon').addEventListener('click', () => { 
    const pokemonSelect = document.getElementById('pokemon-select').value;


 fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelect}`) 
     .then (response => { 
    
         if (!response.ok) {throw new Error('No se pudo obtener la información del Pokémon.'); 
        } 
    
         return response.json();

    })
    .then(data => {
console.log(data)
        const pokemonName = data.name;
        const pokemonHeight = data.height;
        const pokemonWeight = data.weight;
        const pokemonType = data.type;
        const pokemonImage = data.image;
     
 
 document.getElementById("get-pokemon").innerHTML = `
 <h2>${pokemonName.toUpperCase()}</h2>
    <p>Tipo: ${pokemonType}</p>
    <p>Height: ${pokemonHeight / 10} m</p>
    <p>Height: ${pokemonWeight / 10} kg</p>
    <img src="${data.sprites.front_default}" alt="${data.name}">
      `;
    })

  .catch (function (error) { 
    alert(error.message); 
    document.getElementById("get-pokemon").innerHTML = "No se puede saber el pokemon"

    });
})


    
 


