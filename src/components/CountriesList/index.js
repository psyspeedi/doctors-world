import React, { useContext } from 'react'
import CountriesItem from './countriesItem'
import { ApiContext } from '../../context/apiContext/apiContext'
import Spinner from '../spinner'

export default function CountriesList() {
  const { countries, loading, notFound, countPerPage } = useContext(ApiContext)

  if (notFound) {
    return <span>Countries not found. Try it again.</span>
  }

  if (!notFound && !countries.length) {
    return <span>Start typing country name...</span>
  }

  return (
    <div className='countries-list'>
      {
        loading ? <Spinner/> :

        countries.slice(0, countPerPage).map(({name, flag, numericCode}) => <CountriesItem key={numericCode} imgSrc={flag} countryName={name}/>)
      }
    </div>
  )
}