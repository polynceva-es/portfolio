import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../components/i18n";

const initLang = localStorage.getItem('lang');

const initialState = {
  language: initLang ? initLang : i18n.language,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changelanguage(state, action) {
      state.language = action.payload;
      localStorage.setItem('lang', action.payload);
    },
  },
});

export const { changelanguage } = languageSlice.actions;
export const languageReduser = languageSlice.reducer;
