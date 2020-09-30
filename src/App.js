import React from 'react'
import SearchInput from './components/SearchInput'
import CountriesList from './components/CountriesList'
import { ApiState } from './context/apiContext/apiState'
import './App.css'


const App = () => (
  <ApiState>
    <div className="App">
      <SearchInput />
      <CountriesList />
    </div>
  </ApiState>

)

export default App
