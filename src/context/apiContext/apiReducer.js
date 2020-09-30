import { SET_LOADING, SET_SEARCH, SET_COUNTRIES, SET_NOT_FOUND, SET_COUNT_PER_PAGE } from '../types'

const handlers = {
  [SET_LOADING]: (state, {payload}) => ({...state, loading: payload}),
  [SET_COUNTRIES]: (state, {payload}) => ({...state, countries: payload}),
  [SET_SEARCH]: (state, {payload}) => ({...state, search: payload}),
  [SET_NOT_FOUND]: (state, {payload}) => ({...state, notFound: payload}),
  [SET_COUNT_PER_PAGE]: (state, {payload}) => ({...state, countPerPage: payload}),
  DEFAULT: state => state
}

export const apiReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler (state, action)
}