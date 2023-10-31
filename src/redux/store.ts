import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "../redux/features/rootReducer";
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'; 
import autoMergeLevel2 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, combinedReducers),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const  persistor = persistStore(store)