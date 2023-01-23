export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user.name;

export const selectUserRefresh = state => state.auth.userRefresh;

export const selectUserRefreshCompleted = state =>
  state.auth.userRefreshCompleted;
