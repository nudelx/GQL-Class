import React, { useState } from 'react'
import './App.css'

import { useQuery } from '@apollo/react-hooks'
import { GET_BOOKS } from './gql/fetch'
import Loading from './loading'
import Error from './error'
import Header from './header'
import Page from './page'
import Modal from './modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const { loading, error, data } = useQuery(GET_BOOKS, {
    // pollInterval: 20000
  })

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  console.log('showModal', showModal)
  return (
    <div className="App">
      <Header title={'Book Shelf'} onAdd={() => setShowModal(!showModal)} />
      <Page books={data.books} />
      <Modal
        showModal={showModal}
        setShowModal={() => setShowModal(!showModal)}
      />
    </div>
  )
}

export default App
