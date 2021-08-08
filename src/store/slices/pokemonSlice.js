import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemon: [],
};

const pokemonSlice = createSlice({
  name: "Pokemon",
  initialState,
  reducers: {
    addPokemon(state, action) {
      state.pokemon.push(action.payload);
    },
    deletePokemon(state, action) {
      state.pokemon = state.pokemon.filter(
        (pokemon) => pokemon.id !== action.payload.id
      );
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
