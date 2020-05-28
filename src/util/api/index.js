import request from './request'

export const test = (params) => {
  const result = request.post('/341-2', {
    ...params,
  })
  return result
}
