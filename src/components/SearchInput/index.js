import React, { useContext, useEffect } from 'react'
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
import { ApiContext } from '../../context/apiContext/apiContext'
import useDebounce from '../../hooks/useDebounce'

export default function SearchInput() {
  const { fetchCountries, search, setSearch, countPerPage, setCountPerPage } = useContext(ApiContext)
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    fetchCountries(search)
  }, [debouncedSearch])

  return (
    <div className="search-container">
      <TextField
        label="Search"
        className="search-input"
        type="text"
        onChange={e => setSearch(e.target.value.trim())}
        variant="outlined"
      />
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Count</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Count"
          className="select"
          value={countPerPage}
          onChange={e => setCountPerPage(e.target.value)}
        >
          <MenuItem value={10}>10 per page</MenuItem>
          <MenuItem value={20}>20 per page</MenuItem>
          <MenuItem value={50}>50 per page</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
