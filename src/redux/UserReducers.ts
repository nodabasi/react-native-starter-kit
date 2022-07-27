import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { get } from "../Api/Api";

export interface UserState {
  hello: boolean;
  usersData: any;
}

const initialState: UserState = {
  hello: true,
  usersData: [],
};

export const fetchUserData = createAsyncThunk("fetchUserData", async () => {
  const data = await get("");
  return data;
});

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setHello: (state, action: PayloadAction<{ status: boolean }>) => {
      state.hello = action.payload.status;
    },
    addNewUser: (state, action: PayloadAction<{ newUser: any }>) => {
      state.usersData.push(action.payload.newUser);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      // console.log(action.payload.users,"???")
      console.log('FETCH USER DATA FULLFILLED');
      state.usersData = action.payload.users;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      console.log('FETCH USER DATA REJECTED');
    });
    builder.addCase(fetchUserData.pending, (state, action) => {
      console.log('FETCH USER DATA PENDING');
    });
  },
});

// Action creators are generated for each case reducer function
export const { addNewUser } = counterSlice.actions;

export default counterSlice.reducer;
