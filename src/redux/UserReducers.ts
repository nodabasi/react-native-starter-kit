import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  hello: boolean;
}

const initialState: UserState = {
  hello: true,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setHello: (state, action: PayloadAction<{status: boolean}>) => {
      state.hello = action.payload.status;
    },
  },
  extraReducers: builder => {},
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
