import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type City = {
  __typename?: 'City';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  coord?: Maybe<Coordinates>;
  weather?: Maybe<Weather>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  lon?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
};

export type Summary = {
  __typename?: 'Summary';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type Temperature = {
  __typename?: 'Temperature';
  actual?: Maybe<Scalars['Float']>;
  feelsLike?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
};

export type Wind = {
  __typename?: 'Wind';
  speed?: Maybe<Scalars['Float']>;
  deg?: Maybe<Scalars['Int']>;
};

export type Clouds = {
  __typename?: 'Clouds';
  all?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
  humidity?: Maybe<Scalars['Int']>;
};

export type Weather = {
  __typename?: 'Weather';
  summary?: Maybe<Summary>;
  temperature?: Maybe<Temperature>;
  wind?: Maybe<Wind>;
  clouds?: Maybe<Clouds>;
  timestamp?: Maybe<Scalars['Int']>;
};

export type ConfigInput = {
  units?: Maybe<Unit>;
  lang?: Maybe<Language>;
};

export type Query = {
  __typename?: 'Query';
  getCityByName?: Maybe<City>;
  getCityById?: Maybe<Array<Maybe<City>>>;
};


export type QueryGetCityByNameArgs = {
  name: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  config?: Maybe<ConfigInput>;
};


export type QueryGetCityByIdArgs = {
  id?: Maybe<Array<Scalars['String']>>;
  config?: Maybe<ConfigInput>;
};

export enum Unit {
  Metric = 'metric',
  Imperial = 'imperial',
  Kelvin = 'kelvin'
}

export enum Language {
  Af = 'af',
  Al = 'al',
  Ar = 'ar',
  Az = 'az',
  Bg = 'bg',
  Ca = 'ca',
  Cz = 'cz',
  Da = 'da',
  De = 'de',
  El = 'el',
  En = 'en',
  Eu = 'eu',
  Fa = 'fa',
  Fi = 'fi',
  Fr = 'fr',
  Gl = 'gl',
  He = 'he',
  Hi = 'hi',
  Hr = 'hr',
  Hu = 'hu',
  Id = 'id',
  It = 'it',
  Ja = 'ja',
  Kr = 'kr',
  La = 'la',
  Lt = 'lt',
  Mk = 'mk',
  No = 'no',
  Nl = 'nl',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt_br',
  Ro = 'ro',
  Ru = 'ru',
  Sv = 'sv',
  Se = 'se',
  Sk = 'sk',
  Sl = 'sl',
  Sp = 'sp',
  Es = 'es',
  Sr = 'sr',
  Th = 'th',
  Tr = 'tr',
  Ua = 'ua',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_cn',
  ZhTw = 'zh_tw',
  Zu = 'zu'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetCurrentWeatherQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetCurrentWeatherQuery = (
  { __typename?: 'Query' }
  & { getCityByName?: Maybe<(
    { __typename?: 'City' }
    & { weather?: Maybe<(
      { __typename?: 'Weather' }
      & { summary?: Maybe<(
        { __typename?: 'Summary' }
        & Pick<Summary, 'title' | 'description' | 'icon'>
      )>, temperature?: Maybe<(
        { __typename?: 'Temperature' }
        & Pick<Temperature, 'actual' | 'min' | 'max'>
      )> }
    )> }
  )> }
);

export type CityNameQueryVariables = Exact<{ [key: string]: never; }>;


export type CityNameQuery = (
  { __typename?: 'Query' }
  & { getCityByName?: Maybe<(
    { __typename?: 'City' }
    & Pick<City, 'name'>
  )> }
);


export const GetCurrentWeatherDocument = gql`
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
    `;

/**
 * __useGetCurrentWeatherQuery__
 *
 * To run a query within a React component, call `useGetCurrentWeatherQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentWeatherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentWeatherQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCurrentWeatherQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentWeatherQuery, GetCurrentWeatherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentWeatherQuery, GetCurrentWeatherQueryVariables>(GetCurrentWeatherDocument, options);
      }
export function useGetCurrentWeatherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentWeatherQuery, GetCurrentWeatherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentWeatherQuery, GetCurrentWeatherQueryVariables>(GetCurrentWeatherDocument, options);
        }
export type GetCurrentWeatherQueryHookResult = ReturnType<typeof useGetCurrentWeatherQuery>;
export type GetCurrentWeatherLazyQueryHookResult = ReturnType<typeof useGetCurrentWeatherLazyQuery>;
export type GetCurrentWeatherQueryResult = Apollo.QueryResult<GetCurrentWeatherQuery, GetCurrentWeatherQueryVariables>;
export const CityNameDocument = gql`
    query CityName {
  getCityByName(name: "melbourne") {
    name
  }
}
    `;

/**
 * __useCityNameQuery__
 *
 * To run a query within a React component, call `useCityNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useCityNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCityNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useCityNameQuery(baseOptions?: Apollo.QueryHookOptions<CityNameQuery, CityNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CityNameQuery, CityNameQueryVariables>(CityNameDocument, options);
      }
export function useCityNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CityNameQuery, CityNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CityNameQuery, CityNameQueryVariables>(CityNameDocument, options);
        }
export type CityNameQueryHookResult = ReturnType<typeof useCityNameQuery>;
export type CityNameLazyQueryHookResult = ReturnType<typeof useCityNameLazyQuery>;
export type CityNameQueryResult = Apollo.QueryResult<CityNameQuery, CityNameQueryVariables>;