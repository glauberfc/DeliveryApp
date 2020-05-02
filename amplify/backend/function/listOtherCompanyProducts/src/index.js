/* Amplify Params - DO NOT EDIT
	API_DELIVERINGHOPEAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_DELIVERINGHOPEAPI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const axios = require('axios')

const listProducts = `
  query ListProducts ($companyId: ID!, $productId: ID!) {
    listProducts(
      filter: {
        and: {
         companyId: {
           eq: $companyId
          }, 
          id: {
            ne: $productId
          }   
        }    
      }
    ) {
      items {
        id
        name
      }
    }
  }
`

exports.handler = async (event, context) => {
  const { companyId, productId } = event.arguments

  try {
    const result = await axios({
      url: 'http://192.168.1.2:20002/graphql',
      method: 'post',
      headers: {
        'x-api-key': 'da2-fakeApiId123456',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZDhjYTUyOC00OTMxLTQyNTQtOTI3My1lYTVlZTg1M2YyNzEiLCJjb2duaXRvOmdyb3VwcyI6W10sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhbGdvcml0aG0iOiJIUzI1NiIsImlzcyI6Imh0dHBzOi8vY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vdXMtZWFzdC0xX2Zha2VfaWRwIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiIiwiY29nbml0bzpyb2xlcyI6W10sImF1ZCI6IjJoaWZhMDk2YjNhMjRtdm0zcGhza3VhcWkzIiwiZXZlbnRfaWQiOiIxOGY0MDY3ZS05OTg1LTRlYWUtOWYzMy1mNDVmNDk1NDcwZDAiLCJ0b2tlbl91c2UiOiJpZCIsInBob25lX251bWJlciI6IisxMjA2MjA2MjAxNiIsImV4cCI6MTU4ODQ2NDM5NiwiZW1haWwiOiIiLCJhdXRoX3RpbWUiOjE1ODg0MjExOTYsImlhdCI6MTU4ODQyMTE5Nn0.0c21HdDC9ohoK4jqw1R2iajYLz-m2FBctvvILyZAMno',
      },
      data: {
        query: listProducts,
        variables: {
          companyId,
          productId,
        },
      },
    })

    context.done(null, {
      ...result.data.data.listProducts,
    })
  } catch (err) {
    console.log('Error posting to appsync: ', err)
    context.done(error)
  }
}
