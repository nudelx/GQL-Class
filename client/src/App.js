import React from 'react'
import './App.css'
import Card from './card'
import { useQuery } from '@apollo/react-hooks'
import { GET_BOOKS } from './gql/fetch'
import Loading from './loading'
import Error from './error'

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <Loading />
  if (error) return <Error error={error} />

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
