import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1050")
    .then(response => response.json())
    .then(response => {
      setPokemon(response.results);
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <button className="btn btn-primary" onClick={getPokemon}>Catch Them All!</button>
      {
        pokemon.map((poke,i) => {
          return <p key={i}>{poke.name}</p>
        })
      }
    </div>
  );
}

export default App;
