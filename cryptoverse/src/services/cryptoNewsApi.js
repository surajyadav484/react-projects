import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '1894d0e8b7mshae3bfcbfbe3097bp198b86jsn5ab596d05649'
  }

  const createRequest = (url)=>({url,headers:newsApiHeaders})

  export const cryptoNewsApi = createApi({
      reducerPath:'cryptoNewsApi',
      baseQuery:fetchBaseQuery({baseUrl:'https://bing-news-search1.p.rapidapi.com/'}),
      endpoints:(builder)=>({
          getCryptoNews:builder.query({
              query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
          })
      }
      )
  })

  export const {
      useGetCryptoNewsQuery
  } = cryptoNewsApi;