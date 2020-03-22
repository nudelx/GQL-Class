import React from 'react'
import './App.css'
import Card from './card'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_BOOKS = gql`
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
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS)
  if (loading)
    return (
      <div className="paper  ">
        <p>Loading...</p>
      </div>
    )
  if (error)
    return (
      <div className="paper  ">
        <p>Error :(</p>
      </div>
    )
  console.log('data', data)
  console.log('error', error)
  console.log('loading', loading)
  return (
    <div className="App">
      <div className="header">
        <h3> GQL DEMO </h3>
      </div>
      <div className="paper ">
        {data.books.map((b, index) => (
          <Card index={index + 1} key={b.id} {...b} />
        ))}
      </div>
    </div>
  )
}

export default App
