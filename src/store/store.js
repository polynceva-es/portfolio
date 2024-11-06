import { configureStore } from '@reduxjs/toolkit'
import { languageReduser } from './reducers/languageSlice'

export const store = configureStore({
  reducer: {
    lang: languageReduser,
  },
})