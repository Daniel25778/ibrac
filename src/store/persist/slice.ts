import { createSlice } from '@reduxjs/toolkit';
import { encryptData } from 'main/utils/crypto';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserProps } from 'domain/models';

interface PersistState {
  accessToken: string | null;
  user: string | null;
  sidebar: boolean;
  theme: 'dark' | 'light';
}

const initialState: PersistState = {
  accessToken: null,
  sidebar: true,
  theme: 'light',
  user: null
};

const persistSlice = createSlice({
  initialState,
  name: 'persist',
  reducers: {
    logout(state: PersistState) {
      state.accessToken = null;
      state.user = null;
    },
    setAuth(state: PersistState, action: PayloadAction<{ accessToken: string; user: UserProps }>) {
      state.accessToken = encryptData(action.payload.accessToken);
      state.user = encryptData(JSON.stringify(action.payload.user));
    },
    setSidebar(state: PersistState, action: PayloadAction<boolean>) {
      state.sidebar = action.payload;
    },
    setTheme(state: PersistState, action: PayloadAction<'dark' | 'light'>) {
      state.theme = action.payload;
    }
  }
});

export const {
  reducer: persistReducer,
  actions: { setAuth, logout, setTheme, setSidebar }
} = persistSlice;
