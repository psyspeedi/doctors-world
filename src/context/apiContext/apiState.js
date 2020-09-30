import React, {useReducer} from 'react'
import { apiReducer } from './apiReducer'
import { SET_LOADING, SET_COUNTRIES, SET_SEARCH, SET_NOT_FOUND, SET_COUNT_PER_PAGE } from '../types'
import { ApiContext } from './apiContext'
import countryNameFilter from '../../utils/countryNameFilter'

export const ApiState = ({children}) => {
  const initialState = {
    loading: false,
    countries: [],
    countPerPage: 10,
    search: '',
    notFound: false
  }

  const [state, dispatch] = useReducer(apiReducer, initialState)
  const apiUrl = 'https://restcountries.eu/rest/v2/all'


  const setLoading = (loading) => dispatch({type: SET_LOADING, payload: loading})

  const setNotFound = (found) => dispatch({type: SET_NOT_FOUND, payload: found})

  const setSearch = (text) => dispatch({type: SET_SEARCH, payload: text})

  const setCountries = (countries) => dispatch({type: SET_COUNTRIES, payload: countries})

  const setCountPerPage = (countPerPage) => dispatch({type: SET_COUNT_PER_PAGE, payload: countPerPage})

  const fetchCountries = async (search) => {
    setLoading(true)
    setNotFound(false)

    if (!search) {
      setCountries([])
      setLoading(false)
      return
    }

    try {
      const response = await fetch(apiUrl)
      const result = await response.json()
      const filteredCountries = countryNameFilter(result, search)

      if (!filteredCountries.length) {
        setNotFound(true)
        setLoading(false)
        return
      }

      setCountries(filteredCountries)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      throw new Error(e)
    }
  }

  const { showPerPage, countries, loading, search, notFound, countPerPage } = state

  return (
    <ApiContext.Provider value={{
      showPerPage,
      countries,
      loading,
      search,
      notFound,
      countPerPage,
      fetchCountries,
      setSearch,
      setLoading,
      setCountPerPage
    }}
    >
      {children}
    </ApiContext.Provider>
  )
}