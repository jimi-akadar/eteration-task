import {configureStore, isAnyOf} from '@reduxjs/toolkit';
import {storeData, listStorageKey} from '../asyncStorage';
import {ListItem} from './app/listApi';
import listReducer, {
  addItem,
  deleteItem,
  moveUpItem,
  moveDownItem
} from './app/listSlice';

import {listenerMiddleware, startAppListening} from './listenerMiddleware';

startAppListening({
  matcher: isAnyOf(addItem, deleteItem, moveUpItem, moveDownItem),
  effect: async (action, listenerApi) => {
    const newItemList: Array<ListItem> = listenerApi.getState().list.itemList;
    await storeData(listStorageKey, newItemList);
  }
});

export const store = configureStore({
  reducer: {list: listReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
