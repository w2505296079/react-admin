export const add = () => {
  return {
    type: 'add',
  }
}

export const minus = () => {
  return {
    type: 'minus',
  }
}

// 异步action
export const asyncAdd = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
