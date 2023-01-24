import { register, login, logout, refreshUser } from './auth-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  error: null,
  userRefresh: false,
  userRefreshCompleted: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
      })
      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.userRefresh = false;
        state.userRefreshCompleted = true;
      })
      .addCase(refreshUser.pending, state => {
        state.userRefresh = true;
        state.userRefreshCompleted = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.userRefresh = false;
        state.userRefreshCompleted = true;
        state.user = { name: '', email: '' };
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          refreshUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled, logout.fulfilled),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          refreshUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default authSlice.reducer;
