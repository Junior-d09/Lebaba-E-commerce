import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '../../../utils/baseURL'

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/reviews`,
        credentials: 'include',
    }), 
    tagTypes: ['reviews'],
    endpoints: (builder) => ({
        postReview:builder.mutation({
            query: (reviewData) => ({
                url: "/post-review",
                method: "POST",
                body: reviewData
            }),
            invalidatesTags: (result, error, postId)  => [{types: "Reviews", id: postId }]
        }),
        getReviewsCount: builder.query({
            query: ()  => ({
                url: "/total-reviews"
            })
        }),
        getReviewByUserId: builder.query({
            query: (userId)  =>({
                url: `/${userId}`
            }),
            provideTags: (result)  => result ? [{types: "Reviews", id: result[0]?.email}]: []
        })
    })
})

export const {usePostReviewMutation, useGetReviewsCountQuery, useGetReviewByUserIdQuery} = reviewApi;

export default reviewApi;