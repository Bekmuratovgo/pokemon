import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  error: '',
  loading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemos',
  initialState,
  reducers: {
    setSuccessData(state, action) {
      state.pokemons = action.payload;
    },

  }
})

export default pokemonSlice.reducer;