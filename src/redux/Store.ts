// import reducers from './index'
// import ReduxThunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
// export default store;

import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import UserReducers from './UserReducers';

export const store = configureStore({
  reducer: {
    user: UserReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
