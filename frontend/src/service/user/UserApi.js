import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../utils/baseQuery.js";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
               url: `/user/get`,
                method: 'GET',
            }),
            transformResponse: (data) => data.user
        })
    }),
});

export const {
    useGetUserQuery
} = userApi;

export const {
    getUser
} = userApi.endpoints;