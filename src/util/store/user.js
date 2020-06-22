const userInfo =
  (window.localStorage.getItem('userInfo') &&
    JSON.parse(window.localStorage.getItem('userInfo'))) ||
  ''

const user = (state = userInfo, action) => {
  switch (action.type) {
    case 'login':
      window.localStorage.setItem('userInfo', JSON.stringify(action.params))
      console.log('action', action)
      Object.assign(state, action.params)
      return state
    case 'logOut':
      window.localStorage.removeItem('userInfo')
      Object.assign(state, { token: '' })
      return state
    default:
      return state
  }
}

export default user
