import { gql } from 'apollo-boost'

export const GET_WEATHER = gql`
  query {
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
`