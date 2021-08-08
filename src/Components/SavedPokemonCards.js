import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePokemon } from "../store/slices/pokemonSlice";

const SavedPokemonCards = () => {
  const pokemonList = useSelector((state) => state.pokemon.pokemon);
  const dispatch = useDispatch();

  const deletePokemonHandler = (id) => {
    dispatch(deletePokemon(id));
  };

  const pokemonTable = pokemonList.map((pokemon) => (
    <div>
      <div>{pokemon.name}</div>
      {pokemon.types.map((type) => (
        <div>{type.type.name}</div>
      ))}
      <img src={pokemon.image} alt="Pokemon" />
      <button
        className="delete"
        onClick={() => deletePokemonHandler({ id: pokemon.id })}
      >
        x
      </button>
    </div>

    // <tr>
    //   <td>{pokemon.name}</td>
    //   <td>
    //     <img src={pokemon.image} alt="Pokemon"/>
    //   </td>
    //   <button
    //     className="delete"
    //     onClick={() => deletePokemonHandler({ id: pokemon.id })}
    //   >
    //     x
    //   </button>
    // </tr>
  ));

  // const pokemonTable = pokemon.map((pokemon) => {
  //   <tr>
  //     <td>{pokemon.name}</td>
  //     <button
  //   </tr>
  // })
  return (
    <div>
      <h1>Saved Pokemon</h1>
      <table>
        <tr>
          <th>Name</th>
        </tr>
        {pokemonTable}
      </table>
    </div>
  );
};

export default SavedPokemonCards;
