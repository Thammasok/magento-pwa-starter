import { gql } from '@apollo/client'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

export default {
  getExchangeRateQuery: EXCHANGE_RATES
}
