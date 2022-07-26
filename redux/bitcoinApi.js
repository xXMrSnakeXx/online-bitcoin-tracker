import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const bitcoinApi = createApi({
  reducerPath: "bitcoin",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coindesk.com/v1/",
  }),
  tagTypes: ["Bitcoin"],
  endpoints: (buider) => ({
    getBitcoinRate: buider.query({
      query: () => "bpi/currentprice.json",
      providesTags: ["Bitcoin"],
    }),
  }),
});

export const { useGetBitcoinRateQuery } = bitcoinApi;