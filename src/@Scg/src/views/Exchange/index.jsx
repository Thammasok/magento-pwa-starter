import React from 'react'
import { useQuery } from '@apollo/client'

import exchangeGql from './exchange.gql'

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(exchangeGql.getExchangeRateQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ))
}

export default ExchangeRates
