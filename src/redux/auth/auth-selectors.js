export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectUserRefresh = state => state.auth.userRefresh;

export const selectUserRefreshCompleted = state =>
  state.auth.userRefreshCompleted;
