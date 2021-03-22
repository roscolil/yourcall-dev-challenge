import { gql } from 'apollo-boost'

export const QUERY_CITY_NAME = gql`
  query CityName {
    getCityByName(name: "melbourne") {
      name
    }
  }
`