export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectAuthError = state => state.auth.error;
export const selectAuthLoading = state => state.auth.isLoading;
export const selectUserRefreshCompleted = state =>
  state.auth.userRefreshCompleted;
