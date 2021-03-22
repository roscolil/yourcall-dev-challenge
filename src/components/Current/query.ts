import { gql } from 'apollo-boost'

export const QUERY_GET_CURRENT = gql`
  query getCurrentWeather($name: String!) {
    getCityByName(name: $name) {
      weather {
        summary {
          title
        description
          icon
        }
        temperature {
          actual
          min
          max
        }
      }
    }
  }
`