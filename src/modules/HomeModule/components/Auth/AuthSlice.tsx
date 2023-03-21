// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AuthState {
//   user: firebase.User | null;
// }

// const initialState: AuthState = {
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setUser(state, action: PayloadAction<firebase.User>) {
//       state.user = action.payload;
//     },
//     clearUser(state) {
//       state.user = null;
//     },
//   },
// });

// export const { setUser, clearUser } = authSlice.actions;

// export default authSlice.reducer;