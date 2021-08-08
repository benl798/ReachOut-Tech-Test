import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types"; // ES6
import { useSelector, useDispatch } from "react-redux";
import { deletePokemon } from "../store/slices/pokemonSlice";

const SavedPokemonCards = ({ savedPokemon }) => {
  const pokemonList = useSelector((state) => state.pokemon.pokemon);
  const dispatch = useDispatch();

  const deletePokemonHandler = (id) => {
    dispatch(deletePokemon(id));
  };

  const pokemonTable = pokemonList.map((pokemon) => (
    <tr>
      <td>{pokemon.name}</td>
      <td>
        <img src={pokemon.image} alt="Pokemon"/>
      </td>
      <button
        className="delete"
        onClick={() => deletePokemonHandler({ id: pokemon.id })}
      >
        x
      </button>
    </tr>
  ));

  // const pokemonTable = pokemon.map((pokemon) => {
  //   <tr>
  //     <td>{pokemon.name}</td>
  //     <button
  //   </tr>
  // })
  return (
    <div>
      {/* {savedPokemon.map((pokemon) => (
        <div>
          <div>{pokemon.name}</div>
          <img src={pokemon.sprites.front_default} alt="Pokemon sprite" />
        </div>
      ))} */}
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

SavedPokemonCards.propTypes = {
  savedPokemon: PropTypes.array.isRequired,
};

export default SavedPokemonCards;
