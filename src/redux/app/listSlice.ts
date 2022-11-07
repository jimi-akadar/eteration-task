import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {listApi, ListItem} from './listApi';
import {getData, storeData, listStorageKey} from '../../asyncStorage';

interface InitialState {
  itemList: Array<ListItem>;
}

const initialState: InitialState = {
  itemList: []
};

export const fetchList = createAsyncThunk('list/fetchList', async () => {
  const data = await getData(listStorageKey);
  if (data === null) {
    const res: Array<ListItem> = await listApi();
    await storeData(listStorageKey, res);
    return res;
  }

  return data as ListItem[];
});

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    moveUpItem: (state, action: PayloadAction<number>) => {
      const idx: number = action.payload;
      state.itemList.splice(
        idx - 1,
        2,
        state.itemList[idx],
        state.itemList[idx - 1]
      );
    },
    moveDownItem: (state, action: PayloadAction<number>) => {
      const idx: number = action.payload;
      state.itemList.splice(
        idx,
        2,
        state.itemList[idx + 1],
        state.itemList[idx]
      );
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.itemList = state.itemList.filter(item => item.id != action.payload);
    },
    addItem: (state, action: PayloadAction<ListItem>) => {
      const lastId: string = state.itemList[state.itemList.length - 1].id;
      state.itemList.push({
        ...action.payload,
        id: (Number(lastId) + 1).toString()
      });
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.itemList = action.payload;
    });
  }
});

export const {moveUpItem, moveDownItem, deleteItem, addItem} =
  listSlice.actions;

export default listSlice.reducer;
