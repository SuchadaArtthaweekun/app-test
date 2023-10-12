import { configureStore } from '@reduxjs/toolkit'
import { attractionApi } from '../services/attraction'
import attractionReducer from '../features/attracttions/attractionSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    [attractionApi.reducerPath]: attractionApi.reducer,
    attraction: attractionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(attractionApi.middleware),
})

setupListeners(store.dispatch)