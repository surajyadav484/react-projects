import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '1894d0e8b7mshae3bfcbfbe3097bp198b86jsn5ab596d05649'
}

const createRequest = (url) => ({url, headers:cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath:'crptoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://coinranking1.p.rapidapi.com/'}),
    endpoints: (builder) => ({
            getCryptos: builder.query({
                query: (count) => createRequest(`/coins?limit=${count}`)
            }),
        }
    )
})

export const {
    useGetCryptosQuery
} = cryptoApi;