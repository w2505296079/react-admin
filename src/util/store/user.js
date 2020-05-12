const userInfo = {
  loginState: window.localStorage.getItem('token') || '',
  a: 'sss',
}

const user = (state = userInfo, action) => {
  switch (action.type) {
    case 'login':
      return { state: Object.assign(state, action.params) }
    case 'logout':
      return { state: Object.assign(state, action) }
    default:
      return state
  }
}

export default user
