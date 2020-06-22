const userInfo =
  (window.localStorage.getItem('userInfo') &&
    JSON.parse(window.localStorage.getItem('userInfo'))) ||
  ''

export default function user(state = userInfo, action) {
  switch (action.type) {
    case 'login':
      window.localStorage.setItem('userInfo', JSON.stringify(action.params))

      return { state, ...action.params }
    case 'logOut':
      window.localStorage.removeItem('userInfo')
      return { state, ...{ token: '' } }
    default:
      return state
  }
}
