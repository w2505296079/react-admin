const INITIAL_SATTE = {
  num: 0,
}

export default function counter(state = INITIAL_SATTE, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        num: state.num + 1,
      }
    case 'minus':
      return {
        ...state,
        num: state.num - 1,
      }
    default:
      return state
  }
}
