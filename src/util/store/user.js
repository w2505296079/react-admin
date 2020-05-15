const userInfo = {
  loginState: window.localStorage.getItem('__token') || '',
};

// export const loginAction = params => {
//   window.localStorage.setItem('__token', params);
//   return params;
// };

const user = (state = userInfo, action) => {
  switch (action.type) {
    case 'login':
      window.localStorage.setItem('__token', action.params.loginState);
      return { state: Object.assign(state, action.params) };
    case 'logOut':
      window.localStorage.removeItem('__token');
      window.location.reload();
      return { state: Object.assign(state, { loginState: '' }) };
    default:
      return state;
  }
};

export default user;
