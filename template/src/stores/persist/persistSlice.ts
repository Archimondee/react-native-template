import { createSlice } from "@reduxjs/toolkit";
import type { Character } from "types/ExampleTypes";

export type PersistState = {
  character: Character;
  dataLoading: boolean;
};

export const persistSlice = createSlice({
  name: "persist",
  initialState: {
    character: {} as Character,
    dataLoading: false,
  } as PersistState,
  reducers: {
    onLoadingGetCharacterData: state => {
      state.dataLoading = true;
    },
    onGetCharacterData: (state, action: { payload: Character }) => {
      state.character = action.payload;
      state.dataLoading = false;
    },
  },
});

export const { onLoadingGetCharacterData, onGetCharacterData } =
  persistSlice.actions;

export default persistSlice.reducer;
