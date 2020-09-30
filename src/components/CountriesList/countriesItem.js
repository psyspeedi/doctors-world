import React from 'react'
import Card from '@material-ui/core/Card'

export default function CountyItem({ imgSrc, countryName }) {
  return (
    <Card className="country-item">
      <img src={imgSrc} alt={imgSrc} />
      <div className="content-wrap">
        <h3>{countryName}</h3>
      </div>
    </Card>
  )
}
