import { gql } from 'apollo-boost'
export const GET_BOOKS = gql`
  {
    books {
      name
      genre
      id
      author {
        name
        age
        id
      }
      stars {
        id
        stars
      }
      movie {
        title
        id
      }
    }
  }
`
